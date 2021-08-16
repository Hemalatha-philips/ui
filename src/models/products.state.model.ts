export interface ProductsState  {
	loading:boolean;
	products:any[];
	error:any

}

export interface ProductReviewsState {
	loading:boolean;
	product:{id:number,device:string,name:string,reviews:any[]};
	error:any;
}