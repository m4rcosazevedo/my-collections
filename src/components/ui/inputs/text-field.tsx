import { TextField as TF } from '@mui/material'
import { forwardRef } from 'react'

interface TextFieldProps extends React.ComponentProps<typeof TF> {}

const TextField = forwardRef(({ id, label, ...props }: TextFieldProps, ref) => {
  return (
    <TF
      {...props}
      id={id}
      label={label}
      variant="outlined"
      inputRef={ref}
      style={{
        width: '100%'
      }}
    />
  )
})

TextField.displayName = 'TextField'

export { TextField }
