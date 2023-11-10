import { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function TitleComponent(props: Props) {
  return (
    <h2
      {...props}
      className="text-2xl sm:text-3xl leading-none font-bold text-gray-900"
    >
      {props.children}
    </h2>
  )
}
