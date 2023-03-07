import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { DashboardContext, IModalOpen, IProduct } from '../../../providers/dashboardProvider'
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
  // const { productRegister } = useContext(ProductsContext)
  const { setOpenModal, addProduct, openModal } = useContext(DashboardContext)

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(formSchema)
  })

  const submit = (data : IProduct) =>{
    console.log(data)
    // addProduct(data)
  }

  return (
    <StyledModalRegisterProduct>
      <section >
        <form onSubmit={handleSubmit(submit)}>
          <header>
            <p>Cadastrar Produto</p>
            <button type='button' onClick={()=>setOpenModal(false)}>
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


          <button className="modal_register" type="submit">
            Cadastrar Produto
          </button>

        </form>
      </section>
    </StyledModalRegisterProduct>
  )
  // if (openModal ===  true) {
  // }
  // return null

}

/*
{ isOpen } : IModalOpen 

*/