import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./testimonial.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function () {
    const { id } = useParams()
    const [testimonial, setTestimonial] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/testimonials`)
            .then(response => {
                setTestimonial(response.data[0].data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    const deleteTestimonial = async (id) => {
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/testimonials/${id}`);
        // After deletion, refresh the page by calling the function that fetches data again.
        fetchData();
    };

    const fetchData = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/testimonials`)
            .then((response) => {
                setTestimonial(response.data[0].data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const truncateTestimonial = (testimonial, maxLength) => {
        if (testimonial.length > maxLength) {
            return testimonial.substring(0, maxLength) + '...';
        }
        return testimonial;
    };
    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark">Pages</a></li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Testimonials Page</li>

                </ol>
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <div className="button">
                        <Link to="/admin/testimonial/create">
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
                        <th scope="col">Full Name</th>
                        <th scope="col">Quote</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                {
                    testimonial.map((el, index) => {
                        return <tbody>
                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td className='img-te'>
                                    <img src={`http://localhost:8000/${el.images[0]}`} key="img_id" alt="about" className="admin-about" />
                                </td>
                                <td>{el.name}</td>
                                
                                <td>{truncateTestimonial(el.quote, 50)}</td>



                                <td>
                                    <div className='button'>
                                        <Link to={`/admin/testimonial/show/${el._id}`}>
                                            <button
                                                className='btn btn-primary text-white'
                                                style={{ padding: '5px', marginRight: '5px' }}
                                                type='submit'
                                            >
                                                <VisibilityIcon />
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="button">
                                        <Link to={`/admin/testimonial/update/${el._id}`}>
                                            <button className="btn text-white" style={{ padding: "5px", background: "green", margin: "5px" }} type="submit">{<EditIcon />}</button>
                                        </Link>
                                    </div>
                                    <div className='button'>
                                        <Link onClick={() => deleteTestimonial(el._id)}>
                                            <button
                                                className='btn btn-danger text-white'
                                                style={{ padding: '5px', background: '#f93535' }}
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
