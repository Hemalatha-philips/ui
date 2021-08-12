import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/product.constant"

import api from "../config/http-helper"

export const listProducts = () => async (dispatch) => {
	try {

		dispatch({type: PRODUCT_LIST_REQUEST})

		const { data } = await api.get(`/products`)
		dispatch({type:PRODUCT_LIST_SUCCESS, payload:data})
	} catch (error) {
		dispatch({type:PRODUCT_LIST_FAIL, payload:error.response && error.response.data.message ? error.response.data.message:error.message})
	}
}