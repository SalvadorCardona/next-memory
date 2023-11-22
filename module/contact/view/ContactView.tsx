import ViewComponentComponent from "@/module/shared/component/ViewComponentComponent"
import { getDatabaseClient } from "@/module/shared/prismaClient"
import ContactTableComponent from "@/module/contact/components/ContactTableComponent"

export default async function ContactView() {
  const contacts = await getDatabaseClient().contact.findMany({
    include: {
      company: true,
    },
  })

  return (
    <ViewComponentComponent
      title={"Contacts"}
      subtitle={"Show yours contacts"}
      fullWidth={true}
    >
      <ContactTableComponent contacts={contacts} />
    </ViewComponentComponent>
  )
}
