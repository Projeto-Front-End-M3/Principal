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
                <button className='btn__create' onClick={() => setModalRegister(true)}>+</button>
            </header>
            <ModalRegister/>
            <ModalUpdate/>
            <ul>
                {products.map((product) => {
                    return(
                        <li key={product.id}>
                            <div className='container__img'>
                                <img src={product.img}/>
                            </div>
                            <div className='container__info'>
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                            <p className='category__product'>{product.category}</p>
                            <div className='hardware__control'>
                                <button className='btn__update' onClick={() => update(product.id)}>Update</button>
                                <button className='btn__delete' onClick={() => removeProduct(product.id)}>Delete</button>

                            </div>
                        </li>
                    )
                })}
            </ul>
        </StyledContainerShowcase>
    )
}