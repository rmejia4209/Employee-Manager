
/**
 * Find the nearest previous sunday from the 1st of the given month in 
 * the given year.
 * 
 * @param {number} month - the month in numerical form (i.e., 11 for November)
 * @param {number} year - the year
 * @returns {Date} - A date object
 *  
 * @example
 * findPreviousSunday(7, 2024); // returns date object for 6/30/2024
 */
const findPreviousSunday = (month, year) => {
  let start = new Date(`${month}/1/${year}`);
  while (start.getDay() !== 0) {
    start.setDate(start.getDate() -1 );
  }
  return start;
}


/**
 * Adds 42 days to a list beginning from the closest previous sunday from the
 * first of the month. Regular dates are those that are within the month.
 * Holder dates are days that do not belong to the month (i.e, used to "even"
 * out blocks on the UI, will be greyed out)
 * 
 * @param {number} month - the month in numerical form (i.e., 10 for November)
 * @param {number} year - the year
 * @returns {object[]} - A list of days
 * @returns {number} - returns[].date - the number associated with the date
 * @returns {string} - returns[].dayType - 'holder' || 'regular'
 *  
 */
const addDays = (month, year) => {

  let currDate = findPreviousSunday(month+1, year);
  const days = [];

  for (let i = 0; i < 42; i++) {
    // Set the day's type as regular if it is in the same month
    let dayType = '';
    (currDate.getMonth() !== month) ? dayType = "holder" : dayType = 'regular';

    // Add the day & its type to the list
    days.push({date: currDate.getDate(), dayType: dayType});

    // Increment the day
    currDate.setDate(currDate.getDate() + 1);
  }
  return days;
}

/**
 * Builds a list of objects with months and days within the month (padded,
 * so each month contains 42 days beginning from the nearest sunday before the
 * 1st of the month).
 * 
 * @param {number} year - the year (set to current year if not provided)
 * @returns {Object[]} - A list of months & days
 * @returns {string} - returns[].month - the name of the month
 * @returns {Object[]} - returns[].days - A list of the days in the month
 * @returns {number} - returns[].days[].date - the number associated with the date
 * @returns {string} - returns[]days[].dayType - 'holder' | 'regular'
 *  
 */
const buildCalendarDates = (year) => {
  // Set year to current year if undefined
  year = year || new Date().getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  return months.map((month, idx) => (
    {"name": month, "days": addDays(idx, year)}
  ));
}

export default buildCalendarDates
