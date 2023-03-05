import { createContext, ReactNode, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { api } from '../services/axios';

interface IPropsProvider {
  children: ReactNode;
}

interface IShopContext{

}

export const ShopContext = createContext({} as IShopContext);

export const ShopProvider = ({ children }: IPropsProvider) =>{
  
  // useEffect(() => {
  //   async function requestProducts() {
  //     try {
  //       const token = localStorage.getItem('@Token');
  //       const response = await api.get('products', {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   requestProducts();
  // }, []);

  // async function loginRequest(data: iLoginRequest) {
  //   try {
  //     const response = await api.post('login', data);
  //     localStorage.setItem('@USERID', response.data.user.id);
  //     setUser(response.data.user);
  //     localStorage.setItem('@Token', response.data.accessToken);
  //     toast.success('Usuário logado');
  //     navigate('/shop');
  //   } catch (error) {
  //     console.error(error);
  //     toast.error('E-mail ou senha incorretos');
  //   }
  // }


  return (
    <ShopContext.Provider
      value={{
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}