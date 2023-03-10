import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { DashboardContext, IModalOpen, IProduct, IProductCreate } from '../../../providers/dashboardProvider'
import { ProductsContext } from '../../../providers/productsProvider'
import { StyledModalRegisterProduct } from './styled' 
import { InputControl } from '../inputControl';

const formSchema = yup.object().shape({
  name: yup.string(),
  price: yup.number(),
  img: yup.string().url('Deve ser uma url'),
  category: yup.string()
})

export const ModalRegister = () =>{

  const {  modalRegister, addProduct, setModalRegister } = useContext(DashboardContext)

  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(formSchema)
  })

  const submit = (data : IProductCreate) =>{
    addProduct(data)
    reset()
  }

  if(modalRegister === true){
    return (
      <StyledModalRegisterProduct>
        <section >
          <form onSubmit={handleSubmit(submit)}>
            <header>
              <p>Cadastrar Produto</p>
              <button type='button' onClick={()=> setModalRegister(false)}>
                X
              </button>
            </header>
  
            <InputControl 
              type="text"
              idName='name'
              register={register('name')} 
              placeholder="Nome do produto"
              error={errors.name?.message}
            />
  
            <InputControl 
              type="number"
              idName='price'
              register={register('price')} 
              placeholder="Preço"
              error={errors.price?.message}
            />
            
            <InputControl 
              type="text"
              idName='img'
              register={register('img')} 
              placeholder="Imagem"
              error={errors.img?.message}
            />
                        
            <InputControl 
              type="text"
              idName='category'
              register={register('category')} 
              placeholder="Categoria"
              error={errors.category?.message}
            />
  
  
            <button className="btn__register" type="submit">
              Cadastrar Produto
            </button>
  
          </form>
        </section>
      </StyledModalRegisterProduct>
    )

  }

  return null

}

