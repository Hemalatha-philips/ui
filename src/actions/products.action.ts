import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REVIEWS_LIST_FAIL, PRODUCT_REVIEWS_LIST_REQUEST, PRODUCT_REVIEWS_LIST_SUCCESS } from "../constants/product.constant"


import productService from "../services/product.service"

import { getProductsTest, getReviewsByIdTest } from "./server"

/**
 * @function listProducts
 * to fetch list of products under domain : eg: Sonicare
 * 
 */
export const listProducts = () => async (dispatch) => {
	try {

		dispatch({type: PRODUCT_LIST_REQUEST})

		const response:any = await productService.fetchProducts()
		console.log("fetch products response " , response)
		let { data } = response
		data = productsAdapter(data)
		// const { data } = await dummmyFetchProducts()
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
export const listReviews = (id:number,name,device:string,offset=0,limit=25) => async (dispatch) => {
	
	try {

		dispatch({type: PRODUCT_REVIEWS_LIST_REQUEST})

		// const { data } = await api.get(`/products/${id}?device=${device}&offset=${offset}&limit=${limit}`)
		// const { data } = await dummmyFetchReviewsOfProductById(id,device,offset,limit)
		
		const response:any = await productService.fetchReviews(device)
		console.log("fetching reviews response " , response)
		let { data } = response
		data = reviewsAdapter(id,name,device,data)
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
	
			
				resolve({data:getProductsTest()})
		
				
		
		},1000)
	})

	return promise
}

//TODO: Replace when api is made available
const dummmyFetchReviewsOfProductById:(id:number,device:string,offset:number,limit:number) => Promise<any> = async (id,device,offset,limit) => {
	const promise = new Promise((resolve,reject) => {
		setTimeout(() => {
	
				
				resolve({data:getReviewsByIdTest()})
				// resolve({data:{
				// 	data:{
				// 		name:'Sonar',
				// 		id,
				// 		device,
				// 		reviews:getTestGridData()
						
				// 	},
				// 	count:10
				// }})
		
				
		
		},1000)
	})

	return promise
}

const productsAdapter = (data) => {
	const newData = data.map(item =>{
		return {
			id:item._id,
			name:item.product_name,
			...item
		}
	})

	return newData
}

const reviewsAdapter = (id,name,device,data) => {
	
  if(data && data.length > 0){
		const details = data[0]
		let newData = {
			id,
			name,
			device,
			reviews:details.reviews.map(review => {
				return {
					id:review.review_id,
					key:Math.round(Math.random() * 100),
					language:review.language,
					country:review.country,
					rating:review.rating,
					version:review.version,
					user:review.reviewer,
					date:review.date,
					review:review.text,
					englishReview:review.translation,
					...review

					
				}
			})

		}

		return newData

}
}

