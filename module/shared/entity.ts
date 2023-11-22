import { ModelName } from ".prisma/client"
import { Contact } from "@prisma/client"
import ContactFormComponent from "@/module/contact/components/ContactFormComponent"
import ContactTableComponent from "@/module/contact/components/ContactTableComponent"
import { createElement } from "react"
import { getDatabaseClient } from "@/module/shared/prismaClient"

type ModelNameList = typeof ModelName

export interface EntityBag<T> {
  factory: (data?: T) => Omit<T, "id">
  modelName: ModelNameList
  formComponent?: (data?: { data: T }) => JSX.Element
  listComponent?: (props?: { data: T[] }) => JSX.Element
  updateComponent?: (props?: { data: T }) => JSX.Element
}

abstract class Entity<T> {
  modelName: ModelNameList = ""
  factory(): T {
    return {}
  }
  formComponent = createElement("div")
  listComponent = createElement("div")

  async update(data: T) {
    getDatabaseClient()[this.modelName].create({ data })
  }

  async getAll(): T[] {
    const result = await getDatabaseClient()[this.modelName].findMany()
    return result
  }

  async getOne(id: number): T {
    return getDatabaseClient()[this.modelName].findUnique({ where: { id } })
  }
}

class ContactEntity<Contact> extends Entity<Contact> {
  modelName: ModelNameList = "contact"

  async getAll(): Contact[] {
    return getDatabaseClient().contact.findMany({
      include: {
        company: true,
      },
    })
  }

  factory(data?: Contact) {
    return {
      name: data?.name || "",
      email: data?.email || "",
      message: data?.message || "",
    }
  }
  formComponent = ContactFormComponent
  listComponent = ContactTableComponent
}

export const entityList: Entity[] = [new ContactEntity()]

export function getEntity<T>(modelName: ModelNameList): Entity<T> | undefined {
  return entityList.find((bag) => bag.modelName === modelName.toLowerCase())
}
