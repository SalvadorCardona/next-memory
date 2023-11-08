import {AdminView} from "@/module/admin/view/AdminView";
import {actionUser} from "@/module/admin/view/actionUser";


export interface indexComponentPropsInterface {
}

export default function index(props: indexComponentPropsInterface) {
  function test() {
    actionUser()
        
  }
  return (
    <>
      <AdminView></AdminView>
    </>
  )
}