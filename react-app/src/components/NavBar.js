
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './auth/LoginFormModal';
import "./NavBar.css"
import { Modal } from '../context/Modal';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Searchbar from './SearchBar/Searchbar';


const NavBar = ({isLoaded}) => {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks =(
      <>
        <LoginFormModal/>
      </>
    );
  }

  return (
    <>
      <nav id="header">
        <div id="header__left">

          <NavLink to='/' exact={true} activeClassName='active'>
          <img
            id = "header__icon"
            src = "https://bushelandpecks.com/wp-content/uploads/2017/03/etsy-logo.png"
            alt='logo'
            />
          </NavLink>
      </div>
      <div id= "search_bar_container">
          <div id="search_bar">
          <Searchbar />
          </div>
        </div>
        <div>
          {/* <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink> */}
          {isLoaded && sessionLinks}
        </div>
        <NavLink to='/cart' exact>
          <img
            id = "shopping_cart_icon"
            src = "https://www.nicepng.com/png/detail/253-2534370_png-file-shopping-cart-line-icon.png"
            alt = "logo"
          />

        </NavLink>
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

      </nav>
    </>
  );
}

export default NavBar;
