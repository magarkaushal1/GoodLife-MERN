import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

import './gre.css';

export default function GRE() {
  const { id } = useParams();
  const [gre, setGRE] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/gre`)
      .then((response) => {
        setGRE(response.data[0].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='container'>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5'>
          <li className='breadcrumb-item text-sm'>
            <a className='opacity-5 text-dark'>Pages</a>
          </li>
          <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
            GRE
          </li>
        </ol>
      </nav>
      <table className='table caption-top'>
        <thead>
          <caption>Components</caption>
          <tr>
            <th scope='col' className='small-th'>Images</th>
            <th scope='col' className='small-th'>Title</th>
            <th scope='col' className='small-th'>Description</th>
            <th scope='col' className='small-th'>Content</th>
            <th scope='col' className='small-th'>Verbal Resoning</th>
            <th scope='col' className='small-th'>Analytical W-Assessment</th>
            <th scope='col' className='small-th'>Data InterPretation-Q</th>
            <th scope='col' className='small-th'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {gre.map((el, index) => (
            <tr key={el._id}>
              <td className='img-te'>
                <img src={`http://localhost:8000/${el.images[0]}`} alt='about' className='admin-about' />
              </td>
              <td className='small-td'>{el.title.slice(0, 100)}</td>
              <td className='small-td'>{el.des.slice(0, 100)}...</td>
              <td className='small-td'>{el.content.slice(0, 100)}...</td>
              <td className='small-td'>{el.des1.slice(0, 100)}...</td>
              <td className='small-td'>{el.des2.slice(0, 100)}...</td>
              <td className='small-td'>{el.des3.slice(0, 100)}...</td>
              <td className='small-td'>{el.des4.slice(0, 100)}...</td>
              <td>
                <div className='button' style={{ display: 'flex' }}>
                  <Link to={`/admin/gre/show/${el._id}`}>
                    <button
                      className='btn btn-primary text-white'
                      style={{ padding: '5px', margin: '5px', background: 'green' }}
                      type='submit'
                    >
                      <VisibilityIcon />
                    </button>
                  </Link>

                  <Link to={`/admin/gre/update/${el._id}`}>
                    <button className='btn btn-primary text-white' style={{ padding: '5px', margin: '5px' }} type='submit'>
                      Update
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
