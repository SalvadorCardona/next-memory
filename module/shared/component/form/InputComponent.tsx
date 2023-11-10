import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function InputComponent(props: Props) {
  return (
    <div className={"mb-1"}>
      <label className={"block text-gray-600 text-sm font-bold mb-2"}>
        {props.label}
      </label>
      <input
        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-600 mb-3"
        {...props}
      />
    </div>
  )
}
