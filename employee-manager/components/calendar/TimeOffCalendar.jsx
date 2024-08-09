import buildCalendarDates from "@/utils/calendar_helper";
import Month from "@/components/calendar/Month";


async function TimeOffCalendar() {
  const months = buildCalendarDates();
  return (
    <div className="grid grid-cols-3 gap-x-16 gap-y-6">
      {months.map((month, i) => (
        <Month month={month.name} dates={month.days} key={i}/>
      ))}
    </div>

  );
}

export default TimeOffCalendar;