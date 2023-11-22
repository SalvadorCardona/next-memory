import React from "react"
import { useEditor } from "@craftjs/core"
import { Panel, PanelSection } from "./Panel"
import ButtonComponent from "@/module/shared/component/form/ButtonComponent"

export const SettingsPanel = () => {
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent("selected").last()

    let selected

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      }
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    }
  })

  return selected ? (
    <Panel>
      <PanelSection title={selected.name}>
        {selected.settings && React.createElement(selected.settings)}
      </PanelSection>
      {selected.isDeletable ? (
        <ButtonComponent
          flag={"alert"}
          onClick={() => {
            actions.delete(selected.id)
          }}
        >
          Delete
        </ButtonComponent>
      ) : null}
    </Panel>
  ) : null
}
