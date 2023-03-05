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
  filteredProducts: IProduct[];
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

 

}