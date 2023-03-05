import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { LoginContext } from '../../../providers/loginProvider'
//import { yupResolver } from '@hookform/resolvers/yup'
import { StyledFormLogin } from './styled'

interface ILoginForm {
  email: string
  password: string
}

export const FormLogin = () => {
  const {loginRequest} = useContext(LoginContext)

  const formSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup.string().required('Senha obrigatória')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>({
    //resolver: yupResolver(formSchema)
  })

  return (
    <StyledFormLogin onSubmit={handleSubmit(loginRequest)}>
      <input className="input" type="email" {...register('email')} />
      <input className="input" type="password" {...register('password')} />
      <button type="submit">
        Entrar
      </button>
    </StyledFormLogin>
  )
}
