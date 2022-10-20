import React, { useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { NavLink, Link, useHistory } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css"


function ProfileButton({ user }) {

    // const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
          setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

      return(
        <>
            <div className="profile_button" onClick={openMenu}>
                <i className="fas fa-user-circle fa-2x" />
            </div>
            {showMenu &&  (
            <div className="profile-dropdown">

            <div className="menu-item1">Hi, {user.firstName}</div>

            <Link  className="menu-item-link" to={`/myproducts`}>My Product Listings</Link>

            <NavLink className='menu-item-link' to={'/seller'}>Create a listing</NavLink>  

            <Link className="menu-item-link" to={`/myreviews`}>My reviews</Link>

            <div className="menu-item" >
                <LogoutButton/>
            </div>

            </div>
        )
            }

        </>
      )

}



export default ProfileButton;
