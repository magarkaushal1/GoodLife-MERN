import React from 'react'
import ErrorText from '../../../../../components/ErrorText';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



export default function UpdateStudyInAustralia() {

    let { id } = useParams()
    const navigate = useNavigate()

    const [images, setImages] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [costofliving, setCostOfLiving] = useState("")
    const [reason, setReason] = useState("")
    

    const [data, setData] = useState({
        images: [],
        title: "",
        description: "",
        costofliving:"",
        reason:""

    });

    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault()
        let { images, title, description,costofliving,reason} = data
        let form_data = new FormData();
        form_data.append("title", title)
        form_data.append("description", description)
        form_data.append("costofliving", costofliving)
        form_data.append("reason", reason)
        let images_arr = [...images];
        images_arr.forEach(el => {
            form_data.append("images", el)
        })


        axios.put(`${process.env.REACT_APP_SERVER_URL}/studyinaustralia/${id}`, form_data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
            .then(function (response) {
                console.log(response)
                navigate("/admin/studyinaustralia")
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
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark " >Study In Australia</a></li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Update</li>
                </ol>
            </nav>
            <div className="container shadow my-5">

                <section id="ApplyNow">
                    <h1 className="text-apply fw-bolder mb-5 text-center shadow my-5" style={{ background: 'rgb(243, 164, 46)' }}>
                        Study In Australia</h1>
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
                        <label htmlFor="title" className="form-label required">Title</label>
                        <input type="title" className="form-control" name="title" value={data.title}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="title"
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
             
                    <div class="col-md-12">
                        <label htmlFor="costofliving" class="form-label required">
                            Cost Of Living
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="costofliving" value={data.costofliving}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="costofliving"
                            data={data} />
                    </div>
             
                    <div class="col-md-12">
                        <label htmlFor="reason" class="form-label required">
                            Reason
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="reason" value={data.reason}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="reason"
                            data={data} />
                    </div>
             
                    <div className="mb-3 form-check">
                        <input type="checkbox" onChange={handleChange} className="form-check-input" name="is_checked"
                            id="is_checked" checked={data.is_checked} />
                        <label className="form-check-label" htmlFor="is_checked">Accepted Condition</label>
                    </div>
                        <div className='button-apply' style={{ margin: '5px' }} >
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                </form>
            </div>
        </div>
    )
}
