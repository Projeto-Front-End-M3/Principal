import { createContext, useContext, useState, ReactNode } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/axios'
import { useNavigate } from 'react-router-dom'

interface ICartProviderProps {
  children: ReactNode;
}


interface IProductsContext {
  productRegister: (formData: IFormProductsRegister) => Promise<void>
  productRemove: (id: number) => Promise<void>
  productUpdate: (formData: IFormProductsRegister, id: number) => Promise<void>
}

interface IFormProductsRegister {

}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: ICartProviderProps) => {
  const [products, setProducts] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const productRegister = async (formData: IFormProductsRegister) => {
    try {
      const token = localStorage.getItem('@Token')
      const response = await api.post(`/users/techs`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setProducts({ ...products })
      toast.success('Produto adicionado com sucesso')
      setOpenModal(false)
    } catch (error) {
      console.error(error)
    }
  }

  const productRemove = async (id: number) => {
    try {
      const token = localStorage.getItem('@Token')
      await api.delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const newTech = products.filter(products => products/*.id*/  !== id)
      setProducts({ ...products })
      setOpenModal(false)
    } catch (error) {
      console.error(error)
    }
  }

  const productUpdate = async (formData: IFormProductsRegister, id: number) => {
    try {
      const token = localStorage.getItem('@Token')
      const response = await api.put(`/users/techs/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const updatedProduct = products.map((product)=>{
        if(product /*.id */ === id){
          //products.id = formData
        } 
        return product
      })
      setProducts({ ...products })
      setOpenModal(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        productRegister,
        productRemove,
        productUpdate,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}