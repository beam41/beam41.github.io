import dayjs from 'dayjs';

export function durationToString(start: dayjs.Dayjs, end?: dayjs.Dayjs): string {
	const diffMonth = (end ?? dayjs().startOf('M')).add(1, 'M').diff(start, 'M');
	const year = Math.trunc(diffMonth / 12);
	const month = diffMonth % 12;
	// prettier-ignore
	return (
		(year > 0
			? `${year} yr` + (year > 1 ? 's' : '') + (month > 0 ? ' ' : '')
			: '') +
		(month > 0
			? `${month} mo` + (month > 1 ? 's' : '')
			: '')
	)
}
