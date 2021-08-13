
import { Route , Redirect } from "react-router-dom"
import { getCookie } from "../utils/cookies";


export const ProtectedRoute = ({component:Component, ...rest}) => {

	const user = getCookie('user')
	console.log("user " , user)



		return (

			
			<Route {...rest} render = {(props) => {
				if(user )
					return <Component {...props} />
				else 	return <Redirect to = {{
					pathname:'/login',
					state:{
						from:props.location
					}
				}} />
			}} />
			)


	

}

