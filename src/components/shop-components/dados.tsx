import { useContext, useEffect } from 'react'
import { LoginContext } from '../../providers/loginProvider'
import { ShopContext } from '../../providers/shopProvider'
import { AddressUpdate } from './form-user'


export const Address: any = () => {

const {user} = useContext(LoginContext)

  if(user){
    return (
      <main className='main_dados'>
        <AddressUpdate/>
      </main>
    )
  }
}
