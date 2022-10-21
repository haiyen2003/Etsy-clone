
import React, { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './auth/LoginFormModal';
import SignUpFormModal from './auth/SignUpFormModal';
import "./NavBar.css"
import { Modal } from '../context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import Searchbar from './SearchBar/Searchbar';
import { getCartThunk } from '../store/cart';



const NavBar = ({isLoaded}) => {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false)
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const items = Object.values(cartItems);
  useEffect(() => { dispatch(getCartThunk()) }, [dispatch, items.length])

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='profile_button_div'>
        <ProfileButton user={sessionUser} />

      </div>
    );
  } else {
    sessionLinks =(
      <>
        <LoginFormModal setOpenLogin={setOpenLogin} setOpenSignup={setOpenSignup}/>
        {/* <SignUpFormModal /> */}
      </>
    );
  }

  return (
    <>
      <div id="header">
        <div className="sub_header_div">
        <div id="header__left">
          <NavLink style={{ textDecoration: "none" }} to="/" exact={true}>
            <div className="nav_artsy_logo">Artsy</div>
          </NavLink>
        </div>
        <div id="search_bar_container">
          <div id="search_bar">
            <Searchbar />
          </div>
        </div>
        <div className="profile_button_div">
          {/* <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink> */}
          {isLoaded && sessionLinks}
        </div>
        <div style={{display:"flex", "alignItems":"center", position:"relative"}}>
          <div className="test_cart">

            <NavLink className="shoppingcart" to="/cart" exact>
              <i className="fa-solid fa-cart-arrow-down fa-2xl"></i>
            </NavLink>
            
          { !sessionUser ? (<div className="cart-badge">0</div>) : (
          <div className="cart-badge">{items.length}</div>)
          }
          </div>
        </div>

        </div>
        {/* <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign In
          </NavLink>
        </div> */}
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {/* <div>
          <LogoutButton />
        </div> */}
      </div>
    </>
  );
}

export default NavBar;
