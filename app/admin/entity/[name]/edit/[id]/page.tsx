interface PageProps {
  params: {
    name: string
    id: string
  }
}

export default function Page(props: PageProps) {
  console.log(props)
  return (
    <>
      <div>Hello je suis la page</div>
    </>
  )
}
