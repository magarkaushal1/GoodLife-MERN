import './assets/App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { login, setUser, logout } from './redux/reducer/auth'
import { Navbar } from './components/Navbar'
import Home from './page/Home'
import Japan from './page/study/Japan'
import Foooter from './components/Foooter'
import Australia from './page/study/Australia'
import Uk from './page/study/Uk'
import Canada from './page/study/Canada'
import ContactUs from './page/ContactUs'
import About from './page/About'
import StudyAbroad from './page/StudyAbroad'
import Services from './page/Services'
import Gallery from './page/Gallery'
import Testimonial from './page/Testimonial'
import Signup from './page/Signup'
import Login from './page/Login'
import ApplyNow from './page/ApplyNow'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Sidebar from './components/Admin/Sidebar/Sidebar'
import AdminAbout from './page/Admin/Page/About/About'
import UpdateAbout from './page/Admin/Page/About/update'
import ApplicationForm from './page/Admin/Page/ApplyNow'
import Message from './page/Admin/Page/Message'
import MessageShow from './page/Admin/Page/MessageShow'
// import AdminLogin from './page/Admin/Page/AdminLogin'
import AdminContact from './page/Admin/Page/ContactUs/Contact'
import UpdateContact from './page/Admin/Page/ContactUs/Update'
import AdminTestimonial from './page/Admin/Page/Testimonial/Testimonial'
import CreateTestimonial from './page/Admin/Page/Testimonial/Create'
import UpdateTestimonial from './page/Admin/Page/Testimonial/Update'
import TestimonialShow from './page/Admin/Page/Testimonial/TestimonialShow'
import AdminService from './page/Admin/Page/Services/Service'
import CreateService from './page/Admin/Page/Services/Create'
import UpdateService from './page/Admin/Page/Services/Update'
import AdminStudyInJapan from './page/Admin/Page/study/Japan/studyinjapan'
import UpdateStudyInJapan from './page/Admin/Page/study/Japan/update'
import ShowJapan from './page/Admin/Page/study/Japan/showJapan'
import AdminStudyInCanada from './page/Admin/Page/study/Canada/studyincanada'
import UpdateStudyInCanada from './page/Admin/Page/study/Canada/update'
import ShowCanada from './page/Admin/Page/study/Canada/showCanada'
import AdminStudyInAustralia from './page/Admin/Page/study/Australia/studyinaustralia'
import UpdateStudyInAustralia from './page/Admin/Page/study/Australia/update'
import ShowAustralia from './page/Admin/Page/study/Australia/showAustralia'
import AdminStudyInUk from './page/Admin/Page/study/Uk/studyinuk'
import UpdateStudyInUk from './page/Admin/Page/study/Uk/update'
import ShowUk from './page/Admin/Page/study/Uk/showUk'
import ApplyShow from './page/Admin/Page/ApplyShow'
import AdminIELTS from './page/Admin/Page/Course/IELTS/ielts'
import ShowIELTS from './page/Admin/Page/Course/IELTS/showIELTS'
import UpdateIELTS from './page/Admin/Page/Course/IELTS/update'
import AdminPTE from './page/Admin/Page/Course/PTE/pte'
import ShowPTE from './page/Admin/Page/Course/PTE/showIELTS'
import UpdatePTE from './page/Admin/Page/Course/PTE/update'
import IELTS from './page/Course/IELTS'
import PTE from './page/Course/PTE'
import Page404 from './components/Page404'
import TOEFL from './page/Course/TOEFL'
import SAT from './page/Course/SAT'
import GMAT from './page/Course/GMAT'
import GRE from './page/Course/GRE'
import AdminTOEFL from './page/Admin/Page/Course/TOEFL/toefl'
import ShowTOEFL from './page/Admin/Page/Course/TOEFL/showTOEFL'
import UpdateTOEFL from './page/Admin/Page/Course/TOEFL/update'
import AdminSAT from './page/Admin/Page/Course/SAT/sat'
import ShowSAT from './page/Admin/Page/Course/SAT/showSAT'
import UpdateSAT from './page/Admin/Page/Course/SAT/update'
import AdminGRE from './page/Admin/Page/Course/GRE/gre'
import ShowGRE from './page/Admin/Page/Course/GRE/showGRE'
import UpdateGRE from './page/Admin/Page/Course/GRE/update'
import AdminGMAT from './page/Admin/Page/Course/GMAT/gmat'
import ShowGMAT from './page/Admin/Page/Course/GMAT/showGMAT'
import UpdateGMAT from './page/Admin/Page/Course/GMAT/update'
import TestPreparation from './page/TestPreparation'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './page/Admin/Dashboard'
import Dashboard from './page/Dashboard'


