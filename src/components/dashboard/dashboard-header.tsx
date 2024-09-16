import { ProductDashboard, ProductItemDashboard } from '@/pages/home'
import { formatPrice } from '@/utils'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

interface DashboardHeaderProps {
  items: ProductDashboard
  types: TypeCollection[]
  platforms: PlatformCollection[]
  field: keyof ProductItemDashboard
  hasCurrency?: boolean
}
const DashboardHeader = ({
  platforms,
  items,
  types,
  field,
  hasCurrency = false
}: DashboardHeaderProps) => {
  return (
    <Table size="small" style={{ marginBottom: 32 }}>
      <TableHead>
        <TableRow>
          <TableCell>&nbsp;</TableCell>
          {types.map(type => (
            <TableCell key={type.id}>{type.name}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {platforms.map(platform => (
          <TableRow key={platform.id} hover>
            <TableCell component="th" scope="row">
              {platform.name}
            </TableCell>
            {types.map(type => (
              <TableCell key={type.id}>
                {hasCurrency
                  ? formatPrice(items[platform.name][type.name][field])
                  : items[platform.name][type.name][field]}
              </TableCell>
            ))}
          </TableRow>
        ))}
        <TableRow hover>
          <TableCell component="th" scope="row">
            Total
          </TableCell>
          {types.map(type => (
            <TableCell key={type.id}>
              {hasCurrency
                ? formatPrice(
                    platforms.reduce(
                      (acc, platform) => acc + items[platform.name][type.name][field],
                      0
                    )
                  )
                : platforms.reduce(
                    (acc, platform) => acc + items[platform.name][type.name][field],
                    0
                  )}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  )
}

export { DashboardHeader }
