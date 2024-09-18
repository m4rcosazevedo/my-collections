import { DashboardHeader } from '@/components/dashboard'
import { Loading, Title } from '@/components/ui'
import { usePlatforms, useProducts, useTypes } from '@/hooks'
import { formatPrice } from '@/utils'
import { calculateDashboardStats } from '@/utils/calculate-dashboard-stats'
import { generateProductData } from '@/utils/generate-product-data'
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

export interface ProductItemDashboard {
  quantity: number
  amount: number
}

export type ProductDashboard = Record<string, Record<string, ProductItemDashboard>>

const Home = () => {
  const { types } = useTypes()
  const { platforms } = usePlatforms()
  const { products, loading } = useProducts()

  const items: ProductDashboard = generateProductData(types, platforms, products)
  const {
    maxAmountPlatform,
    maxAmountType,
    maxAmount,
    maxQuantityPlatform,
    maxQuantityType,
    maxQuantity,
    totalPhysicalMedia,
    totalDigitalMedia,
    amountPhysicalMedia,
    amountDigitalMedia
  } = calculateDashboardStats(items)
  const productWithMaxAmount = products.reduce(
    (max, item) => (item.amount > max.amount ? item : max),
    products[0]
  )
  if (loading) {
    return <Loading />
  }

  const resume = [
    {
      description: 'Item mais caro',
      platform: productWithMaxAmount.name + ' - ' + productWithMaxAmount.platform,
      value: formatPrice(productWithMaxAmount.amount)
    },
    {
      description: 'Maior valor gasto em mídias',
      platform: `${maxAmountPlatform} (${maxAmountType})`,
      value: formatPrice(maxAmount)
    },
    {
      description: 'Maior volume de mídias',
      platform: `${maxQuantityPlatform} (${maxQuantityType})`,
      value: `${maxQuantity} unidades`
    },
    {
      description: 'Quantidade de mídias físicas',
      platform: '-',
      value: `${totalPhysicalMedia} unidades`
    },
    {
      description: 'Quantidade de mídias digitais',
      platform: '-',
      value: `${totalDigitalMedia} unidades`
    },
    {
      description: 'Quantidade total de mídias físicas e digitais',
      platform: '-',
      value: `${totalPhysicalMedia + totalDigitalMedia} unidades`
    },
    {
      description: 'Total gasto em mídias físicas',
      platform: '-',
      value: formatPrice(amountPhysicalMedia)
    },
    {
      description: 'Total gasto de mídias digitais',
      platform: '-',
      value: formatPrice(amountDigitalMedia)
    },
    {
      description: 'Total gasto em mídias físicas e digitais',
      platform: '-',
      value: formatPrice(amountPhysicalMedia + amountDigitalMedia)
    }
  ]

  return (
    <Box>
      <Title>Dashboard</Title>

      <Grid item xs={12} marginBottom={4}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Resumo</Typography>

          <Table size="small" style={{ marginBottom: 32 }}>
            <TableHead>
              <TableRow>
                <TableCell>Descrição</TableCell>
                <TableCell>Plataforma</TableCell>
                <TableCell>Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resume.map(item => (
                <TableRow key={item.description} hover>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.platform}</TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>

      <Grid item xs={12} marginBottom={4}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: 240 }}>
          <Typography variant="h6">Quantidade de mídias por plataforma</Typography>

          <DashboardHeader items={items} platforms={platforms} types={types} field="quantity" />
        </Paper>
      </Grid>

      <Grid item xs={12} marginBottom={4}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: 240 }}>
          <Typography variant="h6">Valor gasto em mídias por plataforma</Typography>

          <DashboardHeader
            items={items}
            platforms={platforms}
            types={types}
            field="amount"
            hasCurrency
          />
        </Paper>
      </Grid>
    </Box>
  )
}

export default Home
