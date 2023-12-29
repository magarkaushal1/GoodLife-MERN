import React, { useEffect, useState } from 'react';
// import './message.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Message() {
  let { id } = useParams();
  const [applications, setApplication] = useState([]);
  const [search_term, setSearchTerm] = useState('');
  const [metadata, setMetaData] = useState({
    total: 0,
    page: 1,
    per_page: 50,
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/messages?search_term=${search_term}`)
      .then((response) => {
        setApplication(response.data[0].data);
        let { total, per_page, page } = response.data[0].metadata;
        setMetaData(response.data[0].metadata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [metadata.page, search_term]);

  const deleteMessage = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/messages/${id}`);
    // After deletion, refresh the page by calling the function that fetches data again.
    fetchData();
  };

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/messages?search_term=${search_term}`)
      .then((response) => {
        setApplication(response.data[0].data);
        let { total, per_page, page } = response.data[0].metadata;
        setMetaData(response.data[0].metadata);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const truncateMessage = (message, maxLength) => {
    if (message.length > maxLength) {
      return message.substring(0, maxLength) + '...';
    }
    return message;
  };
  return (
    <div className='container'>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5'>
          <li className='breadcrumb-item text-sm'>
            <a className='opacity-5 text-dark'>
              Messages
            </a>
          </li>
          <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
            users
          </li>
        </ol>
      </nav>
      <div className='row g-3'>
        <div className='col-md-2 input-group'>
          <input
            className='form-control me-2'
            type='search'
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeholder='Search'
            aria-label='Search'
          />
          <button className='btn btn-outline-success' type='submit'>
            Search
          </button>
        </div>
      </div>
      <table className='table caption-top'>
        <thead>
          <tr>
            <th scope='col'>S.N</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Address</th>
            <th scope='col'>Contact No</th>
            <th scope='col'>email</th>
            <th scope='col'>Messages</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        {applications.map((el, index) => {
          return (
            <tbody key={el._id}>
              <tr>
                <td scope='row'>{index + 1}</td>
                <td>{el.first_name}</td>
                <td>{el.last_name}</td>
                <td>{el.address}</td>
                <td>{el.phone}</td>
                <td>{el.email}</td>
                <td>{truncateMessage(el.message, 50)}</td>
                <td>
                <div className='button'>
                    <Link to={`/admin/message/show/${el._id}`}>
                    <button
                        className='btn btn-primary text-white'
                        style={{ padding: '5px',marginRight:'5px'}}
                        type='submit'
                      >
                        <VisibilityIcon/>
                        </button>
                    </Link>
                    </div>
                  <div className='button'>
                    <Link onClick={() => deleteMessage(el._id)}>
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
          );
        })}
      </table>
    </div>
  );
}
