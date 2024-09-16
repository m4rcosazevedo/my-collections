import { MaskedInputProps } from 'react-text-mask'

export interface TextMaskCustomRefProps extends Omit<MaskedInputProps, 'mask'> {
  inputRef: (ref: HTMLInputElement | null) => void
  id: string
  label: string
  helperText?: string
  error: boolean
}
