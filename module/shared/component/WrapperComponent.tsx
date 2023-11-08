import { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function WrapperComponent(props: Props) {
  return (
    <div
      {...props}
      className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2"
    >
      {props.children}
    </div>
  )
}
