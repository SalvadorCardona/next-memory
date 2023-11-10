import FormComponentComponent from "@/module/shared/component/form/FormComponentComponent"
import InputComponent from "@/module/shared/component/form/InputComponent"
import { Company } from ".prisma/client"
import SelectComponent from "@/module/shared/component/form/SelectComponent"
import ButtonComponent from "@/module/shared/component/form/ButtonComponent"
import { FormEvent } from "react"

export interface ContactFormComponentPropsInterface {
  compagnies: Company[]
  onSubmit?: (event: FormEvent) => void
}

export default function ContactFormComponent(
  props: ContactFormComponentPropsInterface
) {
  const options = props.compagnies.map((compagny) => {
    return {
      value: compagny.id,
      label: compagny.name,
    }
  })

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <FormComponentComponent action={props.onSubmit}>
      <InputComponent
        name={"name"}
        label={"Nom du contact"}
        type={"text"}
        required={true}
      />
      <InputComponent
        name={"email"}
        label={"Email du contact"}
        type={"email"}
        required={true}
      />
      <InputComponent
        name={"phone"}
        label={"Téléphone"}
        type={"phone"}
        required={true}
      />
      <SelectComponent
        name={"companyId"}
        label={"Entreprise"}
        options={options}
        required={true}
      />
      <ButtonComponent>Créer un contact</ButtonComponent>
    </FormComponentComponent>
  )
}
