import { FormEvent, FormHTMLAttributes, ReactNode } from "react"

export interface FormComponentComponentPropsInterface
  extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export default function FormComponentComponent(
  props: FormComponentComponentPropsInterface
) {
  return (
    <form className={"lg:w-1/2 w-full mt-5"} {...props}>
      {props.children}
    </form>
  )
}
