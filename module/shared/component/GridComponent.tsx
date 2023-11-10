export interface GridComponentPropsInterface {
  children: React.ReactNode
  col?: number
  gap?: number
}

export default function GridComponent(props: GridComponentPropsInterface) {
  // lg:grid-cols-2 gap-4 grid grid-cols-1 lg:grid-cols-2 gap-4
  return (
    <div
      className={
        "grid grid-cols-1 lg:grid-cols-" +
        (props.col ? props.col : 2) +
        " gap-" +
        (props.gap ? props.gap : 4)
      }
    >
      {props.children}
    </div>
  )
}
