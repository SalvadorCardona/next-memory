
import ButtonComponent from "@/module/shared/component/ButtonComponent";


export  function AdminView() {
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