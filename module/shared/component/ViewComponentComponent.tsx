import { HTMLAttributes, ReactNode } from "react"
import WrapperComponent from "@/module/shared/component/WrapperComponent"
import TitleComponent from "@/module/shared/component/TitleComponent"
import SubTitleComponent from "@/module/shared/component/SubTitleComponent"
import classnames from "classnames"

interface ViewComponentComponentPropsInterface
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  title?: string
  subtitle?: string
  fullWidth?: boolean
}

export default function ViewComponentComponent(
  props: ViewComponentComponentPropsInterface
) {
  const cs = classnames({
    "lg:w-1/2 w-full": !props.fullWidth,
    "w-full": props.fullWidth,
  })

  return (
    <div className={cs}>
      <WrapperComponent>
        {props?.title && <TitleComponent>{props.title}</TitleComponent>}
        {props?.subtitle && <SubTitleComponent>{props.subtitle}</SubTitleComponent>}
        {props.children}
      </WrapperComponent>
    </div>
  )
}
