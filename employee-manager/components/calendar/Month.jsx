import Day from "./Day";


export default function Month({month, dates}) {
  
  const days = ["S", "M", "T", "W", "T", "F", "S"]  
  return (
    <div className="w-52 bg-base-100 px-4 py-2 border-2 border-secondary rounded">
      <h1 className="text-lg text-secondary font-bold">{month}</h1>
      <div className="grid place-items-center grid-cols-7 font-bold text-black border-b-black border-b-2">
        {days.map((day, i) => (
          <p key={i}>{day}</p>
        ))}
      </div>
      <div className="grid place-items-center grid-cols-7">
        {dates.map((date, i) => (
          <Day day={date} key={i}/>
        ))}
      </div>
      </div>
    
  );

}