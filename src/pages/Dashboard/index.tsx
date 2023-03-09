import { useContext } from 'react';
import { ModalRegister } from '../../components/modal/modal-product-register/modal-product-register';
import { ModalUpdate } from '../../components/modal/modal-product-update/modal-product-update';
import { ShowcaseProducts } from '../../components/Showcase';
import { DashboardContext } from '../../providers/dashboardProvider';
import {StyledDashboardPage} from './styled'

export const DashboardPage = () => {
  const { setModalRegister, setOpenModalUpdate } = useContext(DashboardContext)

  return(
    <StyledDashboardPage>
        <ShowcaseProducts/>
    </StyledDashboardPage>

  )
}