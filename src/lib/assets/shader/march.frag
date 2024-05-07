#ifndef GL_FRAGMENT_PRECISION_HIGH
precision mediump float;
#else
precision highp float;
#endif

uniform vec2 resolution;

uniform vec2 rotateCamera;
uniform float mouseRotateStrength;

uniform float rotateYValue;

uniform vec2 nameTextureSize;
uniform sampler2D nameTexture;

#define EPS (0.1)
#define MAX_DIST (1000.0)
#define FOG_START (500.0)

#ifdef MOBILE
#define MAX_STEPS (128)
#else
#define AA (3)
#define MAX_STEPS (256)
#endif

float round(float a) {
	return floor(a + 0.5);
}

vec3 round(vec3 a) {
	return vec3(round(a.x), round(a.y), round(a.z));
}

float normalize(float a, float minVal, float maxVal) {
	return clamp((a - minVal) / (maxVal - minVal), 0.0, 1.0);
}

// https://iquilezles.org/articles/distfunctions/
float sdSphere(vec3 p, float s) {
	return length(p) - s;
}

float sdBox(vec2 p, vec2 b) {
	vec2 d = abs(p) - b;
	return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float sdBox(vec3 p, vec3 b) {
	vec3 q = abs(p) - b;
	return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
}

float sdRoundBox(vec3 p, vec3 b, float r) {
	vec3 q = abs(p) - b + r;
	return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - r;
}

float opUnion(float d1, float d2) {
	return min(d1, d2);
}

float opSubtraction(float d1, float d2) {
	return max(-d1, d2);
}

float opIntersection(float d1, float d2) {
	return max(d1, d2);
}

float opXor(float d1, float d2) {
	return max(min(d1, d2), -max(d1, d2));
}

// https://www.shadertoy.com/view/4tcGDr
mat3 rotateX(float theta) {
	float c = cos(theta);
	float s = sin(theta);
	return mat3(vec3(1, 0, 0), vec3(0, c, -s), vec3(0, s, c));
}

mat3 rotateY(float theta) {
	float c = cos(theta);
	float s = sin(theta);
	return mat3(vec3(c, 0, s), vec3(0, 1, 0), vec3(-s, 0, c));
}

mat3 rotateZ(float theta) {
	float c = cos(theta);
	float s = sin(theta);
	return mat3(vec3(c, -s, 0), vec3(s, c, 0), vec3(0, 0, 1));
}

float opSmoothUnion(float d1, float d2, float k) {
	float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
	return mix(d2, d1, h) - k * h * (1.0 - h);
}

float opSmoothSubtraction(float d1, float d2, float k) {
	float h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
	return mix(d2, -d1, h) + k * h * (1.0 - h);
}

float opSmoothIntersection(float d1, float d2, float k) {
	float h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
	return mix(d2, d1, h) + k * h * (1.0 - h);
}

float opExtrusion(vec3 p, float d, float h) {
	vec2 w = vec2(d, abs(p.z) - h);
	return min(max(w.x, w.y), 0.0) + length(max(w, 0.0));
}

float opRound(float d, float rad) {
	return d - rad;
}

// the best I can come up with font rendering.
// Really noisy at high EPS.
float sdName(vec2 p, float scale) {
	float ratio = nameTextureSize.x / nameTextureSize.y;

	float samp = texture2D(nameTexture, p / vec2(ratio, -1) / scale / 2.0 + 0.5).r;

	float signedDistance = samp - 0.5;

	return -signedDistance;
}

float sceneSDF(vec3 pos) {
	const vec3 s = vec3(300.0);

	pos *= rotateX(-rotateCamera.y * mouseRotateStrength);
	pos *= rotateY(-rotateCamera.x * mouseRotateStrength + rotateYValue);

	pos = pos - s * round(pos / s);

	// this help with performance so much
	// mainly because it skip sdName check which confuse raymarch somehow
	// not perfect method but work fine enough
	float boundingBox = sdBox(pos, vec3(35.0, 12.0, 2.5) + 1.0);
	if (boundingBox > 1.0) return boundingBox;

	float nameDist = opExtrusion(pos, sdName(pos.xy, 5.0), 2.5);

	float badgeDist = sdRoundBox(pos, vec3(35.0, 12.0, 1.5), 1.0);

	float revealSpereDist = sdSphere(pos, (length(rotateCamera) + abs(rotateYValue)) * 80.0);

	float revealBadgeDist = opSmoothIntersection(badgeDist, revealSpereDist, 0.8);

	float mixDist = opSmoothUnion(nameDist, revealBadgeDist, 0.8);

	return opRound(mixDist, 0.2);
}

vec3 calculateNormal(vec3 pos) {
	#ifndef MOBILE
	vec3 vp = vec3(
		sceneSDF(pos + vec3(EPS, 0.0, 0.0)),
		sceneSDF(pos + vec3(0.0, EPS, 0.0)),
		sceneSDF(pos + vec3(0.0, 0.0, EPS))
	);
	#else
	float vp = sceneSDF(pos);
	#endif

	vec3 vm = vec3(
		sceneSDF(pos - vec3(EPS, 0.0, 0.0)),
		sceneSDF(pos - vec3(0.0, EPS, 0.0)),
		sceneSDF(pos - vec3(0.0, 0.0, EPS))
	);

	return normalize(vp - vm);
}

void main() {
	vec4 color = vec4(0.0);
	#if AA > 1
	for (int m = 0; m < AA; m++)
		for (int n = 0; n < AA; n++) {
			vec2 o = vec2(float(m), float(n)) / float(AA) - 0.5;
			vec2 uv = (gl_FragCoord.xy + o) * 2.0;
			#else
			vec2 uv = gl_FragCoord.xy * 2.0;
			#endif
			uv = (uv - resolution.xy) / min(resolution.x, resolution.y);

			vec3 pos = vec3(0.0, 0.0, -100.0);
			vec3 posStart = pos;
			vec3 rayDirection = normalize(vec3(uv, 2));

			// ray marching
			float dist = EPS;
			for (int i = 0; i < MAX_STEPS; i++) {
				dist = sceneSDF(pos);
				pos += rayDirection * dist;

				if (dist < EPS || pos.z > MAX_DIST) break;
			}

			if (dist < EPS) {
				const float CONTRIBUTE_FACTOR = 3.0;
				vec3 normal = (calculateNormal(pos) + 1.0) / CONTRIBUTE_FACTOR;

				float fogPercent = normalize(distance(posStart, pos), FOG_START, MAX_DIST);

				color += vec4(vec3(normal.r + normal.g), 1.0) * (1.0 - fogPercent);
			}

			#if AA > 1
		}
	color /= float(AA * AA);
	#endif
	gl_FragColor = vec4(1.0) * (1.0 - color.a) + color;
}
