import { createContext, ReactNode, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { api } from '../services/axios';
import { IUser } from './shopProvider';


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
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

interface iPropsProvider {
  children: ReactNode;
}

export const LoginContext = createContext({} as iValueLoginContext);

export const LoginProvider = ({ children }: iPropsProvider) => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState<IUser | null>(null);
 
  async function loginRequest(data: iLoginRequest) {
    try {
      const response = await api.post("login", data);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@Token", response.data.accessToken);
      setUser(response.data.user);
         
      if(response.data.user.isAdm){
        navigate('/dashboard');
        toast.success('Adm logado');
      } else {
        navigate("/shop");
        toast.success("Usuário logado");
      }
    } catch (error) {
      console.error(error);
      toast.error("E-mail ou senha incorretos");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@Token')
    const id = localStorage.getItem('@USERID')
    if (token) {
      const autoLogin = async () => {
        try {
          const response = await api.get(`/users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          
          setUser(response.data)
          navigate('/shop')

        } catch (error) {
          console.error(error);
        }
      };
      autoLogin();
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{
        // userRegister,
        loginRequest,
        user,
        setUser
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
