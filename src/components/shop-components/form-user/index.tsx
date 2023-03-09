import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { LoginContext } from '../../../providers/loginProvider'
import { IAddressUpdate, ShopContext } from '../../../providers/shopProvider'

export const AddressUpdate = () => {
  const { user } = useContext(LoginContext)
  const { userUpdate } = useContext(ShopContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IAddressUpdate>()

  
  if (user) {
    return (
      <form onSubmit={handleSubmit(userUpdate)}>
        <input type="text" placeholder='Novo Endereço' {...register('address')}/>
        <button type='submit'>Atualizar</button>
      </form>
    )
  }
}
