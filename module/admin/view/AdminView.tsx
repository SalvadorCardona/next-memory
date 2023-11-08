
"use server"
import ButtonComponent from "@/module/shared/component/ButtonComponent";

export async function AdminView() {
   function addUserHandler() {

  }

  return (
    <>
      <div>
        <ButtonComponent onClick={addUserHandler}>
          add User
        </ButtonComponent>
      </div>
    </>
  )
}