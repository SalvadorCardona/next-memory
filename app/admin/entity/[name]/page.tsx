import { getEntity } from "@/module/shared/entity"
import TableEntityComponent from "@/module/shared/component/table/TableEntityComponent"

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
  console.log(datas)
  return (
    <>
      <div>
        <TableEntityComponent datas={datas} />
        {/*{entity.modelName}*/}
        {/*<List data={data} />*/}
      </div>
    </>
  )
}
