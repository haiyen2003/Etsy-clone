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
import ProductCreate from './components/Products/ProductCreate';
import MyProductListings from './components/Products/MyProductListings';
import HomeLivingCategory from './components/Categories/Home&living';
import ArtCategory from './components/Categories/Art';
import GiftCategory from './components/Categories/Gift';
import ClothingCategory from './components/Categories/Clothing';
import WeddingCategory from './components/Categories/Wedding';
import JewelryCategory from './components/Categories/Jewelry';
import Cart from './components/Cart'
import OrderCompleted from './components/Cart/OrderCompleted';


function App(){
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [isCartLoaded, setCardLoaded] = useState(false)
  // const [openLogin, setOpenLogin] = useState(false);
  // const [openSignup, setOpenSignup] = useState(false);

  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar isLoaded={isLoaded} />

      {/* <NavBar /> */}

      {isLoaded && (
        <Switch>
          <Route path="/" exact={true}>
            <ProductList />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/order-completed">
            <OrderCompleted />
            </Route>
          <Route exact path="/products/:id">
            <ProductDetailPage />
          </Route>
          <Route exact path="/seller">
            <ProductCreate />
          </Route>
          <Route exact path="/home&living">
            <HomeLivingCategory />
          </Route>
          <Route exact path="/arts">
            <ArtCategory />
          </Route>
          <Route exact path="/gift">
            <GiftCategory />
          </Route>
          <Route exact path="/clothing">
            <ClothingCategory />
          </Route>
          <Route exact path="/wedding">
            <WeddingCategory />
          </Route>
          <Route exact path="/jewelry">
            <JewelryCategory />
          </Route>
          <Route exact path="/myproducts">
            <MyProductListings />
          </Route>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute> */}
          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
