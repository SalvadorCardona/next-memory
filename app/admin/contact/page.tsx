import { AdminView } from "@/module/admin/view/AdminView"
import ContactView from "@/module/contact/view/ContactView"
import { useRouter } from "next/router"

export default function page() {
  return (
    <>
      <ContactView></ContactView>
    </>
  )
}
