import axios from "axios"

class ProductService {

	fetchProducts = () => {
		return axios.get(`/products`)
	}

	fetchReviews = (product_id="1037884249",start_date="2021-08-05",end_date="2021-08-15") => {
		return axios.get(`/productReview?productId=${product_id}&start_date=${start_date}&end_date=${end_date}`)
	}
}

export default new ProductService()