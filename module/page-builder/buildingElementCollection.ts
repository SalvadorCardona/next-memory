import { Toolbox } from "@/module/page-builder/component/builder/Toolbox"
import { Panel } from "@/module/page-builder/component/builder/Panel"
import { SettingsPanel } from "@/module/page-builder/component/builder/SettingsPanel"
import { Container } from "@/module/page-builder/component/builder/Container"
import { Button } from "@/module/page-builder/component/builder/Button"
import { Text } from "@/module/page-builder/component/builder/Text"
import { PiRectangleLight } from "react-icons/pi"
import { BiImageAdd } from "react-icons/bi"

export interface BuildingElementCollection {
  name: string
  icon?: Element
  element: Element
  isDraggable?: boolean
}

const buildingElementCollection = [
  {
    name: "Toolbox",
    element: Toolbox,
  },
  {
    name: "Panel",
    element: Panel,
  },
  {
    name: "SettingsPanel",
    element: SettingsPanel,
  },
  {
    name: "Container",
    element: Container,
  },
  {
    name: "Button",
    icon: PiRectangleLight,
    element: Button,
    isDraggable: true,
  },
  {
    name: "Text",
    icon: BiImageAdd,
    element: Text,
    isDraggable: true,
  },
]

export default buildingElementCollection
