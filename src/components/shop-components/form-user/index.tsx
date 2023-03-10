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
      <form className='form_shop' onSubmit={handleSubmit(userUpdate)}>
        <h2>Endereço</h2>
        <h3 className='form_shop'> {user.name} </h3>
        <h3 className='form_shop'> {user.address} </h3>
        <input className='input_shop' type="text" placeholder='Novo Endereço' {...register('address')}/>
        <button className='button_shop' type='submit'>Atualizar</button>
      </form>
    )
  }
}
