

import { useState,useEffect } from 'react';
import { BUTTONTEXT } from '../../content/en/buttons';


import { useHistory,useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import {
  FormContainer,
  BoxContainer,
  FormInput,
  SubmitButton,
  BoldLink,
  MutedLink
} from "../Form/Form";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../actions/user.action';
import { RootState } from '../../store';
import {QCard } from "../Card/Card"
import { showToast } from '../../utils/toast';

const INITIAL_USER_STATE = {
	user:{role:null,userId:null},
	loading:false,
	error:""
}


const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory()
	const location = useLocation()
const dispatch = useDispatch()


const userData = useSelector((state:RootState) => state.user)

const { loading , error , user } = userData ? userData: INITIAL_USER_STATE

// useEffect(() => {
// 	if(user && user.role) history.push('/admin')
// },[])

useEffect(() => {
	if(user){
		const { role } = user
		if(!loading && user && role === 'admin'){
			console.log("user before success " , user,location)
		
			history.push('/admin')
		}
	
	}

}, [user])



	const onLogin = () => {
		console.log("on login ", email , password)
		if(loading) return;
		if(!email || !password) return;
		const request = { email, password };
		dispatch(fetchUser(request, showToast))
    
	}

	const onKeyPress = e => {
	  if(e.code === 'Enter' && email && password){
			onLogin()
		}
	}
	
  return (
		<>
		{(!user || user.role !== 'admin') && <QCard>

	
		<BoxContainer>
		<FormContainer >
			<FormInput
				value={email}
				onKeyPress={onKeyPress}
				name="email"
				onChange={e => setEmail(e.target.value)}
				type="email"
				placeholder="Email ID"
			/>

			<FormInput
		onKeyPress={onKeyPress}
				value={password}
				name="password"
				onChange={e => setPassword(e.target.value)}
				type="password"
				placeholder="Password"
			/>
		</FormContainer>
		<br />
		<MutedLink href="#">Forgot password?</MutedLink>
		<br />
		<SubmitButton  onClick={onLogin} type="submit">
			{BUTTONTEXT.login}
		</SubmitButton>
		<br />
		{/* <MutedLink onClick={switchToRegister}>
			Not a member yet? Register
		</MutedLink> */}
	</BoxContainer>
	</QCard>}
	</>
  );
}

export default Login
