export function lerp(a, b, t) {
  return a + (b - a) * clamp(0, 1, t)
}

export function normalize(a, b, t) {
  return (clamp(a, b, t) - a) / (b - a)
}

export function clamp(a, b, t) {
  return Math.min(Math.max(t, a), b)
}
