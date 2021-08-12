

import { useState,useEffect } from 'react';
import { BUTTONTEXT } from '../../content/en/buttons';

import { toast } from "react-toastify";
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

const INITIAL_USER_STATE = {
	user:{role:null},
	loading:false,
	error:""
}

const showToast = (type) => {
	if(type === 0){
		toast.error("Error", {
			position: "top-right",
			autoClose: 500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	}else{
		toast.success("Success", {
			position: "top-right",
			autoClose: 500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	}
	
}
const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory()
	const location = useLocation()
const dispatch = useDispatch()


const userData = useSelector((state:RootState) => state.user)

const { loading , error , user } = userData ? userData: INITIAL_USER_STATE

useEffect(() => {
	if(user && user.role) history.push('/admin')
},[])

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
	
  return (
		<>
		{(!user || user.role !== 'admin') && <QCard>

	
		<BoxContainer>
		<FormContainer>
			<FormInput
				value={email}
				width="300px"
				name="email"
				onChange={e => setEmail(e.target.value)}
				type="email"
				placeholder="Email ID"
			/>

			<FormInput
			width="300px"
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
		<SubmitButton onClick={onLogin} type="button">
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
