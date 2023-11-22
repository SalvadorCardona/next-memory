import ContactFormComponent from "@/module/contact/components/ContactFormComponent"
import getCompanies from "@/module/company/action/getCompanies"
import updateContact from "@/module/contact/action/updateContact"
import { formDataToObject } from "@/module/shared/application/formDataToObject"
import ViewComponentComponent from "@/module/shared/component/ViewComponentComponent"

export default async function ContactView() {
  const compagnies = await getCompanies()

  async function handleFormSubmit(e: FormData) {
    "use server"

    updateContact(formDataToObject(e))
      .catch((e) => console.log(e))
      .then((e) => console.log(e))
  }

  return (
    <ViewComponentComponent title={"Contacts"} subtitle={"Show yours contacts"}>
      <ContactFormComponent compagnies={compagnies} onSubmit={handleFormSubmit} />
    </ViewComponentComponent>
  )
}
