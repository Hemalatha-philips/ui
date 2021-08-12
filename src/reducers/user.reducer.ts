import { USER_FAIL, USER_REQUEST, USER_SUCCESS} from "../constants/user.constant"

export const userReducer = (state = {user:null}, action ) => {
	switch(action.type){
		case USER_REQUEST:
			return {loading:true, user:null}
		case USER_SUCCESS:
			return {loading:false, user:action.payload.user}
		case USER_FAIL:
			return {loading:false, error:action.payload}
		default:
			return state


	}

}