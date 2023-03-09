import { useContext, useEffect } from 'react'
import { LoginContext } from '../../providers/loginProvider'
import { ShopContext } from '../../providers/shopProvider'
import { AddressUpdate } from './form-user'

interface Address{
  AddressUpdate: string
}

export const Address = () => {

const {user} = useContext(LoginContext)

  if(user){
    return (
      <main>
        <h1>Endereço do indivíduo </h1>
        <p> {user.name} </p>
        <p> {user.address} </p>
        <AddressUpdate/>
      </main>
    )
  }
}
