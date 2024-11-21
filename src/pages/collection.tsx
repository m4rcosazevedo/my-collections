import { ProductItem } from '@/components/product-item'
import { LazyImage, Loading, TextField, Title } from '@/components/ui'
import { useProducts, useProductsFiltered } from '@/hooks'
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Link,
  MenuItem,
  Rating,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'
import { useState } from 'react'

const Collection = () => {
  const [view, setView] = useState('grid')
  const { products, loading, platforms, statuses, types, collection } = useProducts()
  const { filteredProducts, handleFilter } = useProductsFiltered(products)

  if (loading) {
    return <Loading />
  }

  if (!collection) {
    return <p>Collection não encontrada</p>
  }

  const hasPlatforms = collection.filters.includes('platforms')
  const hasTypes = collection.filters.includes('types')
  const hasStatuses = collection.filters.includes('statuses')

  return (
    <Box>
      <Title>{collection.name}</Title>

      <Box gap={4} flexDirection="column" flexGrow={1} display="flex">
        <section className="flex justify-between">
          <Link href={`/collection/${collection.id}/item/create`} underline="hover">
            <Button variant="contained" color="primary">
              Cadastrar item
            </Button>
          </Link>

          <Select value={view} size="small" onChange={event => setView(event.target.value)}>
            <MenuItem value="grid">Visualizar Grid</MenuItem>
            <MenuItem value="list">Visualizar Lista</MenuItem>
          </Select>
        </section>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="Nome"
              onChange={event => handleFilter('name', event.target.value ?? '')}
            />
          </Grid>
          {hasPlatforms && (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Autocomplete
                disablePortal
                id="combo-box-platform"
                options={platforms}
                renderInput={params => <TextField {...params} label="Plataforma" />}
                onChange={(_, value) => handleFilter('platform', value ?? '')}
              />
            </Grid>
          )}
          {hasTypes && (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Autocomplete
                disablePortal
                id="combo-box-type"
                options={types}
                renderInput={params => <TextField {...params} label="Tipo" />}
                onChange={(_, value) => handleFilter('type', value ?? '')}
              />
            </Grid>
          )}
          {hasStatuses && (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Autocomplete
                disablePortal
                id="combo-box-status"
                options={statuses}
                renderInput={params => <TextField {...params} label="Status" />}
                onChange={(_, value) => handleFilter('status', value ?? '')}
              />
            </Grid>
          )}
        </Grid>

        <p>{filteredProducts.length} Unidades</p>

        {view === 'grid' ? (
          <Grid container spacing={3}>
            {filteredProducts.map(product => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductItem product={product} filters={collection.filters} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Imagem</TableCell>
                <TableCell>Nome</TableCell>
                {hasTypes && <TableCell>Tipo</TableCell>}
                {hasPlatforms && <TableCell>Plataforma</TableCell>}
                <TableCell>Classificação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map(product => (
                <TableRow key={product.id} hover>
                  <TableCell>
                    <LazyImage src={product.image} alt={product.name} width={100} height={100} />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.type}</TableCell>
                  <TableCell>{product.platform}</TableCell>
                  <TableCell>
                    <Rating value={product.classification} readOnly size="small" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Box>
    </Box>
  )
}

export default Collection
