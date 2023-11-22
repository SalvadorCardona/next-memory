"use client"
import { Editor, Frame, Element } from "@craftjs/core"
import React from "react"
import { Toolbox } from "@/module/page-builder/component/builder/Toolbox"
import { Panel } from "@/module/page-builder/component/builder/Panel"
import { SettingsPanel } from "@/module/page-builder/component/builder/SettingsPanel"
import { Container } from "@/module/page-builder/component/builder/Container"
import { Button } from "@/module/page-builder/component/builder/Button"
import { Text } from "@/module/page-builder/component/builder/Text"
import ProductBuilderComponent from "@/module/page-builder/component/builder/ProductBuilderComponent"

export interface PageBuilderViewComponentPropsInterface {}

export default function PageBuilderViewComponent() {
  return (
    <div className="min-h-screen relative">
      <div className="grid grid-cols-12 gap-3 h-full p-1">
        <Editor
          resolver={{
            Toolbox,
            Panel,
            SettingsPanel,
            Container,
            Button,
            Text,
            ProductBuilderComponent,
          }}
        >
          <div className="col-span-2">
            <Toolbox />
          </div>
          <div className="col-span-8">
            <Panel>
              <Frame>
                <Element is={Container} id="root" canvas />
              </Frame>
            </Panel>
          </div>
          <div className="flex flex-col col-span-2">
            <div className="grow">
              <SettingsPanel />
            </div>
          </div>
          <div className="col-span-12"></div>
        </Editor>
      </div>
    </div>
  )
}
