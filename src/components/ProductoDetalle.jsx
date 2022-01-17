
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProductoAccion} from '../redux/reducers/productoReducer'
import { Contador } from './Contador'
import Carrousel from './Carrousel'
import Slider from './Slider'

const ProductoDetalle = () => {
   
    const dispatch = useDispatch()

    React.useEffect (() => {
        const mostrarData= () => {
              dispatch (obtenerProductoAccion())
        }
        mostrarData()
    }, [])

    const info = useSelector(store=> store.producto.array)
   
    return (
       
        <div className='contenedor-detalle'> 
        <div className='carrousel-mobile'>
           <Slider/>
        </div>
            <Carrousel/>
            <div className='contenedor-texto'>
                <h4 className='marca'>{info.brand}</h4>
                <h2 className='nombre-producto'>{info.name}</h2>
                <p className='descripcion'>{info.description}</p>
                <div>
                <div className='precios-mb'>
                <div className='precios'>
                <span className='precio-con-descuento'>${info.price * info.discount}.00</span>
                <span className='descuento'>{100* info.discount} %</span>
                </div>
                <p className='item-precio'>${info.price}.00</p>
               
                </div>

                    <Contador initial={1} />

                </div>
            </div>
        
    </div>
    
    )
}

export default ProductoDetalle
