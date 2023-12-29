import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./service.css"

export default function () {

    const { id } = useParams()

    const [service, setService] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/services`)
            .then(response => {
                setService(response.data[0].data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const deleteService = async (id) => {
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/services/${id}`);
        fetchData();
    };

    const fetchData = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/services`)
            .then(response => {
                setService(response.data[0].data)
            })
            .catch(err => {
                console.log(err)
            })

    };
    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark">Pages</a></li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Services Page</li>

                </ol>
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <div className="button">
                        <Link to="/admin/service/create">
                            <button className="btn btn-outline-primary text-white" type="submit">Add </button>
                        </Link>
                    </div>
                </ol>
            </nav>
            <table className="table caption-top">
                <thead>
                    <caption>Components
                    </caption>

                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Images</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                {
                    service.map((el, index) => {
                        return <tbody>
                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td className='img-te'>
                                    <img src={`http://localhost:8000/${el.images[0]}`} key="img_id" alt="about" className="admin-about" />
                                </td>
                                <td>{el.coreTitle}</td>
                                <td>{el.description}</td>
                                <td>
                                    <div className='button'>
                                        <Link to={`/admin/service/update/${el._id}`}>
                                            <button className="btn text-white" style={{ padding: "5px", background: "green", margin: "5px" }} type="submit">
                                                {<EditIcon />}</button>
                                        </Link>
                                    </div>
                                    <div className='button'>
                                        <Link onClick={() => deleteService(el._id)}>
                                            <button
                                                className='btn btn-danger text-white'
                                                style={{ padding: '5px', margin: "5px", background: '#f93535' }}
                                                type='submit'
                                            >
                                                <DeleteIcon />
                                            </button>
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
