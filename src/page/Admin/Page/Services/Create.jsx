import React from 'react'
import ErrorText from '../../../../components/ErrorText';
import { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



export default function CreateService() {

    let { id } = useParams()

    const [images, setImages] = useState([])
    const [coreTitle, setCoreTitle] = useState("")
    const [description, setDescription] = useState("")
    

    const [data, setData] = useState({
        images: [],
        coreTitle: "",
        description: "",

    });

    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault()
        let { images, coreTitle, description } = data
        let form_data = new FormData();
        form_data.append("coreTitle", coreTitle)
        form_data.append("description", description)
        let images_arr = [...images];
        images_arr.forEach(el => {
            form_data.append("images", el)
        })


        axios.post(`${process.env.REACT_APP_SERVER_URL}/services`, form_data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
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
        const { name, value } = e.target
        if (e.target.type === "file") {
            setData({
                ...data,
                [name]: e.target.files
            })
        } else {
            setData({
                ...data,
                [name]: value
            })
            setErrors({
                ...errors,
                [name]: "",
            })
        }
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark " >Services</a></li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Create</li>
                </ol>
            </nav>
            <div className="container shadow my-5">

                <section id="ApplyNow">
                    <h1 className="text-apply fw-bolder mb-5 text-center shadow my-5" style={{ background: 'rgb(243, 164, 46)' }}>
                        Services</h1>
                    <p className="text-base text-gray-100 font-thin leading-normal my-2">
                    </p>
                </section>

                <form onSubmit={handleSubmit} className='row g-3'>
                    <div className="col-md-6">
                        <label htmlFor="images" className="form-label required">Image</label>
                        <input type="file" className="form-control" name="images" value={data.images_arr}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="images"
                            data={data}
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="coreTitle" className="form-label required">Title</label>
                        <input type="coreTitle" className="form-control" name="coreTitle" value={data.coreTitle}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="coreTitle"
                            data={data}
                        />
                    </div>
                    <div class="col-md-12">
                        <label htmlFor="description" class="form-label required">
                            Description
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="description" value={data.description}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="description"
                            data={data} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" onChange={handleChange} className="form-check-input" name="is_checked"
                            id="is_checked" checked={data.is_checked} />
                        <label className="form-check-label" htmlFor="is_checked">Accepted Condition</label>
                    </div>
                    
                        <div className='button-apply' style={{ margin: '5px' }} >
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                        
                </form>
            </div>
        </div>
    )
}
