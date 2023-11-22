import { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: "sm" | "md" | "lg" | "xl"
}

export default function TitleComponent(props: Props) {
  switch (props.size) {
    case "sm":
      return (
        <h2
          {...props}
          className="text-xl sm:text-2xl leading-none font-bold text-gray-900"
        >
          {props.children}
        </h2>
      )
    case "md":
      return (
        <h2
          {...props}
          className="text-2xl sm:text-3xl leading-none font-bold text-gray-900"
        >
          {props.children}
        </h2>
      )
    case "lg":
      return (
        <h2
          {...props}
          className="text-3xl sm:text-4xl leading-none font-bold text-gray-900"
        >
          {props.children}
        </h2>
      )
    case "xl":
      return (
        <h2
          {...props}
          className="text-4xl sm:text-5xl leading-none font-bold text-gray-900"
        >
          {props.children}
        </h2>
      )
  }
  return (
    <h2
      {...props}
      className="text-2xl sm:text-3xl leading-none font-bold text-gray-900"
    >
      {props.children}
    </h2>
  )
}
