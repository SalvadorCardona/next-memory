"use server"
import { getEntity } from "@/module/shared/entity"
import TableEntityComponent, {
  TableEntityComponentPropsInterface,
} from "@/module/shared/component/table/TableEntityComponent"
import { createElement } from "react"

interface PageProps {
  params: {
    name: string
  }
}
export default async function Page(bag: PageProps) {
  const entity = getEntity(bag.params.name)

  if (!entity) {
    return <div>404</div>
  }

  const List = entity?.listComponent
  const datas = await entity.getAll()
  const listComponent = entity.listComponent
  const props: TableEntityComponentPropsInterface = {
    datas,
    entityName: entity.modelName,
  }

  return (
    <>
      <div>
        {createElement(listComponent, { ...props })}
        {/*<TableEntityComponent datas={datas} />*/}
        {/*{entity.modelName}*/}
        {/*<List data={data} />*/}
      </div>
    </>
  )
}
