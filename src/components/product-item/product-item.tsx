import { formatPrice } from '@/utils'
import { Button, Card, CardContent, Link, Rating } from '@mui/material'
import { LazyImage } from '../ui'
import * as S from './product-item.styles'

interface ProductItemProps {
  product: ProductCollection
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Card className="flex">
      <S.StyledCard>
        <LazyImage src={product.image} alt={product.name} />

        <CardContent>
          <section className="flex flex-col gap-1">
            <section>
              <Rating value={product.classification} readOnly size="small" />
            </section>

            <S.TruncatedTypography variant="h3">{product.name}</S.TruncatedTypography>

            {/* <S.Text variant="body1" color="text.secondary">
              {product.description}
            </S.Text> */}

            <S.Text variant="subtitle1" color="text.secondary">
              {formatPrice(product.amount)}
            </S.Text>

            <S.Text variant="body1" color="text.secondary">
              {product.platform}, {product.type}
            </S.Text>

            <S.Text variant="body1" color="text.secondary">
              {product.status}
            </S.Text>

            <Link href={`/collection/item/${product.id}`} underline="hover">
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
