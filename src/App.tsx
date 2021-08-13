import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "./App.scss";
import TestGrid from "./components/Grid/TestGrid/TestGrid";
import Login from './components/Login/Login';
import { Admin } from './containers/layouts/Admin';
import QLayout from "./containers/layouts/Layout";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { getCookie } from "./utils/cookies";



const App = () => {



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
		<ProtectedRoute exact path="/admin" component = {(props) => <QLayout auth={user}>
			<Admin {...props} />
		</QLayout>} />
		<Route exact path="/login" component = {(props) => <QLayout auth={user}>
			<Login {...props} />
		</QLayout>} />
		<Route exact path="/qa/grid" component ={TestGrid} />
	
		

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
