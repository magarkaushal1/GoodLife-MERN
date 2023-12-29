import React from 'react';
import axios from 'axios';

import { useState } from 'react';
import ErrorText from '../components/ErrorText';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

export default function Signup() {


    const navigate = useNavigate();

    const [data, setData] = useState({
        full_name: "",
        email: "",
        password: "",

    });

    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault()
        let { full_name, email, password, } = data

        axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, {
            full_name,
            email,
            password,

        })
            .then(function (response) {
                navigate("/login")

            })
            .catch(function (error) {
                console.log(error?.response?.data?.errors);
                setErrors({})
                error?.response?.data?.errors?.forEach(el => {
                    setErrors((prev_errors) => {
                        return {
                            ...prev_errors,
                            [el.param]: el.msg
                        }
                    })

                })
            })


    }


    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        })
        setErrors({
            ...errors,
            [e.target.name]: "",
        })

    }



    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center 
                     text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder ">
                            Hello!
                        </h1>
                        <p className="lead text-center">

                            Enter Your Credentials To Signup
                        </p>
                        <h5 className="mb-4 text-white">OR</h5>
                        <NavLink to="/login" className="btn btn-light  text-primary rounded-pill pb-2 w-50">
                            <i><FaSignInAlt /> </i>
                            Login
                        </NavLink>
                    </div>


                    <div className="col-md-6 p-5 ">
                        <section id="Signup">
                            <h1 className="display-6 fw-bolder mb-5 text-center shadow my-5">
                                Signup</h1>
                            <p className="text-base text-gray-100 font-thin leading-normal my-2">
                            </p>
                        </section>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="full_name" className="form-label required">Full Name</label>
                                <input type="name" className="form-control" name="full_name" value={data.full_name}
                                    onChange={handleChange}
                                    aria-describedby="emailHelp" />
                                <ErrorText
                                    errors={errors}
                                    field="full_name"
                                    data={data}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label required">Email</label>
                                <input type="email" className="form-control" name="email" value={data.email}
                                    onChange={handleChange} aria-describedby="emailHelp" />
                                <ErrorText
                                    errors={errors}
                                    field="email"
                                    data={data} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label required">Password</label>
                                <input type="password" className="form-control" name="password"
                                    onChange={handleChange}
                                    aria-describedby="emailHelp" />
                                <ErrorText errors={errors}
                                    field="password" data={data}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" onChange={handleChange} className="form-check-input" name="is_checked"
                                    id="is_checked" checked={data.is_checked} />
                                <label className="form-check-label" htmlFor="is_checked">Accepted Condition</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

