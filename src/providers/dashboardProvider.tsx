import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/axios';

interface ICartProviderProps {
  children: ReactNode;
}

export interface IProduct {
  category?: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

interface IcartContext {
  products: IProduct[]
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IModalOpen {
  isOpen: boolean
  setModalOpen: boolean
}

export const DashboardContext = createContext({} as IcartContext);

export const DashboardProvider = ({ children }: ICartProviderProps) =>{

  const [products, setProducts] = useState<IProduct[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([] as IProduct[]);
  
  useEffect(() => {
    async function requestProducts() {
      try {
        const token = localStorage.getItem('@Token');
        const response = await api.get('products', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    requestProducts();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        openModal,
        setOpenModal,
        products,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
  

}