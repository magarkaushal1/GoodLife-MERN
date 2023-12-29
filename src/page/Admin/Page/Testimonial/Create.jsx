import React from 'react'
import ErrorText from '../../../../components/ErrorText';
import { useState } from 'react';
import axios from 'axios';
import { Link, UNSAFE_DataRouterStateContext, useParams } from 'react-router-dom';



export default function CreateTestimonial() {

    let { id } = useParams()

    const [images, setImages] = useState([])
    const [name, setName] = useState("")
    const [quote, setQuote] = useState("")
    // const [facebooklink, setFacebookLink] = useState("")
    // const [twitterlink, setTwitterLink] = useState("")
    // const [instalink, setInstaLink] = useState("")
    const [link, setLink] = useState([])


    const [data, setData] = useState({
        images: [],
        name: "",
        quote: "",
        link: [],

    });

    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault()
        let { images, name, quote, link } = data
        let form_data = new FormData();
        form_data.append("name", name)
        form_data.append("quote", quote)
        let links_arr = [...link];
        links_arr.forEach(el => {
            form_data.append("link", el)
        })
        // form_data.append("facebooklink", facebooklink)
        // form_data.append("twitterlink", twitterlink)
        // form_data.append("instalink",instalink)
        let images_arr = [...images];
        images_arr.forEach(el => {
            form_data.append("images", el)
        })


        axios.post(`${process.env.REACT_APP_SERVER_URL}/testimonials`, form_data, {
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
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark " >Testimonials</a></li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Create</li>
                </ol>
            </nav>
            <div className="container shadow my-5">

                <section id="ApplyNow">
                    <h1 className="text-apply fw-bolder mb-5 text-center shadow my-5" style={{ background: 'rgb(243, 164, 46)' }}>
                        Testimonials</h1>
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
                        <label htmlFor="name" className="form-label required">Full Name</label>
                        <input type="name" className="form-control" name="name" value={data.name}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="name"
                            data={data}
                        />
                    </div>
                    <div class="col-md-12">
                        <label htmlFor="description" class="form-label required">
                            Quote
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="quote" value={data.quote}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="quote"
                            data={data} />
                    </div>
                    {/*                     
                    <div className="col-md-6">
                        <label htmlFor="facebooklink" className="form-label required">Facebook Link</label>
                        <input type="facebooklink" className="form-control" name="facebooklink" value={data.facebooklink}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="facebooklink"
                            data={data}
                        />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="twitterlink" className="form-label required">Twitter Link</label>
                        <input type="twitterlink" className="form-control" name="twitterlink" value={data.twitterlink}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="twitterlink"
                            data={data}
                        />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="instalink" className="form-label required">Instagram Link</label>
                        <input type="instalink" className="form-control" name="instalink" value={data.instalink}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="instalink"
                            data={data}
                        />
                    </div> */}
                    <div className="mb-3 form-check">
                        <input type="checkbox" onChange={handleChange} className="form-check-input" name="is_checked"
                            id="is_checked" checked={data.is_checked} />
                        <label className="form-check-label" htmlFor="is_checked">Accepted Condition</label>
                    </div>
                    <Link to="/admin/testimonial">
                        <div className='button-apply' style={{ margin: '5px' }} >
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}
