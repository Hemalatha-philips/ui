import { USER_FAIL, USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REQUEST, USER_SUCCESS } from "../constants/user.constant"
import { deleteCookie, setCookie } from "../utils/cookies"

// import api from "../config/http-helper"

export const fetchUser = (request,toast) => async (dispatch) => {
	try {

		dispatch({type: USER_REQUEST})

		// const { data } = await api.post(`/user` , request)
		console.log("request in action " , request)
		const { data } = await dummmyLogin(request)
		console.log("data from promise " , data)
		setCookie('user', data.user.userId , { path: '/' });
		dispatch({type:USER_SUCCESS, payload:data})
		toast(1)

	} catch (error) {
		dispatch({type:USER_FAIL, payload:error.response && error.response.data.message ? error.response.data.message:error.message})
		toast(0)
	}
}

export const logoutUser = (request,toast,callback) => async (dispatch) => {
	try {

		dispatch({type: USER_LOGOUT_REQUEST})

		// const { data } = await api.post(`/user` , request)
		console.log("request in action " , request)
		const { data } = await dummmyLogout(request)
		
		deleteCookie('user');
		dispatch({type:USER_LOGOUT_SUCCESS})
		toast(1)
		callback()

	} catch (error) {
		dispatch({type:USER_LOGOUT_FAIL, payload:error.response && error.response.data.message ? error.response.data.message:error.message})
		toast(0)
	}
}


//TODO: Replace when api is made available
const dummmyLogin:(request) => Promise<any> = async (request) => {
	const promise = new Promise((resolve,reject) => {
		setTimeout(() => {
			if(request.email === 'admin@qualytics.com' && request.password === 'welcome123'){
				console.log("resolving ")
				resolve({data:{user:{role:'admin',userId:'PH900'}}})
			}	else{
				console.log("rejecting ")
				reject({message:'Wrong credentials'})
			} 
				
		
		},1000)
	})

	return promise
}

//TODO: Replace when api is made available
const dummmyLogout:(request) => Promise<any> = async (request) => {
	const promise = new Promise((resolve,reject) => {
		setTimeout(() => {
			if(request.userId === 'PH900'){
				console.log("resolving ")
				resolve(true)
			}	else{
				console.log("rejecting ")
				reject(false)
			} 
				
		
		},1000)
	})

	return promise
}