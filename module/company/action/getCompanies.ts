import { getDatabaseClient } from "@/module/shared/prismaClient"

export default async function getCompanies() {
  return getDatabaseClient().company.findMany()
}
