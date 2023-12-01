import { formatDistanceToNow } from 'date-fns';

export function relativeDate(date: Date | string | null) {
  if (!date) return '';
  let dateToFormat = typeof date === 'string' ? new Date(date) : date;
  return formatDistanceToNow(dateToFormat, {
    includeSeconds: true,
    addSuffix: true,
  });
}
