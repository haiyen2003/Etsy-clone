import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import "./SignUpForm.css"
import "../LoginFormModal/LoginForm.css"


const SignUpForm = ({setOpenSignup, setOpenLogin, setShowModal}) => {
  const [errors, setErrors] = useState([]);
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] =useState('');
  const [lastName, setLastName] =useState('');
  const [password, setPassword] = useState('');
  // const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    // if (password === repeatPassword) {
    //   const data = await dispatch(signUp(username, email, password));
    //   if (data) {
    //     setErrors(data)
    //   }
    // }
    const data = await dispatch(signUp(email, firstName, lastName, password));
    if (data){
      setErrors(data)
    } else{
      setOpenSignup(false)
    }
  };

  // const updateUsername = (e) => {
  //   setUsername(e.target.value);
  // };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatefirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updatelastName = (e) => {
    setLastName(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // const updateRepeatPassword = (e) => {
  //   setRepeatPassword(e.target.value);
  // };
    const closeSignup = e=>{
      e.preventDefault();
      setOpenSignup(false);
      setOpenLogin(true);
      setShowModal(true);
    }


  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp} className='signin_container'>
      <h2 className='signin_head'>Create your account</h2>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>

      <div>
        <label>Email address</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>

      <div>
        <label>First name</label>
        <input
          type='text'
          name='firstName'
          onChange={updatefirstName}
          value={firstName}
        ></input>
      </div>

      <div>
        <label>Last name</label>
        <input
          type='text'
          name='lastName'
          onChange={updatelastName}
          value={lastName}
        ></input>
      </div>

      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      {/* <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div> */}
      <button type='submit'>Sign Up</button>
      <button  type='submit' onClick={closeSignup}>Sign in</button>
    </form>
  );
};

export default SignUpForm;
