import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const ButtonComponent = forwardRef<HTMLButtonElement, Props>((props: Props, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {props.children}
    </button>
  )
})

ButtonComponent.displayName = "ButtonComponent"

export default ButtonComponent
