import { TextFieldProps } from '@mui/material'
import { forwardRef, LegacyRef } from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { TextField } from '../inputs/text-field'
import { TextMaskCustomRefProps } from './text-mask-custom.type'

const TextMaskCustom = forwardRef<HTMLInputElement, TextMaskCustomRefProps>((props, ref) => {
  const currencyMask = createNumberMask({
    prefix: '',
    suffix: '',
    includeThousandsSeparator: false,
    thousandsSeparatorSymbol: '',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
    integerLimit: null,
    allowNegative: false,
    allowLeadingZeroes: false
  })

  return (
    <MaskedInput
      {...props}
      ref={ref as LegacyRef<MaskedInput>}
      mask={currencyMask}
      showMask
      // placeholderChar={'\u2000'}
      id="amount"
      render={(ref: LegacyRef<unknown> | undefined, rest: Omit<TextFieldProps, 'ref'>) => (
        <TextField
          ref={ref}
          {...rest}
          id={props.id}
          label={props.label}
          helperText={props.helperText}
          error={props.error}
        />
      )}
    />
  )
})

export { TextMaskCustom }
