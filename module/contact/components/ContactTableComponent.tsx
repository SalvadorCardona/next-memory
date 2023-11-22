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
import { Contact } from "@prisma/client"
import { useRouter } from "next/navigation"

export interface ContactTableComponentPropsInterface {
  data: Contact[]
}

export default function ContactTableComponent(
  props: ContactTableComponentPropsInterface
) {
  const router = useRouter()

  const handleEdit = (id: string) => {
    router.push(`/admin/contact/${id}`)
  }

  const create = () => {
    router.push(`/admin/contact/new`)
  }

  return (
    <TableComponent onCreate={create}>
      <TableHead>
        <TableHeadItem>ID</TableHeadItem>
        <TableHeadItem>Name</TableHeadItem>
        <TableHeadItem>Email</TableHeadItem>
        <TableHeadItem>Phone</TableHeadItem>
        <TableHeadItem>Company</TableHeadItem>
        <TableHeadItem>Action</TableHeadItem>
      </TableHead>
      <TableBody>
        {props.data.map((contact) => {
          return (
            <TableRow key={contact.id}>
              <TableCell>{contact.id}</TableCell>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.company.name}</TableCell>
              <TableCell>
                <ButtonComponent
                  flag={"secondary"}
                  onClick={() => handleEdit(contact.id)}
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
