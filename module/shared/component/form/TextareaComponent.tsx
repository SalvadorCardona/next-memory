import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function InputComponent(props: Props) {
  return (
    <div className="input-field">
      <label>{props.label}</label>
      <input {...props} />
    </div>
  )
}
