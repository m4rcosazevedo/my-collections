import { ProductItem } from '@/components/product-item'
import { Loading, TextField, Title } from '@/components/ui'
import { useProducts, useProductsFiltered } from '@/hooks'
import { Autocomplete, Box, Button, Grid, Link } from '@mui/material'

const Collection = () => {
  const { products, loading, platforms, statuses, types } = useProducts()
  const { filteredProducts, handleFilter } = useProductsFiltered(products)

  if (loading) {
    return <Loading />
  }

  return (
    <Box>
      <Title>Dashboard</Title>

      <Box gap={4} flexDirection="column" flexGrow={1} display="flex">
        <Link href="/collection/item/create" underline="hover">
          <Button variant="contained" color="primary" size="small">
            Cadastrar item
          </Button>
        </Link>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="Nome"
              onChange={event => handleFilter('name', event.target.value ?? '')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Autocomplete
              disablePortal
              id="combo-box-platform"
              options={platforms}
              renderInput={params => <TextField {...params} label="Plataforma" />}
              onChange={(_, value) => handleFilter('platform', value ?? '')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Autocomplete
              disablePortal
              id="combo-box-type"
              options={types}
              renderInput={params => <TextField {...params} label="Tipo" />}
              onChange={(_, value) => handleFilter('type', value ?? '')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Autocomplete
              disablePortal
              id="combo-box-status"
              options={statuses}
              renderInput={params => <TextField {...params} label="Status" />}
              onChange={(_, value) => handleFilter('status', value ?? '')}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {filteredProducts.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Collection
