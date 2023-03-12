import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LinkReg, StyledFormRegister } from './styled'
import { RegisterContext } from '../../../providers/registerProvider'
import { Link } from "react-router-dom"


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
    
    const newData = {...data,isAdm: false}
    userRegister(newData)
    
    reset()
  }

  return (
  <StyledFormRegister>
    
      <h2>Cadastre-se</h2>
    <form onSubmit={handleSubmit(submit)}>
      <div className='divInput'>
        <label htmlFor="name">Nome:</label>
        <input className='input' type='text' id='name' {...register('name')} placeholder="Nome"/>
        <p>{errors.name?.message}</p>
      </div>
      <div className='divInput'>
        <label htmlFor="email">Email:</label>
        <input className='input' type='email'id='email' {...register('email')} placeholder="Email"/>
        <p>{errors.email?.message}</p>
      </div>
      <div className='divInput'>
        <label htmlFor="address">Endereço:</label>
        <input className='input' type='text' id='address' {...register('address')} placeholder="Endereço"/>
        <p>{errors.address?.message}</p>
      </div>
      <div className='divInput'>
        <label htmlFor="password">Senha:</label>
        <input className='input' type='password' id='password' {...register('password')} placeholder="Senha"/>
        <p>{errors.password?.message}</p>
      </div>
      <div className='divInput'>
        <label htmlFor="">Confirmar senha:</label>
        <input className='input' type='password'  {...register('passwordConfirmation')}placeholder="Confirmar senha" />
        <p>{errors.passwordConfirmation?.message}</p>
      </div>

    <button type='submit'>
      Cadastrar
    </button>
    </form>
    <Link to='/'>
      Login
    </Link>
  </StyledFormRegister>
  )
}
