import { Prisma } from "@prisma/client"
import { getDatabaseClient } from "@/module/shared/prismaClient"
import ContactUncheckedCreateInput = Prisma.ContactUncheckedCreateInput

export default function updateContact(contact: ContactUncheckedCreateInput) {
  return getDatabaseClient().contact.create({ data: contact })
}
