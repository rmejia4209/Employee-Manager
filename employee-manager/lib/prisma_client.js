import { PrismaClient } from "@prisma/client";

// export the global.prisma property if defined, otherwise use a new connection
export const prisma = globalThis.prisma || new PrismaClient();

// For non-production environments, set the global.prisma property to prisma
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
