import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import useAuthContext from './hooks/useAuthContext.js'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.js'
import OurTeam from './pages/OurTeam/OurTeam.js'
import Contact from './pages/Contact/Contact.js'
import About from './pages/About/About.js'
import Register from './pages/User/Register.js'
import Login from './pages/User/Login.js'
import Explore from './pages/Explore/Explore.js'
import Profile from './pages/Profile/Profile.js'
import AddPost from './components/Post/AddPost.js'
import ViewPost from './components/Post/ViewPost.js'
import EditPost from './components/Post/EditPost.js'
import NotFound from './components/NotFound.js'

function App() {
  const { userData } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route
            path='/profile'
            element={userData ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path='/add-post'
            element={userData ? <AddPost /> : <Navigate to="/login" />}
          />
          <Route
            path='/edit-post/:id'
            element={userData ? <EditPost /> : <Navigate to="/login" />}
          />
          <Route path='/our-team' element={<OurTeam />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/explore/:id' element={<ViewPost />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/login'
            element={userData ? <Navigate to="/profile" /> : <Login />}
          />
          <Route
            path='/register'
            element={userData ? <Navigate to="/profile" /> : <Register />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
