import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledFormRegister } from './styled'
import { RegisterContext } from '../../../providers/registerProvider'

interface iRegisterSubmit {
  name: string
  email: string
  address: string
  password: string
  passwordConfirmation: string
}

export const RegisterForm = () => {
  const { userRegister } = useContext(RegisterContext)

  const formSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    address: yup.string().required('Endereço obrigatório'),
    password: yup
      .string()
      .matches(/.{6,}/, 'Deve ter pelo menos 6 caracteres')
      .required(
        'Senha deve conter ao menos 6 caracteres'
      ),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas devem ser iguais')
      .required('Confirmação de senha obrigatória'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm <iRegisterSubmit>({
    resolver: yupResolver(formSchema)
  })

  const submit =  (data: iRegisterSubmit) =>{
    console.log(data)
    const newData = {...data,isAdm: false}
    userRegister(newData)
    console.log(newData)
    reset()
  }

  return (
  <StyledFormRegister>
    
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input className='input' type='text' id='name' {...register('name')} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input className='input' type='email'id='email' {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="address">Endereço:</label>
        <input className='input' type='text' id='address' {...register('address')} />
        <p>{errors.address?.message}</p>
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input className='input' type='password' id='password' {...register('password')} />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <label htmlFor="">Confirmar senha:</label>
        <input className='input' type='password'  {...register('passwordConfirmation')} />
        <p>{errors.passwordConfirmation?.message}</p>
      </div>

    <button type='submit'>
      Cadastrar
    </button>
    </form>
    
  </StyledFormRegister>
  )
}
