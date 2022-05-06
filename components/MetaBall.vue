<template>
  <div class="cover" ref="cover">
    <canvas v-once class="canvas" ref="canvas" />
  </div>
</template>

<script setup lang="ts">
function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader))
  }
  return shader
}

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

const BALL_COUNT = 25

const canvas = ref<HTMLCanvasElement>(null)

const cover = ref<HTMLDivElement>(null)
onMounted(() => {
  canvas.value.width = cover.value.clientWidth * 2
  canvas.value.height = cover.value.clientHeight * 2
  window.addEventListener('resize', () => {
    canvas.value.width = cover.value.clientWidth * 2
  })
})

const visible = ref(true)
onMounted(() => {
  // intesection observer here
})

onMounted(() => {
  //#region init gl program
  const gl = canvas.value.getContext('webgl')

  const vertexShader = loadShader(
    gl,
    gl.VERTEX_SHADER,
    `
attribute vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}`
  )

  const fragmentShader = loadShader(
    gl,
    gl.FRAGMENT_SHADER,
    `
precision mediump float;
uniform vec3 metaBalls[${BALL_COUNT}];

void main() {
  float result = 0.;
  for (int i = 0; i < ${BALL_COUNT}; i++) {
    vec3 ball = metaBalls[i];
    if (ball.z == 0.) continue;
    float dx = gl_FragCoord.x - ball.x;
    float dy =  gl_FragCoord.y - ball.y;
    result += ball.z * ball.z / (dx*dx + dy*dy);
  }

  gl_FragColor = mix(vec4(${139 / 255},${69 / 255},${
      19 / 255
    }, 1), vec4(1), step(result, 1.));
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

  const metaBalls = Array(BALL_COUNT)
    .fill(0)
    .map(
      (_, i) =>
        new Ball(
          Math.random(),
          Math.random() * gl.canvas.height,
          Math.random() * 100 + 50,
          (Math.random() - 0.5) / 4500,
          Math.random() - 0.5
        )
    )
    .sort((a, b) => b.position.r - a.position.r)

  let prevTimeStamp = 0
  const metaBallsUniform = new Float32Array(3 * BALL_COUNT)
  function step(timestamp: number) {
    if (!visible) return
    metaBallsUniform.fill(0)
    const deltaTime = timestamp - prevTimeStamp
    prevTimeStamp = timestamp

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

    // animate
    for (const ball of metaBalls) {
      ball.position.x += ball.speed.x * deltaTime
      ball.position.y += ball.speed.y * deltaTime
      if (ball.position.x < 0) {
        ball.position.x = 0
        ball.speed.x *= -1
      }
      if (ball.position.x > 1) {
        ball.position.x = 1
        ball.speed.x *= -1
      }
      if (ball.position.y < 0) {
        ball.position.y = 0
        ball.speed.y *= -1
      }
      if (ball.position.y > gl.canvas.height) {
        ball.position.y = gl.canvas.height
        ball.speed.y *= -1
      }
    }
    // draw
    const maxBall = gl.canvas.width / 100
    for (let i = 0; i < Math.min(maxBall, BALL_COUNT); i++) {
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
}

.canvas {
  transform: scale(0.5) translate(-50%, -50%);
}
</style>
