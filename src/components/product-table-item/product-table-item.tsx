import { Rating, TableCell, TableRow } from '@mui/material'
import { LazyImage } from '../ui'

interface ProductTableItemProps {
  product: ProductCollection
}

const ProductTableItem = ({ product }: ProductTableItemProps) => {
  return (
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
  )
}

export { ProductTableItem }
