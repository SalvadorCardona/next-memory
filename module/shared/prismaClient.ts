import { PrismaClient } from "@prisma/client"

export function getDatabaseClient() {
  return new PrismaClient()
}
