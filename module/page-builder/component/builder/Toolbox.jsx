import React, { forwardRef } from "react"
import { useEditor } from "@craftjs/core"
import { Button } from "./Button"
import { Text } from "./Text"
import { Panel, PanelSection } from "./Panel"

import TitleComponent from "@/module/shared/component/TitleComponent"
import SepratorComponent from "@/module/shared/component/SepratorComponent"
import { PiRectangleLight } from "react-icons/pi"
import { BsTextCenter } from "react-icons/bs"
import { LiaProductHunt } from "react-icons/lia"
import ProductBuilderComponent from "@/module/page-builder/component/builder/ProductBuilderComponent"

const ToolboxSection = ({ title, children }) => (
  <PanelSection title={title}>
    <ToolboxGrid>{children}</ToolboxGrid>
  </PanelSection>
)

const ToolboxGrid = ({ children }) => (
  <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-2">{children}</div>
)

const ToolboxButton = forwardRef(({ icon, text }, ref) => (
  <div
    className="flex flex-col rounded items-center p-2 mb-2 hover:bg-zinc-200 border border-zinc-200 hover:cursor-move"
    ref={ref}
  >
    {React.createElement(icon, { className: "text-zinc-700 w-5 h-5" })}
    <span className="text-zinc-700 text-xs">{text}</span>
  </div>
))

export const Toolbox = () => {
  const { actions, connectors, query, canUndo, canRedo } = useEditor()
  return (
    <Panel>
      <TitleComponent size={"sm"}>Components</TitleComponent>
      <SepratorComponent />
      <ToolboxSection>
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <Text text="New text" />)}
          icon={BsTextCenter}
          text="Text"
        />
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <Button text="New button" />)}
          icon={PiRectangleLight}
          text="Button"
        />
        <ToolboxButton
          ref={(ref) =>
            connectors.create(
              ref,
              <ProductBuilderComponent productName="nom du produit" />
            )
          }
          icon={LiaProductHunt}
          text="Product"
        />
      </ToolboxSection>
    </Panel>
  )
}
