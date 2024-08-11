import { addEmployee } from "@/services/add_employee";


export async function POST(request) {
  const data = await request.json();
  await addEmployee(data.firstName, data.lastName);
  return Response.json(null, {status: 200})
}