/**
 * Examples:
 * * `getDuration(234234)`
 * * `getDuration(date1, date2)`
 * * `getDuration(date1)`
 *
 * Result: `2 days, 17 hours, 3 mins, 54 secs`
 *
 * @param start Seconds or Start Date
 * @param end End Date (optional), ignored if _start_ is seconds.
 */
export const getDuration = (start: Date | number, end: Date = null, suffix = null): string => {
    let seconds = 0;
    if (typeof start === 'number') {
        seconds = start;
    } else {
        if (end === null) {
            end = new Date();
        }
        seconds = Math.ceil((end.getTime() - start.getTime()) / 1000);
    }

    if (seconds < 2) {
        return 'now';
    }

    const d = Math.floor(seconds / 86_400);
    const h = Math.floor((seconds % 86_400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    const dDisplay = d > 0 ? d + (d === 1 ? ' day' : ' days') : null;
    const hDisplay = h > 0 ? h + (h === 1 ? ' hour' : ' hours') : null;
    const mDisplay = m > 0 ? m + (m === 1 ? ' min' : ' mins') : null;
    const sDisplay = s > 0 ? s + (s <= 1 ? ' sec' : ' secs') : null;

    const parts = [dDisplay, hDisplay, mDisplay, sDisplay].filter(Boolean);
    // return parts.join(', ');
    return `${parts[0]} ${suffix}`.trim();

    // return (dDisplay + hDisplay + mDisplay + sDisplay).trim().slice(0, -1);
};
