import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { DashboardContext, IModalOpen } from '../../../providers/dashboardProvider'
import { ProductsContext } from '../../../providers/productsProvider'
import { StyledModalRegisterProduct } from './styled' 


export const ModalUpdate = ({ isOpen } : IModalOpen ) =>{
  const { productRegister } = useContext(ProductsContext)
  const { setOpenModal } = useContext(DashboardContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  if (isOpen) {
    return (
      <StyledModalRegisterProduct>
        <section >
          <form onSubmit={handleSubmit(productRegister)}>
            <div>
              <p>Cadastrar Produto</p>
              <button type='button' onClick={()=>setOpenModal(false)}>
                X
              </button>
            </div>
            <p>Nome</p>
            <input
              type="text"
              {...register('title')}
              placeholder="Tecnologia"
            />
            <p>Selecionar Status</p>
            <select id="" {...register('status')}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button className="modal_register" type="submit">
              Cadastrar Tecnologia
            </button>
          </form>
        </section>
      </StyledModalRegisterProduct>
    )
  }
  return null

}