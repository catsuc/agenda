export function getTimeDurationFormatted(start: Date, end: Date): string {
  const startTimestamp = start.getTime();
  const endTimestamp = end.getTime();

  const seconds = Math.floor((endTimestamp - startTimestamp) / 1000);
  const hours = Math.floor(seconds / 60 / 60);
  const minutes = Math.floor((seconds / 60) % 60);

  if (!hours) return `${minutes} minuto${minutes > 1 ? 's' : ''}`;

  if (!minutes) return `${hours} hora${hours > 1 ? 's' : ''}`;

  return `${hours} hora${hours > 1 ? 's' : ''} e ${minutes} minuto${minutes > 1 ? 's' : ''}`;
}

export function getStartTimeFormatted(start: Date): string {
  const hours = start.getHours().toString().padStart(2, '0');
  const minutes = start.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

const dateFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' });

export function getDateFormatted(date: Date): string {
  return dateFormatter.format(date);
}
