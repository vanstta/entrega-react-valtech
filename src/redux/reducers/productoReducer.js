import axios from 'axios'
import {OBTENER_PRODUCTO} from '../service/productoActions'
//constantes

export const productoInicial = {
    array: []
}

// reducer

export function productoReducer (state= productoInicial, action) {
    switch (action.type) {
        case OBTENER_PRODUCTO:
            return {...state, array: action.payload}
        default:
            return state
    }
}

//acciones

export const obtenerProductoAccion =() => async (dispatch) => {

try {
    const res = await axios.get('https://www.mockachino.com/b045b644-d886-4e/products/7d6f7710-95d0-4a27-ae6c-b02c6cb0348f')
    
    dispatch ({
        type: OBTENER_PRODUCTO,
        payload: res.data
        
    })

} catch (error) {
    console.log(error)
}
}