import { Button, Card, CardContent, Link, Rating } from '@mui/material'
import { LazyImage } from '../ui'
import * as S from './product-item.styles'

interface ProductItemProps {
  product: ProductCollection
  filters: string[]
}

const ProductItem = ({ product, filters = [] }: ProductItemProps) => {
  const hasPlatforms = filters.includes('platforms')
  const hasTypes = filters.includes('types')

  return (
    <Card className="flex">
      <S.StyledCard>
        <LazyImage src={product.image} alt={product.name} />

        <CardContent>
          <section className="flex flex-col gap-2">
            <section>
              <Rating value={product.classification} readOnly size="small" />
            </section>

            <S.TruncatedTypography variant="h3">{product.name}</S.TruncatedTypography>

            {(hasPlatforms || hasTypes) && (
              <S.Text variant="body1" color="text.secondary">
                {[product.platform, product.type].join(', ')}
              </S.Text>
            )}

            <Link href={`/collection/${product.collection}/item/${product.id}`} underline="hover">
              <Button variant="contained" color="primary" size="small">
                Detalhes
              </Button>
            </Link>
          </section>
        </CardContent>
      </S.StyledCard>
    </Card>
  )
}

export { ProductItem }
