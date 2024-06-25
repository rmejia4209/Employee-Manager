import buildCalendarDates from "@/utils/date";
import Month from "./month";


async function Calendar() {
  const months = buildCalendarDates();
  return (
    <div className="grid grid-cols-3 gap-x-16 gap-y-6">
      {months.map((month, i) => (
        <Month month={month.name} dates={month.days} key={i}/>
      ))}
    </div>

  );
}

export default Calendar;