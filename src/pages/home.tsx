import { Chart, Pie } from '@/components/chart'
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
    totalPhysicalMediaAmiibo,
    totalDigitalMedia,
    amountPhysicalMedia,
    amountDigitalMedia,
    amountPhysicalMediaAmiibo
  } = calculateDashboardStats(items)
  const isAmiibo = (platform: string) => platform === 'Amiibo'

  const productWithMaxAmount = products.reduce(
    (max, item) => (!isAmiibo(item.platform) && item.amount > max.amount ? item : max),
    products[0]
  )

  if (loading) {
    return <Loading />
  }

  const resume = [
    {
      description: 'Item que custou mais',
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

  const resumeAmiibos = [
    {
      description: 'Quantidade de Amiibos',
      platform: '-',
      value: `${totalPhysicalMediaAmiibo} unidades`
    },
    {
      description: 'Total gasto em Amiibos',
      platform: '-',
      value: formatPrice(amountPhysicalMediaAmiibo)
    }
  ]

  const platformsFiltered = platforms.filter(platform => platform.name !== 'Amiibo')

  return (
    <Box>
      <Title>Dashboard</Title>

      <Grid item xs={12} marginBottom={4}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Valor gasto em mídias por plataforma</Typography>
          <Chart
            data={[
              ['Plataformas', ...types.map(type => type.name)],
              ...platformsFiltered.map(platform => [
                platform.name,
                ...types.map(type => items[platform.name][type.name].amount)
              ])
            ]}
          />
        </Paper>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6} marginBottom={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Mídias Físicas por plataforma</Typography>
            <Pie
              data={[
                ['Plataformas', 'Mídia Física'],
                ...platformsFiltered.map(platform => [
                  platform.name,
                  items[platform.name]['Mídia Física'].quantity
                ])
              ]}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6} marginBottom={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Mídias Digitais por plataforma</Typography>
            <Pie
              data={[
                ['Plataformas', 'Mídia Digital'],
                ...platformsFiltered.map(platform => [
                  platform.name,
                  items[platform.name]['Mídia Digital'].quantity
                ])
              ]}
            />
          </Paper>
        </Grid>
      </Grid>

      <Grid item xs={12} marginBottom={4}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Resumo dos jogos</Typography>

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
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Resumo dos Amiibos</Typography>

          <Table size="small" style={{ marginBottom: 32 }}>
            <TableHead>
              <TableRow>
                <TableCell>Descrição</TableCell>
                <TableCell>Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resumeAmiibos.map(item => (
                <TableRow key={item.description} hover>
                  <TableCell>{item.description}</TableCell>
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

          <DashboardHeader
            items={items}
            platforms={platformsFiltered}
            types={types}
            field="quantity"
          />
        </Paper>
      </Grid>

      <Grid item xs={12} marginBottom={4}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: 240 }}>
          <Typography variant="h6">Valor gasto em mídias por plataforma</Typography>

          <DashboardHeader
            items={items}
            platforms={platformsFiltered}
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
