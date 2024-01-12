"use server"
import { getEntity } from "@/module/shared/entity"
import { createElement } from "react"
import updateContact from "@/module/contact/action/updateContact"
import { formDataToObject } from "@/module/shared/application/formDataToObject"

interface PageProps {
  params: {
    name: string
    id: string
  }
}

export default async function Page(bag: PageProps) {
  const entity = getEntity(bag.params.name)

  if (!entity) {
    return {
      notFound: true,
    }
  }

  const formComponent = entity.formComponent
  const data = await entity.getOne(bag.params.id)
  const update = entity.update

  async function handleFormSubmit(e: FormData) {
    update(formDataToObject(e))
      .catch((e) => console.log(e))
      .then((e) => console.log(e))
  }

  return <>{createElement(formComponent, { data, onSubmit: handleFormSubmit })}</>
}
