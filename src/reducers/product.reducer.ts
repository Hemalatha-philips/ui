import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REVIEWS_LIST_FAIL, PRODUCT_REVIEWS_LIST_REQUEST, PRODUCT_REVIEWS_LIST_SUCCESS } from "../constants/product.constant"

export const productListReducer = (state = {products:[]}, action ) => {
	switch(action.type){
		case PRODUCT_LIST_REQUEST:
			return {loading:true, products:[], count:0}
		case PRODUCT_LIST_SUCCESS:
			return {loading:false, products:action.payload, count:action.payload.count}
		case PRODUCT_LIST_FAIL:
			return {loading:false, error:action.payload}
		default:
			return state


	}

}

export const productReviewsListReducer = (state = {product:{reviews:[]}}, action ) => {
	switch(action.type){
		case PRODUCT_REVIEWS_LIST_REQUEST:
			return {loading:true, product:{reviews:[]}, count:0}
		case PRODUCT_REVIEWS_LIST_SUCCESS:
			return {loading:false, product:action.payload.data, count:action.payload.count}
		case PRODUCT_REVIEWS_LIST_FAIL:
			return {loading:false, error:action.payload}
		default:
			return state


	}

}