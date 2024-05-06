export function debounce<T extends (...args: any[]) => any>(cb: T, wait: number) {
	let h = 0;
	const callable = (...args: any) => {
		clearTimeout(h);
		h = setTimeout(() => cb(...args), wait);
	};
	return <T>(<any>callable);
}