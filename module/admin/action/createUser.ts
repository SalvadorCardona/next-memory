import {Prisma, User} from "@prisma/client";
import {getDatabaseClient} from "../../shared/prismaClient";
import UserCreateArgs = Prisma.UserCreateArgs;


export default async function createUser(user: UserCreateArgs) {
  getDatabaseClient().user.create(user)
}