import UserFormComponent from "@/module/user/component/UserFormComponent"
import WrapperComponent from "@/module/shared/component/WrapperComponent"

export function AdminView() {
  return (
    <>
      <WrapperComponent>
        <UserFormComponent></UserFormComponent>
      </WrapperComponent>
    </>
  )
}
