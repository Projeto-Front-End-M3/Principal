import { createContext, ReactNode, useState, useEffect, useContext,  } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { api } from '../services/axios';
import { LoginContext } from './loginProvider';


interface iRegisterSubmit {
  name: string;
  email: string;
  address: string;
  password: string;
  passwordConfirmation?: string;
  isAdm: boolean;
}

interface iValueUserContext {
  userRegister: SubmitHandler<iRegisterSubmit>;
}

interface iPropsProvider {
  children: ReactNode;
}


export const RegisterContext = createContext({} as iValueUserContext)

export const RegisterProvider = ({ children }: iPropsProvider) =>{
  const navigate = useNavigate();

  const userRegister: SubmitHandler<iRegisterSubmit> = async ({
    name,
    email,
    password,
    address,
  }) => {
    const dataFilter = {
      name,
      email,
      password,
      address,
      
    };

    try {
      const response = await api.post('/register', dataFilter);
      toast.success('Usuário registrado com sucesso');
      
     
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <RegisterContext.Provider
      value={{
        userRegister,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );

}