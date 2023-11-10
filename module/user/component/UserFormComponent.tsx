import createUser from "@/module/user/createUser"
import ButtonComponent from "@/module/shared/component/form/ButtonComponent"

export default function UserFormComponent() {
  async function addUserHandler() {
    "use server"
    console.log("ici")
    createUser({ data: { name: "keba", email: "a@aaaaa.c" } })
      .then((e) => {
        console.log(e, "a")
      })
      .catch((e) => {
        console.log(e, "b")
      })
  }

  return (
    <>
      <form action={addUserHandler}>
        <ButtonComponent>Ajouter user</ButtonComponent>
      </form>
    </>
  )
}
