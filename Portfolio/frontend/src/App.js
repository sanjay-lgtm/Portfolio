import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Project from './Component/Project/Project';
import Contect from './Component/Contact/Contect';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, loadUser } from './actions/user';
import Login from './Component/Login/Login'
import AdminPanel from './Component/Admin/AdminPanel';
import Timeline from './Component/Admin/Timeline';
import Youtube from './Component/Admin/Youtube';



function App() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const { loading } = useSelector((state) => state.user)
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch])
  console.log("isAuthenticated", isAuthenticated)
  return (

    <>


      <Router>

        {loading ? <div>Loading</div> :
          (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
               
                <Route path="/contact" element={<Contect />} />
                {isAuthenticated ? <Route path="/Account" element={<AdminPanel />} /> :
                  <Route path="/Account" element={<Login />} />}

                {isAuthenticated ? <Route path="/admin/timeline" element={<Timeline />} /> :
                  <Route path="/Account" element={<Login />} />}

                {isAuthenticated ? <Route path="/admin/youtube" element={<Youtube />} /> :
                  <Route path="/Account" element={<Login />} />}

                {isAuthenticated ? <Route path="/admin/project" element={<Project />} /> :
                  <Route path="/Account" element={<Login />} />}
              </Routes>
              <Footer />
            </>
          )}
      </Router>
    </>
  );
}

export default App;
