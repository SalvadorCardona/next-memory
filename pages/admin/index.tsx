import {AdminView} from "@/module/admin/view/AdminView";

export interface indexComponentPropsInterface {
}

export default function index(props: indexComponentPropsInterface) {
  return (
    <>
      <AdminView></AdminView>
    </>
  )
}