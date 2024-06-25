import { employees } from "@/temp-data/employees";
import EmployeeCard from "./components/employee_card"
import Month from "./components/month";
import Calendar from "./components/calendar";


async function getData() {
  const url = "https://66798afa18a459f639505cdf.mockapi.io/api/v1/employees"
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json()
}


export default async function Home() {
  const data = await getData();
  return (
    <div className="w-1/2">
      <Calendar/>
    </div>

  );
}