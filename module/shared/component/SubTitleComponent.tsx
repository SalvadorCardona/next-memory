import { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function SubTitleComponent(props: Props) {
  return (
    <h3 {...props} className="text-base font-normal text-gray-500">
      {props.children}
    </h3>
  )
}
