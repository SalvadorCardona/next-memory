import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  flag?: "alert" | "success" | "primary" | "secondary" | "warning"
}

const ButtonComponent = forwardRef<HTMLButtonElement, Props>((props: Props, ref) => {
  const color = () => {
    switch (props.flag) {
      case "alert":
        return "bg-red-500 hover:bg-red-600 active:bg-red-700"
      case "success":
        return "bg-green-500 hover:bg-green-600 active:bg-green-700"
      case "primary":
        return "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
      case "secondary":
        return "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
      case "warning":
        return "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700"
    }
    return "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
  }

  const classCss =
    "inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all  rounded-lg cursor-pointer leading-normal text-xs ease-in tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 hover:shadow-md " +
    color()

  return (
    <button className={classCss} {...props} ref={ref}>
      {props.children}
    </button>
  )
})

ButtonComponent.displayName = "ButtonComponent"

export default ButtonComponent
