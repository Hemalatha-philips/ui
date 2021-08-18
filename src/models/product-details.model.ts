

	export interface Review {
			review_id: string;
			name: string;
			date: string;
			title: string;
			device: string;
			market_code: string;
			version: string;
			country: string;
			rating: number;
			text: string;
			language?: any;
			reviewer: string;
	}

	export interface ProductDetails{
			_id: string;
			product_id: number;
			reviews: Review[];
	}

	export interface ProductDetailsResponse {
		error?:any;
		data:ProductDetails[]
	}


