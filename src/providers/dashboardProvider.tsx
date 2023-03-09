import { createContext, useEffect, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';
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

export interface IProductCreate {
  category?: string;
  img: string;
  name: string;
  price: number;
}


interface IdashboardContext {
  products: IProduct[];
  openModal: boolean;
  modalRegister: boolean;
  openModalUpdate: boolean;
  productID: null | number;
  setProductID: React.Dispatch<React.SetStateAction<null>>;
  setOpenModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  setModalRegister: React.Dispatch<React.SetStateAction<boolean>>
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  removeProduct: (productId: number) => Promise<void>;
  addProduct: (product: IProduct) => Promise<void>;
  updateProduct: (product: IProduct, produtcId: number) => Promise<void>;
}

export interface IModalOpen {
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardContext = createContext({} as IdashboardContext);

export const DashboardProvider = ({ children }: ICartProviderProps) =>{

  const [products, setProducts] = useState<IProduct[]>([]);
  const [productID, setProductID] = useState(null)
  const [openModal, setOpenModal] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  // const [filteredProducts, setFilteredProducts] = useState([] as IProduct[]);
  
  useEffect(() => {
    async function requestProducts() {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    requestProducts();
  }, []);

  const removeProduct = async (productId : number) =>{
    try {
      const token = localStorage.getItem('@Token');
      const response = await api.delete(`/products/${productId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
    
      const newList = products.filter(product => product.id !== productId)
      setProducts(newList)
      toast.success('Produto removido com sucesso')
    } catch (error) {
      console.error(error)
    }
  }

  const addProduct = async (product : IProductCreate) =>{
    try {
      const token = localStorage.getItem('@Token');
      const response = await api.post('/products', product , {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
      setProducts([...products, response.data])
      toast.success('Produto adicionado com sucesso')
    } catch (error) {
      console.error(error)
      toast.error('Produto já Cadastrado')
    }
  }

  const updateProduct = async (product : IProductCreate, produtcId : number) =>{
    try {
      const token = localStorage.getItem('@Token');
      const response = await api.patch(`/products/${produtcId}`, product , {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });

      const updateList = products.map((element) => {
        if(element.id === produtcId){
          return {...response.data}
        }
        return element
      })
      setProducts(updateList)

      toast.success('Produto atualizado com sucesso')
    } catch (error) {
      console.error(error)
      toast.error('Produto já Cadastrado')
    }
  }

 

  return (
    <DashboardContext.Provider
      value={{
        openModal,
        setOpenModal,
        products,
        removeProduct,
        addProduct,
        updateProduct,
        modalRegister,
        setModalRegister,
        openModalUpdate,
        setOpenModalUpdate,
        productID,
        setProductID
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
  

}

