import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "./App.scss";

import Login from './components/Login/Login';
import { Admin } from './containers/layouts/Admin';
import QLayout from "./containers/layouts/Layout";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { getCookie } from "./utils/cookies";

import api from "./services/product.service"

const App = () => {


	useEffect(() => {
		const testfetchProducts = async () => {
			const productResponse = await api.fetchProducts()
			console.log("products response")

			const reviewsResponse = await api.fetchReviews()
			console.log("Reviews " , reviewsResponse)
		}

		testfetchProducts()
	
	}, [])


	const user = getCookie("user")
  return (
    <div className="Q-root">
			<BrowserRouter>
    <Switch>
    <Route exact path="/"  render = {(props) => <Redirect {...props} to={{
					pathname:'/admin',
					state:{
						from:props.location
					}
		}} />} />
		<Route exact path="/admin" component = {(props) => <QLayout auth={user}>
			<Admin {...props} />
		</QLayout>} />
		<Route exact path="/login" component = {(props) => <QLayout auth={user}>
			<Login {...props} />
		</QLayout>} />
	
	
		

</Switch>
  </BrowserRouter>
	<ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <ToastContainer />
    </div>
  );
}

export default App;
