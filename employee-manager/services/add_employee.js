import { prisma } from "@/lib/prisma_client";


export async function addEmployee (firstName, lastName) {
  await prisma.employees.create({
    data: {
      firstName: firstName,
      lastName: lastName,
    },
  });
  console.log("Done");
}