function App() {
  const isAdmin = localStorage.getItem('role') === 'Admin';
  const [userFetched, setUserFetched] = useState(false);
  const dispatch = useDispatch();
  const is_logged = useSelector((state) => state.auth.is_logged_in)
  const user = useSelector((state) => state.auth.user.role)


  const logout = () => {
    localStorage.clear("access_token")
    dispatch(logout())
    Navigate('/login')
  }

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/getallusers`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => {
          dispatch(login())
          dispatch(setUser(res.data));
          setUserFetched(true);
        })
        .catch((err) => {
          setUserFetched(true);
        });
    } else {
      setUserFetched(true);
    }
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (localStorage.getItem('access_token')) {
  //         const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/getallusers`, {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem('access_token')}`
  //           }
  //         });
  //         dispatch(login());
  //         dispatch(setUser(response.data));
  //       }
  //     } catch (err) {
  //       dispatch(logout());
  //     } finally {
  //       setUserFetched(true);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);


  return (
    <>
      <>
        <div className='container'>
          {
            is_logged && user !== "Admin" ? (
              <>
                <Navbar />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/applynow' element={<ApplyNow />} />
                  <Route path='/studyinjapan' element={<Japan />} />
                  <Route path='/studyinaustralia' element={<Australia />} />
                  <Route path='/studyinuk' element={<Uk />} />
                  <Route path='/studyincanada' element={<Canada />} />
                  <Route path='/contactus' element={<ContactUs />} />
                  <Route path='/aboutus' element={<About />} />
                  <Route path='/studyabroad' element={<StudyAbroad />} />
                  <Route path='/services' element={<Services />} />
                  <Route path='/gallery' element={<Gallery />} />
                  <Route path='/testimonial' element={<Testimonial />} />
                  <Route path='/testpreparation' element={<TestPreparation />} />
                  <Route path='/ielts' element={<IELTS />} />
                  <Route path='/pte' element={<PTE />} />
                  <Route path='/toefl' element={<TOEFL />} />
                  <Route path='/sat' element={<SAT />} />
                  <Route path='/gmat' element={<GMAT />} />
                  <Route path='/gre' element={<GRE />} />

                  <Route path='*' element={<Page404 />} />
                  <Route path='/404' element={<Page404 />} />


                </Routes>

              </>
            ) : (
              <>
              <Sidebar />
                <Routes>
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/admin/about' element={<AdminAbout />} />
                  <Route path='/admin/about/update/:id' element={<UpdateAbout />} />
                  <Route path='/admin/message' element={<Message />} />
                  <Route path='/admin/message/show/:id' element={<MessageShow />} />
                  <Route path='/admin/contact' element={<AdminContact />} />
                  <Route path='/admin/contact/update/:id' element={<UpdateContact />} />
                  <Route path='/admin/testimonial' element={<AdminTestimonial />} />
                  <Route path='/admin/testimonial/create' element={<CreateTestimonial />} />
                  <Route path='/admin/testimonial/update/:id' element={<UpdateTestimonial />} />
                  <Route path='/admin/testimonial/show/:id' element={<TestimonialShow />} />
                  <Route path='/admin/service' element={<AdminService />} />
                  <Route path='/admin/service/create' element={<CreateService />} />
                  <Route path='/admin/service/update/:id' element={<UpdateService />} />
                  <Route path='/admin/studyinjapan' element={<AdminStudyInJapan />} />
                  <Route path='/admin/studyinjapan/update/:id' element={<UpdateStudyInJapan />} />
                  <Route path='/admin/studyinjapan/show/:id' element={<ShowJapan />} />
                  <Route path='/admin/studyincanada' element={<AdminStudyInCanada />} />
                  <Route path='/admin/studyincanada/update/:id' element={<UpdateStudyInCanada />} />
                  <Route path='/admin/studyincanada/show/:id' element={<ShowCanada />} />
                  <Route path='/admin/studyinaustralia' element={<AdminStudyInAustralia />} />
                  <Route path='/admin/studyinaustralia/update/:id' element={<UpdateStudyInAustralia />} />
                  <Route path='/admin/studyinaustralia/show/:id' element={<ShowAustralia />} />
                  <Route path='/admin/studyinuk' element={<AdminStudyInUk />} />
                  <Route path='/admin/studyinuk/update/:id' element={<UpdateStudyInUk />} />
                  <Route path='/admin/studyinuk/show/:id' element={<ShowUk />} />
                  <Route path='/admin/applyforms' element={<ApplicationForm />} />
                  <Route path='/admin/applyforms/show/:id' element={<ApplyShow />} />
                  <Route path='/admin/ielts' element={<AdminIELTS />} />
                  <Route path='/admin/ielts/show/:id' element={<ShowIELTS />} />
                  <Route path='/admin/ielts/update/:id' element={<UpdateIELTS />} />
                  <Route path='/admin/pte' element={<AdminPTE />} />
                  <Route path='/admin/pte/show/:id' element={<ShowPTE />} />
                  <Route path='/admin/pte/update/:id' element={<UpdatePTE />} />
                  <Route path='/admin/toefl' element={<AdminTOEFL />} />
                  <Route path='/admin/toefl/show/:id' element={<ShowTOEFL />} />
                  <Route path='/admin/toefl/update/:id' element={<UpdateTOEFL />} />
                  <Route path='/admin/sat' element={<AdminSAT />} />
                  <Route path='/admin/sat/show/:id' element={<ShowSAT />} />
                  <Route path='/admin/sat/update/:id' element={<UpdateSAT />} />
                  <Route path='/admin/gre' element={<AdminGRE />} />
                  <Route path='/admin/gre/show/:id' element={<ShowGRE />} />
                  <Route path='/admin/gre/update/:id' element={<UpdateGRE />} />
                  <Route path='/admin/gmat' element={<AdminGMAT />} />
                  <Route path='/admin/gmat/show/:id' element={<ShowGMAT />} />
                  <Route path='/admin/gmat/update/:id' element={<UpdateGMAT />} />
                </Routes>
              </>
            )

          }


          <Foooter />
        </div>
      </>

    </>
  )
}


export default App
