import React, { useState } from 'react';
import '../assets/index.css';
import axios from 'axios';
import Alert from '../components/Alert';
import ErrorText from '../components/ErrorText';
import {useSelector, useDispatch } from 'react-redux';
import { FaSignInAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { login, logout,setUser } from '../redux/reducer/auth';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
    is_checked: false, // Assuming this checkbox state is managed here
  });

  const [errors, setErrors] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShowSpinner(true);
    const { password, email } = data;

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/login`, {
        email,
        password,
      })
      .then(function (response) {
        localStorage.setItem('access_token', response.data.access_token);
        dispatch(login())
        dispatch(setUser(response.data))
        navigate('/admin/message');
      })
      .catch(function (error) {
        setErrors({
          status: 'danger',
          msg: error?.response?.data?.msg,
        });
      });
  }

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setData({
      ...data,
      [name]: newValue,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
          <h1 className="display-4 fw-bolder">Hello!</h1>
          <p className="lead text-center">Enter Your Credentials To Login</p>
          <h5 className="mb-4 text-white">OR</h5>
          <NavLink to="/login" className="btn btn-light text-primary rounded-pill pb-2 w-50">
            <i>
              <FaSignInAlt />
            </i>{' '}
            Signup
          </NavLink>
        </div>

        <div className="col-md-7 p-5">
          <section id="Login">
            <h1 className="display-6 fw-bolder mb-5 text-center">Login</h1>
          </section>

          <form onSubmit={handleSubmit}>
            {errors.msg && errors.status && <Alert errors={errors} />}

            <div className="mb-3">
              <label htmlFor="email" className="form-label required">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={data.email}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
              <ErrorText errors={errors} field="email" data={data} />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label required">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
              <ErrorText errors={errors} field="password" data={data} />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                onChange={handleChange}
                className="form-check-input"
                name="is_checked"
                id="is_checked"
                checked={data.is_checked}
              />
              <label className="form-check-label" htmlFor="is_checked">
                Accepted Condition
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
