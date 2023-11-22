import { getEntity } from "@/module/shared/entity"

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
  const data = await entity.getAll()

  console.log(data)
  return (
    <>
      <div>
        {entity.modelName}
        <List data={data} />
      </div>
    </>
  )
}
