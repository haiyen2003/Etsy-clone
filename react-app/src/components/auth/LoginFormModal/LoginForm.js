import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../../store/session';
import "./LoginForm.css"
import SignUpForm from '../SignUpFormModal/SignUpForm';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credential, setCredential] =useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    history.push('/');

   setErrors([]);
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } 
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };



  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
    <button className='register_btn' >Register</button>
    <form onSubmit={onLogin} className='signin_container'>
      <h2 className='signin_head'>Sign In</h2>
      <div>
        {errors.map((error, ind) => (
          <div key={ind} className='login_error'>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='email' className='signin_label'>Email address</label>
        <div></div>
        <input
          name='email address'
          type='text'
          // placeholder='Email address'
          value={email}
          onChange={updateEmail}
          required={true}
          className='signin_input'
        />
      </div>
      <br></br>
      <div>
        <label htmlFor='password' className='signin_label'>Password</label>
        <div></div>
        <input
          name='password'
          type='password'
          // placeholder='Password'
          value={password}
          onChange={updatePassword}
          require={true}
          className='signin_input'
        />
        <div>
          <br></br>
        <button className='signinform_btn' type='submit'>Sign in</button>
        </div>
        <br></br>
        <div>
        <button className='demouserbtn' type='submit' onClick={()=>{setCredential('demo@aa.io'); setPassword('password')}}>Demo User</button>
        </div>
      </div>
    </form>
    </>
  );
};

export default LoginForm;
