import { createStore , combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"


import { productListReducer, productReviewsListReducer } from "./reducers/product.reducer"
import { userReducer } from "./reducers/user.reducer"



const reducer = combineReducers({
	user:userReducer,
	products:productListReducer,
	productReviews:productReviewsListReducer

})

export type RootState = ReturnType<typeof reducer>

const userFromLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || ''):null
const initialState= {
	user:userFromLocalStorage
}

const middlewares = [thunk]

export const store = createStore(reducer , initialState , composeWithDevTools(applyMiddleware(...middlewares)))

