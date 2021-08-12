import "./App.scss"

import { BrowserRouter  ,Switch, Route, Redirect} from 'react-router-dom'
import { ToastContainer } from "react-toastify";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import QLayout from "./containers/layouts/Layout";

const App = () => {

	const userData = useSelector((state:RootState) => state.user)
	console.log("user in app " , userData)

	const {user} = userData ? {user:userData}: {user:null}
  return (
    <div className="Q-root">
			<BrowserRouter>
    <Switch>

		<Route exact path="/" component = {() => <QLayout auth={user} />} />
	
		

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
