import React, { useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { NavLink, Link, useHistory } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";



function ProfileButton({ user }) {
    const history= useHistory()
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
          setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

      

}



export default ProfileButton;
