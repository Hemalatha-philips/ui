import { USER_FAIL, USER_REQUEST, USER_SUCCESS } from "../constants/user.constant"

// import api from "../config/http-helper"

export const fetchUser = (request,toast) => async (dispatch) => {
	try {

		dispatch({type: USER_REQUEST})

		// const { data } = await api.post(`/user` , request)
		console.log("request in action " , request)
		const { data } = await dummmyLogin(request)
		console.log("data from promise " , data)
		localStorage.setItem('user' , JSON.stringify(data.user))
		dispatch({type:USER_SUCCESS, payload:data})
		toast(1)

	} catch (error) {
		dispatch({type:USER_FAIL, payload:error.response && error.response.data.message ? error.response.data.message:error.message})
		toast(0)
	}
}


//TODO: Replace when api is made available
const dummmyLogin:(request) => Promise<any> = async (request) => {
	const promise = new Promise((resolve,reject) => {
		setTimeout(() => {
			if(request.email === 'admin@philips.com' && request.password === '1234'){
				console.log("resolving ")
				resolve({data:{user:{role:'admin'}}})
			}	else{
				console.log("rejecting ")
				reject({message:'Wrong credentials'})
			} 
				
		
		},2000)
	})

	return promise
}