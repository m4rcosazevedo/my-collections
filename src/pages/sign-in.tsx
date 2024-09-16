import { Title } from '@/components/ui'
import { TextField } from '@/components/ui/inputs/text-field'
import { auth } from '@/config/firebase'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Grid } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const schema = yup
  .object({
    email: yup.string().email('Email inválido').required('O campo email é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .max(20, 'A senha deve ter no máximo 20 caracteres')
      .required('O campo senha é obrigatório')
  })
  .required()

type ValuesProps = yup.InferType<typeof schema>

const SignIn = () => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const handleSignIn = async ({ email, password }: ValuesProps) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      const { user } = response
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/')
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <Box gap={2} flexDirection="column" display="flex">
            <Title>Login</Title>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  id="email"
                  label="Email"
                  {...field}
                  helperText={errors.email?.message}
                  error={!!errors.email}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  type="password"
                  id="password"
                  label="Senha"
                  {...field}
                  helperText={errors.password?.message}
                  error={!!errors.password}
                />
              )}
            />

            <Button variant="contained" type="submit">
              Sign In
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  )
}

export default SignIn
