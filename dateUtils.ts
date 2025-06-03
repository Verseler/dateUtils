export class DateUtils {
  // Format Date as YYYY-MM-DD
  static formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  // Format Time as HH:mm:ss
  static formatTime(date: Date): string {
    return date.toTimeString().split(' ')[0];
  }

  // Format DateTime as YYYY-MM-DD HH:mm:ss
  static formatDateTime(date: Date): string {
    return `${this.formatDate(date)} ${this.formatTime(date)}`;
  }

  // Parse date from string (ISO format or custom format)
  static parseDate(str: string): Date | null {
    const date = new Date(str);
    return isNaN(date.getTime()) ? null : date;
  }

  // Get difference in days between two dates
  static dateDiffInDays(start: Date, end: Date): number {
    const diff = end.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  // Get difference in hours between two dates
  static dateDiffInHours(start: Date, end: Date): number {
    const diff = end.getTime() - start.getTime();
    return diff / (1000 * 60 * 60);
  }

  // Get difference in minutes between two dates
  static dateDiffInMinutes(start: Date, end: Date): number {
    const diff = end.getTime() - start.getTime();
    return diff / (1000 * 60);
  }

  // Add days to a date
  static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  // Add hours to a date
  static addHours(date: Date, hours: number): Date {
    const result = new Date(date);
    result.setHours(result.getHours() + hours);
    return result;
  }

  // Check if two dates are the same day
  static isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  // Get current date in YYYY-MM-DD format
  static today(): string {
    return this.formatDate(new Date());
  }

  // Get time ago (e.g., "2 days ago")
  static timeAgo(date: Date): string {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals: [number, string][] = [
      [31536000, 'year'],
      [2592000, 'month'],
      [86400, 'day'],
      [3600, 'hour'],
      [60, 'minute'],
      [1, 'second'],
    ];

    for (const [secondsPerUnit, unit] of intervals) {
      const count = Math.floor(seconds / secondsPerUnit);
      if (count >= 1) {
        return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
      }
    }

    return 'just now';
  }

  // Check if a date is in the past
  static isPast(date: Date): boolean {
    return date.getTime() < new Date().getTime();
  }

  // Check if a date is in the future
  static isFuture(date: Date): boolean {
    return date.getTime() > new Date().getTime();
  }
}
