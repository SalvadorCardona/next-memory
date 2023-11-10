import { Prisma } from "@prisma/client"
import { getDatabaseClient } from "../shared/prismaClient"
import UserCreateArgs = Prisma.UserCreateArgs

export default function createUser(user: UserCreateArgs) {
  return getDatabaseClient().user.create(user)
}
