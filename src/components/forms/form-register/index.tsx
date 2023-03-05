import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
//import { yupResolver } from '@hookform/resolvers/yup'
import { StyledFormRegister } from './styled'
import { RegisterContext } from '../../../providers/registerProvider'

interface iRegisterSubmit {
  name: string
  email: string
  endereco: string
  password: string
  passwordConfirmation: string
}

export const RegisterForm = () => {
  const { userRegister } = useContext(RegisterContext)

  const formSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    endereco: yup.string().required('Endereço obrigatório'),
    password: yup
      .string()
      .matches(/.{6,}/, 'Deve ter pelo menos 6 caracteres')
      .required(
        'Senha deve conter ao menos 6 caracteres'
      ),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas deve ser iguais')
      .required('Confirmação de senha obrigatória'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm <iRegisterSubmit>({
   // resolver: yupResolver(formSchema)
  })

  return (
  <StyledFormRegister>
     <input className='input' type='text' {...register('name')} />
    <input className='input' type='email' {...register('email')} />
    <input className='input' type='password' {...register('password')} />
    <input className='input' type='password' {...register('passwordConfirmation')} />

    <button type='submit'>
      Cadastrar
    </button>
  </StyledFormRegister>
  )
}
