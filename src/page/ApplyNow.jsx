import React from 'react'
import ErrorText from '../components/ErrorText';
import { useState } from 'react';
import axios from 'axios';


export default function ApplyNow() {

    const [data, setData] = useState({
        full_name: "",
        dateOfBirth: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        applyingCountry: ""
    });

    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault()
        let { full_name, dateOfBirth, email, phone, address, gender, applyingCountry } = data

        axios.post(`${process.env.REACT_APP_SERVER_URL}/applyforms`, {
            full_name,
            dateOfBirth,
            email,
            phone,
            address,
            gender,
            applyingCountry

        })
            .then(function (response) {
                console.log(response)
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
        <>
            <div>
                <div className="container shadow my-5">
                    <section id="ApplyNow">
                        <h1 className="text-apply fw-bolder mb-5 text-center shadow my-5" style={{ background: 'rgb(243, 164, 46)' }}>
                            Application For Apply</h1>
                        <p className="text-base text-gray-100 font-thin leading-normal my-2">
                        </p>
                    </section>

                    <form onSubmit={handleSubmit} className='row g-3'>
                        <div className="col-md-6">
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

                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label required">Email</label>
                            <input type="email" className="form-control" name="email" value={data.email}
                                onChange={handleChange} aria-describedby="emailHelp" />
                            <ErrorText
                                errors={errors}
                                field="email"
                                data={data} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="dateOfBirth" className="form-label required">Date Of Birth</label>
                            <input type="date" className="form-control" name="dateOfBirth" value={data.dateOfBirth}
                                onChange={handleChange} aria-describedby="" />
                            <ErrorText
                                errors={errors}
                                field="dateOfBirth"
                                data={data} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label required">Contact No</label>
                            <input type="phone" className="form-control" name="phone" value={data.phone}
                                onChange={handleChange} aria-describedby="emailHelp" />
                            <ErrorText
                                errors={errors}
                                field="phone"
                                data={data} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="address" className="form-label required">Address</label>
                            <input type="address" className="form-control" name="address" value={data.address}
                                onChange={handleChange} aria-describedby="" />
                            <ErrorText
                                errors={errors}
                                field="address"
                                data={data} />
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="applyingCountry" class="form-label required">Applying Country</label>
                            <select class="form-select" aria-label="select" name='applyingCountry' value={data.applyingCountry}
                                onChange={handleChange}>
                                <option>Select Country</option>
                                <option value="Japan">Japan</option>
                                <option value="Canada">Canada</option>
                                <option value="USA">USA</option>
                                <option value="Australia">Australia</option>
                            </select>

                            <ErrorText errors={errors}
                                field="role" data={data}
                            />
                        </div>

                        <div class="col-md-6">
                            <label htmlFor="gender" class="form-label required">Gender</label>
                            <input type="radio" name="gender" value="Male" onChange={handleChange} style={{ margin: "revert" }} /> Male
                            <input type="radio" name="gender" value="Female" onChange={handleChange} style={{ margin: "revert" }} /> Female
                            <ErrorText errors={errors}
                                field="gender" data={data}
                            />
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" onChange={handleChange} className="form-check-input" name="is_checked"
                                id="is_checked" checked={data.is_checked} />
                            <label className="form-check-label" htmlFor="is_checked">Accepted Condition</label>
                        </div>
                        <div className='button-apply' style={{ margin: '5px' }} >
                            <button type="submit" className="btn btn-primary">Apply Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
