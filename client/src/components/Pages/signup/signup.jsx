import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useOutletContext } from 'react-router-dom';

import './signup.css';
const signSh = yup.object().shape({
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'The field must match')
    .required('The confirm password field is required'),
  avatar: yup.string().required('The Image field is required'),
  password: yup
    .string()
    .min(8, 'must be more than 8 characters')
    .required('The password field is required'),
  username: yup.string().required('The name field is required'),
  email: yup
    .string()
    .email('this field must be an email')
    .required('The email field is required')
    .trim(),
});

function Signup() {
  const navigate = useNavigate();
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [title, setPageName, user, setUser] = useOutletContext();
  setPageName('Sign Up');
  const register = async (e) => {
    try {
      e.preventDefault();
      await signSh.validate({
        username,
        email,
        password,
        confirmPassword,
        avatar,
      });

      let res = await axios.post('/users/signup', {
        username,
        email,
        password,
        avatar,
      });
      toast(`hello ${res.data.username}`);
      navigate('/');
    } catch (error) {
      console.log(error);
      let errorMessage = '';
      if (error.errors instanceof Array) {
        errorMessage = error.errors[0];
      } else if (error.message) {
        errorMessage = error.message;
      } else {
        errorMessage = error.response.data.msg;
      }
      toast.error(errorMessage, {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="sign-up-container ">
      <h3>Fill Up The Form</h3>
      <form className="sign-up-form">
        <div className="signupfield">
          <i className="signupicon fas fa-user"></i>
          <input
            type="text"
            className="signupinput"
            placeholder=" name"
            id="username"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="signupfield">
          <i className=" signupicon fas  fa-envelope"></i>
          <input
            type="email"
            className="signupinput"
            placeholder="Email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signupfield">
          <i className="signupicon fas fa-lock"></i>
          <input
            type="password"
            className="signupinput"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="signupfield">
          <i className="signupicon fas fa-lock"></i>
          <input
            type="password"
            className="signupinput"
            placeholder=" confirm Password"
            id="confirmpassword"
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>
        <div className="signupfield">
          <i className=" signupicon fas fa-image"></i>
          <input
            type="text"
            className="signupinput"
            placeholder=" image"
            id="logo"
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
      </form>
      <span onClick={register} className="button signupsubmit" id="signup">
        Sign Up Now
      </span>
    </div>
  );
}

export default Signup;
