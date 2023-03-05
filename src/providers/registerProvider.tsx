import { createContext, ReactNode, useState, useEffect,  } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { api } from '../services/axios';

interface iRegisterSubmit {
  name: string;
  email: string;
  endereco: string;
  password: string;
  passwordConfirmation?: string;
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
    endereco,
  }) => {
    const dataFilter = {
      name,
      email,
      password,
      endereco,
    };

    try {
      const response = await api.post('users', dataFilter);
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