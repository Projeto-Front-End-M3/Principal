import { useContext } from 'react';
import { ModalRegister } from '../../components/modal/modal-product-register/modal-product-register';
import {StyledDashboardPage} from './styled'

export const DashboardPage = () => (

  <StyledDashboardPage>
      <h2>Teste</h2>
      <ModalRegister/>
  </StyledDashboardPage>
)