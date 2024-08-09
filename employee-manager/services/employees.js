import { prisma } from "@/lib/prisma/prisma_client";


export async function getAllEmployees() {
  const employees = await prisma.employees.findMany();
  return employees;
}