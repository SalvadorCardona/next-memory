"use client"
import {
  TableBody,
  TableCell,
  TableComponent,
  TableHead,
  TableHeadItem,
  TableRow,
} from "@/module/shared/component/table/TableComponent"
import ButtonComponent from "@/module/shared/component/form/ButtonComponent"

export interface TableEntityComponentPropsInterface {
  datas: { id: string | number }[]
}

export default function TableEntityComponent(
  props: TableEntityComponentPropsInterface
) {
  const keys = getAllKeys(props.datas)
  return (
    <TableComponent>
      <TableHead>
        {keys.map((key) => {
          return <TableHeadItem key={key}>{key}</TableHeadItem>
        })}
        <TableHeadItem>Action</TableHeadItem>
      </TableHead>
      <TableBody>
        {props.datas.map((data) => {
          return (
            <TableRow key={data.id}>
              {keys.map((keyC) => {
                return (
                  <TableCellPrivate
                    key={data.id + keyC}
                    data={data}
                    keyValue={keyC}
                  />
                )
              })}
              <TableCell>
                <ButtonComponent
                  flag={"secondary"}
                  onClick={() => console.log("edit")}
                >
                  Edit
                </ButtonComponent>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </TableComponent>
  )
}

function TableCellPrivate(props: { data: object; keyValue: string }) {
  let value = getNestedProperty(props.data, props.keyValue)

  if (typeof value === "object") {
    value = JSON.stringify(value)
  }
  if (!value) {
    return <TableCell>undefined</TableCell>
  }

  return <TableCell>{value}</TableCell>
}

function getAllKeys(arr: []): string[] {
  let keys = []

  function extractKeys(obj, parentKey = "") {
    Object.keys(obj).forEach((key) => {
      let fullKey = parentKey ? `${parentKey}.${key}` : key
      keys.push(fullKey)
      if (typeof obj[key] === "object" && obj[key] !== null) {
        extractKeys(obj[key], fullKey)
      }
    })
  }

  arr.forEach((item) => {
    extractKeys(item)
  })

  return keys
}

function getNestedProperty(obj: object, path: string): string | number | undefined {
  const keys = path.split(".")
  let current = obj

  for (let i = 0; i < keys.length; i++) {
    if (current[keys[i]] === undefined) {
      return undefined
    } else {
      current = current[keys[i]]
    }
  }

  return current
}
