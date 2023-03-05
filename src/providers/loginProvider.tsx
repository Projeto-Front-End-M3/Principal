import { createContext, ReactNode, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { api } from '../services/axios';

interface iLoginRequest {
  email: string;
  password: string;
}

interface iRegisterSubmit {
  name: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

interface iValueLoginContext {
  //userRegister: SubmitHandler<iRegisterSubmit>;
  loginRequest: (data: iLoginRequest) => Promise<void>;
}

interface iPropsProvider {
  children: ReactNode;
}

export const LoginContext = createContext({} as iValueLoginContext);

export const LoginProvider = ({ children }: iPropsProvider) =>{
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  
  async function loginRequest(data: iLoginRequest) {
    try {
      const response = await api.post('login', data);
      localStorage.setItem('@USERID', response.data.user.id);
      setUser(response.data.user);
      localStorage.setItem('@Token', response.data.accessToken);
      toast.success('Usuário logado');
      navigate('/shop');
    } catch (error) {
      console.error(error);
      toast.error('E-mail ou senha incorretos');
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@Token')
    if (token) {
      const autoLogin = async () => {
        try {
          const response = await api.get('/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setUser(response.data)
          navigate('/shop')
        } catch (error) {
          console.error(error)
        } 
      }
      autoLogin()
    }
  }, [])

  return (
    <LoginContext.Provider
      value={{
       // userRegister,
        loginRequest,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}