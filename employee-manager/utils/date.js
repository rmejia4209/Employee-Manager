

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

/* TODO: rewrite
 * Find the nearest previous sunday from the 1st of the given month in 
 * the given year
 */
const findPreviousSunday = (month, year) => {
  let start = new Date(`${month}/1/${year}`);
  while (start.getDay() !== 0) {
    start.setDate(start.getDate() -1 );
  }
  return start;
}

/* TODO: rewrite
 * Add days to list to fill out dates for calendar component
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


/* TODO: rewrite
 * Build an object with months and days
 */
export default function buildCalendarDates(year) {
  // Set year to current year if undefined
  year = year || new Date().getFullYear();

  return months.map((month, idx) => (
    {"name": month, "days": addDays(idx, year)}
  ));
}
