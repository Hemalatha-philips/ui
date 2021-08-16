import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REVIEWS_LIST_FAIL, PRODUCT_REVIEWS_LIST_REQUEST, PRODUCT_REVIEWS_LIST_SUCCESS } from "../constants/product.constant"

import api from "../config/http-helper"
import { products } from "../mocks/data/products"
import { getTestGridData } from "../mocks/data/testgrid.data"

/**
 * @function listProducts
 * to fetch list of products under domain : eg: Sonicare
 * 
 */
export const listProducts = () => async (dispatch) => {
	try {

		dispatch({type: PRODUCT_LIST_REQUEST})

		// const { data } = await api.get(`/products`)
		const { data } = await dummmyFetchProducts()
		console.log("fetch products " , data)
		dispatch({type:PRODUCT_LIST_SUCCESS, payload:data})
	} catch (error) {
		dispatch({type:PRODUCT_LIST_FAIL, payload:error.response && error.response.data.message ? error.response.data.message:error.message})
	}
}



/**
 * @function listReviews
 * to fetch reviews of a particular product
 * @param id id of product
 * @param device type of  device - 'Android' | 'IOS'
 * @param offset page : starts from 0
 * @param limit no of records to show
 */
export const listReviews = (id:number,device:string ='Android',offset=0,limit=25) => async (dispatch) => {
	
	try {

		dispatch({type: PRODUCT_REVIEWS_LIST_REQUEST})

		// const { data } = await api.get(`/products/${id}?device=${device}&offset=${offset}&limit=${limit}`)
		const { data } = await dummmyFetchReviewsOfProductById(id,device,offset,limit)
		console.log("reviews " , data)
		dispatch({type:PRODUCT_REVIEWS_LIST_SUCCESS, payload:data})
	} catch (error) {
		dispatch({type:PRODUCT_REVIEWS_LIST_FAIL, payload:error.response && error.response.data.message ? error.response.data.message:error.message})
	}
}


//TODO: Replace when api is made available
const dummmyFetchProducts:() => Promise<any> = async () => {
	const promise = new Promise((resolve,reject) => {
		setTimeout(() => {
	
				console.log("resolving ", products)
				resolve({data:products})
		
				
		
		},1000)
	})

	return promise
}

//TODO: Replace when api is made available
const dummmyFetchReviewsOfProductById:(id:number,device:string,offset:number,limit:number) => Promise<any> = async (id,device,offset,limit) => {
	const promise = new Promise((resolve,reject) => {
		setTimeout(() => {
	
				console.log("resolving ")
				resolve({data:{
					data:{
						name:'Sonar',
						id,
						device,
						reviews:getTestGridData()
						
					},
					count:10
				}})
		
				
		
		},1000)
	})

	return promise
}

