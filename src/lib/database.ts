import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";

const adapter = new PrismaPg({
    connectionString: env.DATABASE_URL
})

const gloablVariable = global as unknown as {prisma: PrismaClient}
const prisma = gloablVariable.prisma || new PrismaClient({adapter})

if(process.env.NODE_ENV !== "production") gloablVariable.prisma = prisma

export {prisma}