import { createContext, ReactNode, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { api } from '../services/axios';

interface IPropsProvider {
  children: ReactNode;
}

interface IShopContext{
  user: IUser | null;
  cartProducts: IProduct[];
  products: IProduct[];
  deleteCart(): void
 // userUpdate:  (formData: IFormUserUpdate) => Promise<void>
  addProductsCart: (newProduct: IProduct) => void;
  deleteProductCart: (id: number) => void;
  totalCart: ()=>number
}

interface iLoginRequest {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  address: string;
  email: string;
  isAdmin: boolean;
}

export interface IProduct {
  id: number;
  img: string;
  name: string;
  brand: string;
  category?: string;
  price: number;
}

interface IFormUserUpdate {

}

export interface IProduct {
  category?: string;
  id: number;
  img: string;
  name: string;
  price: number;
  value?: number;
}

export const ShopContext = createContext({} as IShopContext);

export const ShopProvider = ({ children }: IPropsProvider) =>{
  
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [cartProducts, setCartProducts] = useState([] as IProduct[]);

  useEffect(() => {
    async function requestProducts() {
      try {
        const response = await api.get('/products')
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    requestProducts();
  }, []);


  // const userUpdate = async (formData: IFormUserUpdate) => {
  //   try {
  //     const token = localStorage.getItem('@Token')
  //     const response = await api.put(`/users`, formData, {
  //       headers: { Authorization: `Bearer ${token}` }
  //     })
  //     setUser({ ...user, ...response })
  //     setOpenModal(false)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  function addProductsCart(newProduct: IProduct): void {
    const filterCard = cartProducts.find(
      (element) => element.id === newProduct.id
    );
    if (!filterCard) {
      setCartProducts([...cartProducts, newProduct]);
    }
  }

  function deleteProductCart(id: number) {
    const filterDelete = cartProducts.filter(
      (list) => list.id !== id && list
    );
    setCartProducts(filterDelete);
  }

  function deleteCart() {
    setCartProducts([])
  }

  function totalCart() {
    const total = cartProducts.reduce(
      (sum, currentValue) => sum + currentValue.price,
      0);
      return total
  }

  return (
    <ShopContext.Provider
      value={{
        user,
        //userUpdate,
        products,
        cartProducts,
        addProductsCart,
        deleteProductCart,
        deleteCart,
        totalCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}