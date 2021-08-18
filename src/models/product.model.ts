

	export interface ProductId {
			device: string;
			version: string;
			publish_date: string;
			product_id: string;
	}

	export interface Rootproduct {
			_id: string;
			product_name: string;
			product_ids: ProductId[];
			status: string;
	}

	export interface ProductsResponse {
		error?:any;
		data:Rootproduct[]
	}



