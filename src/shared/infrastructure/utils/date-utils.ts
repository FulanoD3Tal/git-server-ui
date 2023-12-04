import { formatDistanceToNow } from 'date-fns';

export function relativeDate(date: Date | string | null) {
  if (!date) return '';
  let dateToFormat = typeof date === 'string' ? new Date(date) : date;
  try {
    return formatDistanceToNow(dateToFormat, {
      includeSeconds: true,
      addSuffix: true,
    });
  } catch (error) {
    if (error instanceof RangeError && date !== '') {
      return `: ${date}`;
    }
  }
}
