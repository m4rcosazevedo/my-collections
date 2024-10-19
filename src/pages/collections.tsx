import { Loading, Title } from '@/components/ui'
import { useCollections } from '@/hooks'
import { Box, Link, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const Collection = () => {
  const { collections, loading } = useCollections()

  if (loading) {
    return <Loading />
  }

  return (
    <Box>
      <Title>Selecione uma coleção</Title>

      <Box gap={4} flexDirection="column" flexGrow={1} display="flex">
        {/* <section className="flex justify-between">
          <Link href="/collection/create" underline="hover">
            <Button variant="contained" color="primary">
              Cadastrar coleção
            </Button>
          </Link>
        </section> */}

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {collections.map(collection => (
              <TableRow key={collection.id} hover>
                <TableCell>
                  <Link href={`/collection/${collection.id}`} underline="hover">
                    {collection.name}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  )
}

export default Collection
