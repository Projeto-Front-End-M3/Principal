import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { DashboardContext, IModalOpen } from '../../../providers/dashboardProvider'
import { ShopProvider } from '../../../providers/shopProvider'
import { StyledUpdateUser } from './styled' 


// interface IModalUpdateUser {
  
// }

// export const ModalUpdateUser = ({ isOpen } : IModalOpen ) =>{
//  const { userUpdate } = useContext(ShopProvider)
//   const { setOpenModal } = useContext(DashboardContext)

//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm()

//   if (isOpen) {
//     return (
//       <StyledUpdateUser>
//         <section >
//           <form onSubmit={handleSubmit(userUpdate)}>
//             <div>
//               <p>Atualizar Nome</p>
//               <button type='button' onClick={()=>setOpenModal(false)}>
//                 X
//               </button>
//             </div>
//             <p>Nome</p>
//             <input
//               type="text"
//               {...register('endereco')}
//               placeholder="Novo Endereço"
//             />
//             <button className="modal_register" type="submit">
//               Atualizar
//             </button>
//           </form>
//         </section>
//       </StyledUpdateUser>
//     )
//   }
//   return null

// }