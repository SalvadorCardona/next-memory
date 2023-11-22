import WrapperComponent from "@/module/shared/component/WrapperComponent"

export const PanelSection = ({ title, children }) => {
  return (
    <div className="mb-2">
      <h2 className="text-gray-900 mb-2 text-xs">{title}</h2>
      {children}
    </div>
  )
}

export const Panel = ({ className, children }) => {
  return <WrapperComponent>{children}</WrapperComponent>
}
