import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./update.css"

export default function () {

    const [about, setAbout] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/abouts`)
            .then(response => {
                setAbout(response.data[0].data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark">Pages</a></li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">About Us Page</li>
                </ol>
            </nav>
            <table class="table caption-top">
                <thead>
                    <caption>Components</caption>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Vision</th>
                        <th scope="col">Mission</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    about.map((el, index) => {
                        return <tbody>
                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td className='box-img'>
                                    <img src={`http://localhost:8000/${el.images[0]}`} key="img_id" alt="about" className="admin-about" />
                                </td>
                                <td>{el.title}</td>
                                <td>{el.description}</td>
                                <td>{el.vision}</td>
                                <td>{el.mission}</td>

                                <td><div className="button">
                                    <Link to={`/admin/about/update/${el._id}`}>
                                        <button className="btn btn-primary text-white" type="submit">Update</button>
                                    </Link>
                                </div>
                                </td>


                            </tr>

                        </tbody>
                    })
                }

            </table>
        </div>
    )
}
