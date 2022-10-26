import dateFormat from 'dateformat'

export class DateFormatter {
  /**
   * Formats to MMMM D, YYYY. Example: August 9, 2022.
   *
   * @returns {string} 
   */
  getFormattedDate(date) {
    return dateFormat(new Date(date), 'mmmm d, yyyy')
  }
}
