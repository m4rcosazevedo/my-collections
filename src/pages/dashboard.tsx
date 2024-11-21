import { Loading, Title } from "@/components/ui";
import { useAllProducts } from "@/hooks";
import { formatPrice, sum } from "@/utils";
import { Box, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

function Dashboard() {
  const { products, loading } = useAllProducts()

  if (loading) {
    return <Loading />
  }

  let totalAmount = 0
  let totalQuantity = 0

  const gamesSanitized = products.reduce((acc, product) => {
    const collection = product.collection

    if (collection !== 'Jogos') {
      return acc
    }

    const platform = product.platform
    const type = product.type

    totalAmount = sum(totalAmount, product.amount)
    totalQuantity = totalQuantity + 1

    return {
      ...acc,
      [collection]: {
        ...acc[collection],
        [platform as string]: {
          ...acc[collection]?.[platform as string],
          [type as string]: {
            quantity: (acc[collection]?.[platform as string]?.[type as string]?.quantity || 0) + 1,
            amount: sum(acc[collection]?.[platform as string]?.[type as string]?.amount || 0, product.amount)
          }
        }
      }
    }
  }, {} as Record<string, Record<string, Record<string, { quantity: number, amount: number }>>>)


  return (
    <Box>
      <Title>Dashboard</Title>


      <Grid item xs={12} marginBottom={4}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Resumo dos jogos</Typography>

          <Table size="small" style={{ marginBottom: 32 }}>
            <TableHead>
              <TableRow>
                <TableCell>Plataforma</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Quantidade</TableCell>
                <TableCell>Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gamesSanitized['Jogos'] && Object.keys(gamesSanitized['Jogos']).map(platform => (
                Object.keys(gamesSanitized['Jogos'][platform]).map(type => (
                  <TableRow key={type} hover>
                    <TableCell>{platform}</TableCell>
                    <TableCell>{type}</TableCell>
                    <TableCell>{gamesSanitized['Jogos'][platform][type].quantity}</TableCell>
                    <TableCell>{formatPrice(gamesSanitized['Jogos'][platform][type].amount)}</TableCell>
                  </TableRow>
                ))))}
              <TableRow hover>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell>{totalQuantity}</TableCell>
                <TableCell>{formatPrice(totalAmount)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </Paper>
      </Grid>

    </Box>
  )
}

export default Dashboard
