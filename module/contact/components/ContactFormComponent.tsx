"use client"
import FormComponentComponent from "@/module/shared/component/form/FormComponentComponent"
import InputComponent from "@/module/shared/component/form/InputComponent"
import { Company } from ".prisma/client"
import SelectComponent from "@/module/shared/component/form/SelectComponent"
import ButtonComponent from "@/module/shared/component/form/ButtonComponent"
import { FormEvent } from "react"
import { Contact } from "@prisma/client"

export interface ContactFormComponentPropsInterface {
  data: Contact
  onSubmit?: (event: FormEvent) => void
}

export default function ContactFormComponent(
  props: ContactFormComponentPropsInterface
) {
  const contact = props.data

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <FormComponentComponent action={props.onSubmit}>
      {contact.id && (
        <InputComponent
          name={"name"}
          label={"id"}
          type={"text"}
          required={true}
          value={contact.id}
          readOnly
        />
      )}
      <InputComponent
        name={"name"}
        label={"Nom du contact"}
        type={"text"}
        required={true}
        defaultValue={contact.name}
      />
      <InputComponent
        name={"email"}
        label={"Email du contact"}
        type={"email"}
        required={true}
        defaultValue={contact.email}
      />
      <InputComponent
        name={"phone"}
        label={"Téléphone"}
        type={"phone"}
        required={true}
        defaultValue={contact.phone}
      />
      {/*<SelectComponent*/}
      {/*  name={"companyId"}*/}
      {/*  label={"Entreprise"}*/}
      {/*  options={options}*/}
      {/*  required={true}*/}
      {/*/>*/}
      <ButtonComponent>Créer un contact</ButtonComponent>
    </FormComponentComponent>
  )
}
