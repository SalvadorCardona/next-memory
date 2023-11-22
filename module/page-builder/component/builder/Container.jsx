import { useNode } from "@craftjs/core"
import React from "react"

export const Container = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode()

  return (
    <div className="" {...props} ref={(ref) => connect(drag(ref))}>
      {children ? (
        children
      ) : (
        <div className="text-center  p-4 bg-gray-100 outline-1 outline-dashed outline-gray-400 text-gray-500 font-bold">
          Empty container
        </div>
      )}
    </div>
  )
}
