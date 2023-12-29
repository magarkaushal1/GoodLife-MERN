import React from 'react'
import ErrorText from '../../../../components/ErrorText';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';



export default function UpdateContact() {

    let { id } = useParams()
   const navigate = useNavigate()
    const [location, setLocation] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [url, setUrl] = useState("")


    const [data, setData] = useState({
        location: "",
        phone: "",
        email: "",
        url: ""

    });

    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault()
        let { location, phone, email,url } = data
        

        axios.put(`${process.env.REACT_APP_SERVER_URL}/contactus/${id}`,{
             location,
             phone,
             email,
             url
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
            .then(function (response) {
                console.log(response)
                navigate("/admin/contact")
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
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark " href='/'>Contact Us</a></li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Update</li>
                </ol>
            </nav>
            <div className="container shadow my-5">

                <section id="ApplyNow">
                    <h1 className="text-apply fw-bolder mb-5 text-center shadow my-5" style={{ background: 'rgb(243, 164, 46)' }}>
                        Contact Us</h1>
                    <p className="text-base text-gray-100 font-thin leading-normal my-2">
                    </p>
                </section>

                <form onSubmit={handleSubmit} className='row g-3'>
                    
                    <div className="col-md-6">
                        <label htmlFor="location" className="form-label required">Address</label>
                        <input type="location" className="form-control" name="location" value={data.location}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="location"
                            data={data}
                        />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label required">Contact.No</label>
                        <input type="phone" className="form-control" name="phone" value={data.phone}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="phone"
                            data={data}
                        />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label required">Email</label>
                        <input type="email" className="form-control" name="email" value={data.email}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="email"
                            data={data}
                        />
                    </div>
                                        
                    <div className="col-md-6">
                        <label htmlFor="url" className="form-label required">URL</label>
                        <input type="url" className="form-control" name="url" value={data.url}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="url"
                            data={data}
                        />
                    </div>


                    <div className="mb-3 form-check">
                        <input type="checkbox" onChange={handleChange} className="form-check-input" name="is_checked"
                            id="is_checked" checked={data.is_checked} />
                        <label className="form-check-label" htmlFor="is_checked">Accepted Condition</label>
                    </div>
                 
                        <div className='button-apply' style={{ margin: '5px' }} >
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                       </form>
            </div>
        </div>
    )
}
