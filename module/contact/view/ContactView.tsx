import WrapperComponent from "@/module/shared/component/WrapperComponent"
import TitleComponent from "@/module/shared/component/TitleComponent"
import SubTitleComponent from "@/module/shared/component/SubTitleComponent"
import ContactFormComponent from "@/module/contact/components/ContactFormComponent"
import getCompanies from "@/module/company/action/getCompanies"
import { Company } from ".prisma/client"
import updateContact from "@/module/contact/action/updateContact"
import { formDataToObject } from "@/module/shared/application/formDataToObject"

export default async function ContactView() {
  const compagnies = await getCompanies()

  async function handleFormSubmit(e: FormData) {
    "use server"

    updateContact(formDataToObject(e))
      .catch((e) => console.log(e))
      .then((e) => console.log(e))
  }

  return (
    <>
      <WrapperComponent>
        <TitleComponent>Create contact</TitleComponent>
        <SubTitleComponent>Page de création du contact</SubTitleComponent>
        <ContactFormComponent compagnies={compagnies} onSubmit={handleFormSubmit} />
      </WrapperComponent>
    </>
  )
}
