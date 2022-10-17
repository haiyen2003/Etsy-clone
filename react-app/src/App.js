import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginFormModal/LoginForm';
import SignUpForm from './components/auth/SignUpFormModal/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
import User from './components/User';
import ProductList from './components/Products/ProductList';
import ProductDetailPage from './components/Products/ProductDetailPage';
import { authenticate } from './store/session';
import {Modal} from './context/Modal';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <BrowserRouter>

      <NavBar isLoaded={isLoaded}/>


      {isLoaded && (
      <Switch>
        <Route path='/' exact={true} >
          <ProductList />
        </Route>
        <Route exact path='/products/:id'>
          <ProductDetailPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute> */}
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
