import Axios from './../../helpers/axios'
import { cartAddUrl, cartListUrl } from './../../helpers/url'

const SET_LOADING = 'SET_LOADING'
const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS'

const initialState = {
    cartProducts: [],
    loading: false,
}

function CartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: action.payload.loading }

        case SET_CART_PRODUCTS:
            return { ...state, cartProducts: action.payload.cartProducts }

        default:
            return state
    }
}

export const SetLoadingAC = (loading) => ({
    type: SET_LOADING,
    payload: { loading },
})

export const SetCartProductsAC = (cartProducts) => ({
    type: SET_CART_PRODUCTS,
    payload: { cartProducts },
})

export default CartReducer

export function AddProductToCart(productId) {
    return async function (dispatch) {
        Axios.post(
            cartAddUrl,
            { qty: 1, product_id: productId },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        'accessToken'
                    )}`,
                },
            }
        )
            .then(function (response) {
                if (response.data.cart) {
                    dispatch(SetCartProductsAC(response.data.cart))
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export function GetCartProducts() {
    return async function (dispatch) {
        dispatch(SetLoadingAC(true))

        Axios.get(cartListUrl, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(function (response) {
                if (response.data.cart) {
                    dispatch(SetCartProductsAC(response.data.cart))
                    dispatch(SetLoadingAC(false))
                }
            })
            .catch(function (error) {
                dispatch(SetLoadingAC(false))
                console.log(error)
            })
    }
}
