import React from 'react'
import ErrorText from '../../../../../components/ErrorText';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



export default function UpdateStudyInCanada() {

    let { id } = useParams()
    const navigate = useNavigate()
    const [images, setImages] = useState([])
    const [des, setDes] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [testformat, setTestFormat] = useState("")
    const [subtitle1, setSubtitle1] = useState("")
    const [des1, setDes1] = useState("")
    const [subtitle2, setSubtitle2] = useState("")
    const [des2, setDes2] = useState("")
    const [subtitle3, setSubtitle3] = useState("")
    const [des3, setDes3] = useState("")
    const [subtitle4, setSubtitle4] = useState("")
    const [des4, setDes4] = useState("")
    const [subtitle5, setSubtitle5] = useState("")
    const [des5, setDes5] = useState("")
    const [subtitle6, setSubtitle6] = useState("")
    const [des6, setDes6] = useState("")
    const [subtitle7, setSubtitle7] = useState("")
    const [des7, setDes7] = useState("")
    const [subtitle8, setSubtitle8] = useState("")
    const [des8, setDes8] = useState("")
    const [subtitle9, setSubtitle9] = useState("")
    const [des9, setDes9] = useState("")
    const [subtitle10, setSubtitle10] = useState("")
    const [des10, setDes10] = useState("")
    
    const [data, setData] = useState({
        images: [],
        des: "",
        title: "",
        content:"",
        testformat: "",
        subtitle1:"",
        des1:"",
        subtitle2:"",
        des2:"",
        subtitle3:"",
        des3:"",
        subtitle4:"",
        des4:"",
        subtitle5:"",
        des5:"",
        subtitle6:"",
        des6:"",
        subtitle7:"",
        des7:"",
        subtitle8:"",
        des8:"",
        subtitle9:"",
        des9:"",
        subtitle10:"",
        des10:"",
    });

    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault()
        let { images, des, title, content, testformat,subtitle1,des1,subtitle2,des2,
            subtitle3,des3,subtitle4,des4,subtitle5,des5,subtitle6,des6,subtitle7,
            des7,subtitle8,des8,subtitle9,des9,subtitle10, des10} = data
        let form_data = new FormData();
        form_data.append("des",des)
        form_data.append("title", title)
        form_data.append("content",content)
        form_data.append("testformat",testformat)
        form_data.append("subtitle1",subtitle1)
        form_data.append("des1",des1)
        form_data.append("subtitle2",subtitle2)
        form_data.append("des2",des2)
        form_data.append("subtitle3",subtitle3)
        form_data.append("des3",des3)
        form_data.append("subtitle4",subtitle4)
        form_data.append("des4",des4)
        form_data.append("subtitle5",subtitle5)
        form_data.append("des5",des5)
        form_data.append("subtitle6",subtitle6)
        form_data.append("des6",des6)
        form_data.append("subtitle7",subtitle7)
        form_data.append("des7",des7)
        form_data.append("subtitle8",subtitle8)
        form_data.append("des8",des8)
        form_data.append("subtitle9",subtitle9)
        form_data.append("des9",des9)
        form_data.append("subtitle10",subtitle10)
        form_data.append("des10",des10)
        
        let images_arr = [...images];
        images_arr.forEach(el => {
            form_data.append("images", el)
        })


        axios.put(`${process.env.REACT_APP_SERVER_URL}/ielts/${id}`, form_data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
            .then(function (response) {
                console.log(response)
                navigate("/admin/ielts")
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
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark " >IELTS</a></li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Update</li>
                </ol>
            </nav>
            <div className="container shadow my-5">

                <section id="ApplyNow">
                    <h1 className="text-apply fw-bolder mb-5 text-center shadow my-5" style={{ background: 'rgb(243, 164, 46)' }}>
                        IELTS</h1>
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

                    <div class="col-md-12">
                        <label htmlFor="des" class="form-label required">
                            Description
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="des" value={data.des}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="des"
                            data={data} />
                    </div>
                    <div className="col-md-12">
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
                        <label htmlFor="content" class="form-label required">
                           Content
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="content" value={data.content}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="content"
                            data={data} />
                    </div>
             
                    <div className="col-md-12">
                        <label htmlFor="testformat" className="form-label required">Test Format</label>
                        <input type="testformat" className="form-control" name="testformat" value={data.testformat}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="testformat"
                            data={data}
                        />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="subtitle1" className="form-label required">Sub-Title</label>
                        <input type="subtitle1" className="form-control" name="subtitle1" value={data.subtitle1}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="subtitle1"
                            data={data}
                        />
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="des1" class="form-label required">
                            Details
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="des1" value={data.des1}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="des1"
                            data={data} />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="subtitle2" className="form-label required">Sub-Title2</label>
                        <input type="subtitle2" className="form-control" name="subtitle2" value={data.subtitle2}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="subtitle2"
                            data={data}
                        />
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="des1" class="form-label required">
                            Details
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="des2" value={data.des2}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="des2"
                            data={data} />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="subtitle3" className="form-label required">Sub-Title3</label>
                        <input type="subtitle3" className="form-control" name="subtitle3" value={data.subtitle3}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="subtitle3"
                            data={data}
                        />
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="des3" class="form-label required">
                            Details
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="des1" value={data.des3}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="des3"
                            data={data} />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="subtitle4" className="form-label required">Sub-Title4</label>
                        <input type="subtitle4" className="form-control" name="subtitle4" value={data.subtitle4}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="subtitle4"
                            data={data}
                        />
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="des4" class="form-label required">
                            Details
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="des4" value={data.des4}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="des4"
                            data={data} />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="subtitle5" className="form-label required">Sub-Title5</label>
                        <input type="subtitle5" className="form-control" name="subtitle1" value={data.subtitle5}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="subtitle5"
                            data={data}
                        />
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="des5" class="form-label required">
                            Details
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="des5" value={data.des5}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="des5"
                            data={data} />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="subtitle6" className="form-label required">Sub-Title6</label>
                        <input type="subtitle6" className="form-control" name="subtitle6" value={data.subtitle6}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="subtitle6"
                            data={data}
                        />
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="des6" class="form-label required">
                            Details
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="des6" value={data.des6}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="des6"
                            data={data} />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="subtitle7" className="form-label required">Sub-Title7</label>
                        <input type="subtitle7" className="form-control" name="subtitle7" value={data.subtitle7}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="subtitle7"
                            data={data}
                        />
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="des7" class="form-label required">
                            Details
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="des7" value={data.des7}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="des7"
                            data={data} />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="subtitle8" className="form-label required">Sub-Title8</label>
                        <input type="subtitle8" className="form-control" name="subtitle8" value={data.subtitle8}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="subtitle8"
                            data={data}
                        />
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="des8" class="form-label required">
                            Details
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="des8" value={data.des8}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="des8"
                            data={data} />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="subtitle9" className="form-label required">Sub-Title9</label>
                        <input type="subtitle9" className="form-control" name="subtitle9" value={data.subtitle9}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="subtitle9"
                            data={data}
                        />
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="des9" class="form-label required">
                            Details
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="des9" value={data.des9}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="des9"
                            data={data} />
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="subtitle10" className="form-label required">Sub-Title10</label>
                        <input type="subtitle10" className="form-control" name="subtitle10" value={data.subtitle10}
                            onChange={handleChange}
                            aria-describedby="emailHelp" />
                        <ErrorText
                            errors={errors}
                            field="subtitle10"
                            data={data}
                        />
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="des10" class="form-label required">
                            Details
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                            name="des10" value={data.des10}
                            onChange={handleChange}>
                        </textarea>
                        <ErrorText
                            errors={errors}
                            field="des10"
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
