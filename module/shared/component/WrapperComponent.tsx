import { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function WrapperComponent(props: Props) {
  return (
    <div
      {...props}
      className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border p-6"
    >
      {props.children}
    </div>
  )
}
