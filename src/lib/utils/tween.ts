import { lerp, normalize } from './number';

export function pingpongLoop(
	from: number,
	to: number,
	start: number,
	duration: number,
	offset: number,
	current: number,
	easing: (x: number) => number,
) {
	return pingpongOnce(from, to, 0, duration, (current - start + offset) % duration, easing);
}

export function pingpongOnce(
	from: number,
	to: number,
	start: number,
	duration: number,
	current: number,
	easing: (x: number) => number,
) {
	const timeNormalize = normalize(start, start + duration, current);
	const currentT = easing((timeNormalize > 0.5 ? 1 - timeNormalize : timeNormalize) * 2);
	return lerp(from, to, currentT);
}

export function tween(
	from: number,
	to: number,
	start: number,
	duration: number,
	current: number,
	easing: (x: number) => number,
) {
	const timeNormalize = normalize(start, start + duration, current);
	const currentT = easing(timeNormalize);
	return lerp(from, to, currentT);
}

// https://easings.net/
export function easeOutBounce(x: number) {
	const n1 = 7.5625;
	const d1 = 2.75;

	if (x < 1 / d1) {
		return n1 * x * x;
	} else if (x < 2 / d1) {
		return n1 * (x -= 1.5 / d1) * x + 0.75;
	} else if (x < 2.5 / d1) {
		return n1 * (x -= 2.25 / d1) * x + 0.9375;
	} else {
		return n1 * (x -= 2.625 / d1) * x + 0.984375;
	}
}

export function easeInOutSine(x: number): number {
	return -(Math.cos(Math.PI * x) - 1) / 2;
}
