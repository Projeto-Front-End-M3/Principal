import { useContext } from 'react'
import { DashboardContext } from '../../providers/dashboardProvider'
import { InputControl } from '../modal/inputControl'
import { ModalRegister } from '../modal/modal-product-register/modal-product-register'
import { ModalUpdate } from '../modal/modal-product-update/modal-product-update'
import { StyledContainerShowcase } from './style'

export const ShowcaseProducts = () =>{
    const { setModalRegister, setOpenModalUpdate, products, removeProduct, setProductID, productID } = useContext(DashboardContext)

    const update = (id : any ) =>{
        setOpenModalUpdate(true);
        setProductID(id)
    }
    return(
        <StyledContainerShowcase>

            <header>
                <h2>Lista de Produtos</h2>
                <input/>
                <button onClick={() => setModalRegister(true)}>+</button>
            </header>
            <ModalRegister/>
            <ModalUpdate/>
            <ul>
                {products.map((product) => {
                    return(
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.category}</p>
                            <p>{product.price}</p>
                            <div className='hardware__control'>
                                <button onClick={() => update(product.id)}>Update</button>
                                <button onClick={() => removeProduct(product.id)}>Delete</button>

                            </div>
                        </li>
                    )
                })}
            </ul>
        </StyledContainerShowcase>
    )
}