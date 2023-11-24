import { Company, ModelName } from ".prisma/client"
import { Contact } from "@prisma/client"
import ContactFormComponent from "@/module/contact/components/ContactFormComponent"
import ContactTableComponent from "@/module/contact/components/ContactTableComponent"
import { createElement } from "react"
import { getDatabaseClient } from "@/module/shared/prismaClient"

type ModelNameList = typeof ModelName

export interface EntityBag<T> {
  factory: (data?: T) => Omit<T, "id">
  modelName: ModelNameList
  formComponent?: (props?: { data: T }) => JSX.Element | null
  listComponent?: (props?: { data: T[] }) => JSX.Element | null
  updateComponent?: (props?: { data: T }) => JSX.Element | null
}

abstract class Entity<T> {
  modelName: ModelNameList = ""
  factory(data: Partial<T>): T {
    return {}
  }
  formComponent = null
  listComponent = null
  updateComponent = null

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

class ContactEntity extends Entity<Contact> {
  modelName: ModelNameList = "contact"
  async getAll() {
    return getDatabaseClient().contact.findMany({
      include: {
        company: true,
      },
    })
  }
  factory(data: Partial<Contact>) {
    return {
      name: data?.name || "",
      email: data?.email || "",
      message: data?.message || "",
    }
  }
  formComponent = ContactFormComponent
  listComponent = ContactTableComponent
}

class CompanyEntity extends Entity<Company> {
  modelName: ModelNameList = "company"
}
export const entityList: Entity[] = [new ContactEntity(), new CompanyEntity()]

export function getEntity<T>(modelName: ModelNameList): Entity<T> | undefined {
  return entityList.find((bag) => bag.modelName === modelName.toLowerCase())
}
