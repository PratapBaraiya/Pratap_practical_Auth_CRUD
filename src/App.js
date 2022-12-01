
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Suspense, useEffect } from 'react';
import './App.css';
import Signin from './pages/Authentication/Signin';

import store from "./Store/index";
import Routes from './routes';

import { axiosInterceptor } from './config/AxiosConfig'
import { AUTHENTICATE_FAILED } from './Store/Auth/Type';
import { authenticate } from './Store/Auth/Action';

axiosInterceptor()

const token = localStorage.getItem('auth_token') ?
  JSON.parse(localStorage.getItem('auth_token')) : undefined
const loggedInUser = localStorage.getItem('userData') ?
  JSON.parse(localStorage.getItem('userData')) : undefined

if (token && loggedInUser) {
  store.dispatch(authenticate(loggedInUser))
} else {
  store.dispatch({ type: AUTHENTICATE_FAILED })
}

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter  >
          <Suspense>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
