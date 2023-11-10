import { SelectHTMLAttributes } from "react"

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: { value: string | number; label: string | number }[]
}

export default function SelectComponent(props: Props) {
  return (
    <div className="mb-1">
      <label className={"block text-gray-600 text-sm font-bold mb-2"}>
        {props.label}
      </label>
      <select
        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-600 mb-3"
        {...props}
      >
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
