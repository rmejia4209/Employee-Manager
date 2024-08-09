import Calendar from "../components/calendar/TimeOffCalendar";
//import MyButton from "../components/my_button"


export default async function Home() {
  //const data = await getData();
  return (
    <>
      <div className="w-1/2 float-left">
        <Calendar/>
      </div>
      <div className="w-1/2 px-6 float-right">
        {/*<MyButton/>*/}
      </div>
    </>
  );
}