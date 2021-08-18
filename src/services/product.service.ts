
import { mockFetchProducts, mockFetchReviews } from "../actions/server"

class ProductService {

	fetchProducts = () => {
		// return axios.get(`/products`)
		return mockFetchProducts()
	}

	fetchReviews = (product_id,start_date="2021-08-05",end_date="2021-08-15") => {

		// return axios.get(`/productReview?productId=${product_id}&start_date=${start_date}&end_date=${end_date}`)
		return mockFetchReviews()
	}
}

export default new ProductService()