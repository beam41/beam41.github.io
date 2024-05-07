export function lerp(a: number, b: number, t: number) {
	return a + (b - a) * clamp(0, 1, t);
}

export function normalize(a: number, b: number, t: number) {
	return clamp(0.0, 1.0, (t - a) / (b - a));
}

export function clamp(a: number, b: number, t: number) {
	return Math.min(Math.max(t, a), b);
}
