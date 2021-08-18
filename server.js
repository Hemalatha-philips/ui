 const getProducts = () => {
	return {
		"error":null,
		"data":[
			 {
					"_id":"611923d92efa99ae28a3ebea",
					"product_name":"Sonicare",
					"product_ids":[
						 {
								"device":"ios",
								"version":"",
								"publish_date":"Mon Aug 09 2021 05:30:00 GMT+0530 (India Standard Time)",
								"product_id":"1047099766"
						 },
						 {
								"device":"android",
								"version":"",
								"publish_date":"Mon Aug 09 2021 05:30:00 GMT+0530 (India Standard Time)",
								"product_id":"20600005305722"
						 }
					],
					"status":"Active"
			 },
			 {
					"_id":"611a039d58eab3814fedf78d",
					"product_name":"LumeaIPL",
					"product_ids":[
						 {
								"device":"ios",
								"version":"",
								"publish_date":"Mon Aug 09 2021 05:30:00 GMT+0530 (India Standard Time)",
								"product_id":"1037884249"
						 },
						 {
								"device":"android",
								"version":"",
								"publish_date":"Mon Aug 09 2021 05:30:00 GMT+0530 (India Standard Time)",
								"product_id":"20600006434815"
						 }
					],
					"status":"Active"
			 },
			 {
					"_id":"611a42e758eab3814fedf7a8",
					"product_name":"SleepMapper",
					"product_ids":[
						 {
								"device":"ios",
								"version":"",
								"publish_date":"Mon Aug 09 2021 05:30:00 GMT+0530 (India Standard Time)",
								"product_id":"1258577276"
						 },
						 {
								"device":"android",
								"version":"",
								"publish_date":"Mon Aug 09 2021 05:30:00 GMT+0530 (India Standard Time)",
								"product_id":"20600008247890"
						 }
					],
					"status":"Active"
			 },
			 {
					"_id":"611a430c58eab3814fedf7a9",
					"product_name":"Sonicare_Kids",
					"product_ids":[
						 {
								"device":"ios",
								"version":"",
								"publish_date":"Mon Aug 09 2021 05:30:00 GMT+0530 (India Standard Time)",
								"product_id":"1002285219"
						 },
						 {
								"device":"android",
								"version":"",
								"publish_date":"Mon Aug 09 2021 05:30:00 GMT+0530 (India Standard Time)",
								"product_id":"20600004765951"
						 }
					],
					"status":"Active"
			 },
			 {
					"_id":"611a433258eab3814fedf7aa",
					"product_name":"GroomTribe",
					"product_ids":[
						 {
								"device":"ios",
								"version":"",
								"publish_date":"Mon Aug 09 2021 05:30:00 GMT+0530 (India Standard Time)",
								"product_id":"1260946476"
						 },
						 {
								"device":"android",
								"version":"",
								"publish_date":"Mon Aug 09 2021 05:30:00 GMT+0530 (India Standard Time)",
								"product_id":"20600008182302"
						 }
					],
					"status":"Active"
			 }
		]
 }
}


const getReviewsById = () =>{
	return {
		"error":false,
		"data":[
			 {
					"_id":"611b449d759f2b3529a74cea",
					"product_id":1037884249,
					"reviews":[
						 {
								"review_id":"7688033457",
								"name":"I love it!!",
								"date":"2021-08-13",
								"title":"I love it!!",
								"device":"ios-all",
								"market_code":"apple-store",
								"version":"5.0.0",
								"country":"GB",
								"rating":5,
								"text":"This is what I have needed all my life, a free hair body 😍👌🏻",
								"language":null,
								"reviewer":""
						 },
						 {
								"review_id":"7685263419",
								"name":"Je pensais que le résultat serai plus rapide et qu’il n’y aurai plus de poil",
								"date":"2021-08-12",
								"title":"Je pensais que le résultat serai plus rapide et qu’il n’y aurai plus de poil",
								"device":"ios-all",
								"market_code":"apple-store",
								"version":"5.0.0",
								"country":"BE",
								"rating":4,
								"text":"Je suis satisfaite mais je pensais être que le résultat serai plus rapide",
								"language":null,
								"reviewer":""
						 },
						 {
								"review_id":"7688033457",
								"date":"2021-08-13",
								"title":"I love it!!",
								"name":"I love it!!",
								"device":"ios-all",
								"market_code":"apple-store",
								"version":"5.0.0",
								"language":null,
								"rating":5,
								"text":"This is what I have needed all my life, a free hair body 😍👌🏻",
								"country":"GB",
								"reviewer":""
						 }
					]
			 }
		]
 }
}

export const mockFetchProducts = () => {
	const promise = new Promise((resolve,reject) => {
		 resolve(getProducts())
	})

	return promise
}

export const mockFetchReviews = () => {
	const promise = new Promise((resolve,reject) => {
		 resolve(getReviewsById())
	})

	return promise
}