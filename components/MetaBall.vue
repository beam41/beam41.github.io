<template>
  <div class="cover" ref="cover">
    <canvas v-once class="canvas" ref="canvas" />
    <button class="pause-btn" @click="pauseBtn">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const BALL_COUNT = 25

const canvas = ref<HTMLCanvasElement>(null)

const cover = ref<HTMLDivElement>(null)
onMounted(() => {
  canvas.value.style.width = cover.value.clientWidth + 'px'
  canvas.value.style.height = cover.value.clientHeight + 'px'
  var devicePixelRatio = window.devicePixelRatio || 1
  canvas.value.width = cover.value.clientWidth * devicePixelRatio
  canvas.value.height = cover.value.clientHeight * devicePixelRatio
  window.addEventListener('resize', () => {
    canvas.value.style.width = cover.value.clientWidth + 'px'
    canvas.value.width = cover.value.clientWidth * devicePixelRatio
  })
})

const pause = ref(false)
const keepPause = ref(false)
onMounted(() => {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !keepPause.value) {
        pause.value = false
      } else {
        pause.value = true
      }
    })
  })
  observer.observe(canvas.value)
})

function pauseBtn() {
  pause.value = !pause.value
  keepPause.value = !keepPause.value
}

onMounted(() => {
  //#region init gl program
  const gl = canvas.value.getContext('webgl')

  function loadShader(type: number, source: string) {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader))
    }
    return shader
  }

  const vertexShader = loadShader(
    gl.VERTEX_SHADER,
    `
attribute vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}`
  )

  const fragmentShader = loadShader(
    gl.FRAGMENT_SHADER,
    `
precision mediump float;
uniform vec3 metaBalls[${BALL_COUNT}];

vec4 shader(in vec2 fragCoord) {
  float result = 0.;
  for (int i = 0; i < ${BALL_COUNT}; i++) {
    vec3 ball = metaBalls[i];
    if (ball.z == 0.) continue;
    float dx = fragCoord.x - ball.x;
    float dy =  fragCoord.y - ball.y;
    result += ball.z * ball.z / (dx*dx + dy*dy);
  }

  return mix(vec4(${139 / 255},${69 / 255},${
      19 / 255
    }, 1), vec4(1), step(result, 1.));
}

void main() {
  gl_FragColor = vec4(0);
  const float ss = 4.;
  const float s = 1. / ss;

  vec4 curr = shader(gl_FragCoord.xy);
  vec4 q1 = shader(gl_FragCoord.xy + vec2(0.5, 0.5));
  vec4 q2 = shader(gl_FragCoord.xy + vec2(-.5, 0.5));
  vec4 q3 = shader(gl_FragCoord.xy + vec2(-.5, -.5));
  vec4 q4 = shader(gl_FragCoord.xy + vec2(0.5, -.5));
  if (curr == q1 && curr == q2 && curr == q3 && curr == q4) {
    gl_FragColor = curr;
  } else {
    for (float x = -.5; x < .5; x += s)
      for (float y = -.5; y < .5; y += s) {
        if (x == .5) {
            if (y == .5) {
                gl_FragColor += q1;
            } else if (y == -.5) {
                gl_FragColor += q4;
            }
        } else if (x == -.5) {
            if (y == .5) {
                gl_FragColor += q2;
            } else if (y == -.5) {
                gl_FragColor += q3;
            }
        } else if (x == 0. && y == 0.) {
            gl_FragColor += curr;
        } else {
          gl_FragColor += shader(gl_FragCoord.xy + vec2(x, y));
        }
      }

    gl_FragColor /= ss * ss;
  }
}`
  )

  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.useProgram(program)
  //#endregion

  //#region vertex surface for drawing fragment
  const vertexBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)

  const vertexData = new Float32Array([
    -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, -1.0,
  ])

  gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW)

  const positionLocation = gl.getAttribLocation(program, 'position')
  gl.enableVertexAttribArray(positionLocation)
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
  //#endregion

  //#region metaball
  const metaBallsLocation = gl.getUniformLocation(program, 'metaBalls')

  class Ball {
    position: { x: number; y: number; r: number }
    speed: { x: number; y: number }
    constructor(x: number, y: number, r: number, sx: number, sy: number) {
      this.position = {
        x: x,
        y: y,
        r: r,
      }
      this.speed = {
        x: sx,
        y: sy,
      }
    }
  }

  const metaBalls = Array(BALL_COUNT)
    .fill(null)
    .map(
      (_) =>
        new Ball(
          Math.random(),
          Math.random() * gl.canvas.height,
          Math.random() * 100 + 50,
          (Math.random() - 0.5) / 5,
          (Math.random() - 0.5) / 5
        )
    )
    .sort((a, b) => b.position.r - a.position.r)

  let prevTimeStamp = 0
  const metaBallsUniform = new Float32Array(3 * BALL_COUNT)
  // halves the render framerate
  let frameon = false
  function step(timestamp: number) {
    frameon = !frameon
    if (pause.value || !frameon) {
      requestAnimationFrame(step)
      prevTimeStamp = timestamp
      return
    }
    metaBallsUniform.fill(0)
    const deltaTime = Math.min(timestamp - prevTimeStamp, 1000 / 30)
    prevTimeStamp = timestamp

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

    const maxBall = Math.min(gl.canvas.width / 200, BALL_COUNT)

    // animate
    for (let i = 0; i < maxBall; i++) {
      const ball = metaBalls[i]
      ball.position.x += (ball.speed.x / gl.canvas.width) * deltaTime
      ball.position.y += ball.speed.y * deltaTime
      if (ball.position.x < 0) {
        ball.position.x = 0
        ball.speed.x *= -1
      } else if (ball.position.x > 1) {
        ball.position.x = 1
        ball.speed.x *= -1
      }
      if (ball.position.y < 0) {
        ball.position.y = 0
        ball.speed.y *= -1
      } else if (ball.position.y > gl.canvas.height) {
        ball.position.y = gl.canvas.height
        ball.speed.y *= -1
      }
    }

    // draw
    for (let i = 0; i < maxBall; i++) {
      metaBallsUniform[3 * i] = metaBalls[i].position.x * gl.canvas.width
      metaBallsUniform[3 * i + 1] = metaBalls[i].position.y
      metaBallsUniform[3 * i + 2] = metaBalls[i].position.r
    }
    gl.uniform3fv(metaBallsLocation, metaBallsUniform)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
  //#endregion
})
</script>

<style lang="scss" scoped>
.cover {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

// .canvas {
//   transform: scale(0.25) translate(-150%, -150%);
// }

.pause-btn {
  display: flex;
  position: absolute;
  bottom: 4px;
  right: 4px;
  border: none;
  background: rgba(127, 127, 127, 0.5);
  backdrop-filter: blur(4px);
  padding: 2px;
  border-radius: 100px;
  color: white;
}
</style>
