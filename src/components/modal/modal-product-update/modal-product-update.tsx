import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { DashboardContext, IProduct, IProductCreate } from '../../../providers/dashboardProvider'
import { StyledModalUpdateProduct } from './styled' 
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { InputControl } from '../inputControl';

const formSchema = yup.object().shape({
  name: yup.string(),
  price: yup.number(),
  img: yup.string().url('Deve ser uma url'),
  category: yup.string()
})

export const ModalUpdate = () =>{
  // const { productRegister } = useContext(ProductsContext)
  const { openModalUpdate, setOpenModalUpdate, productID, updateProduct } = useContext(DashboardContext)

  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(formSchema)
  })

  const submit = (data : IProductCreate) =>{
    updateProduct(data, productID)
    reset()
  }
  if(openModalUpdate === true){
    return (
      <StyledModalUpdateProduct>
        <section >
          <form onSubmit={handleSubmit(submit)}>
            <header>
              <p>Atualizar Produto</p>
              <button type='button' onClick={()=>setOpenModalUpdate(false)}>
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
              update product
            </button>

          </form>
        </section>
      </StyledModalUpdateProduct>
    )

  }
  return null
}