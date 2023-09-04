import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Favourites from './Pages/Favourites/Favourites';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer';
import Recipe from "./Pages/Recipe/Recipe";
import Login from "./Pages/Login/Login";

function App() {
  // Login Token
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Now change
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);


  const [shouldClearProfile, setShouldClearProfile] = useState(false);

  const handleLogout = () => {
    // Clear the token and set the logged-in status to false
    // localStorage.removeItem('token');
    // localStorage.setItem('notice', 'Logout');       //
    setIsLoggedIn(false);
    setShouldClearProfile(true);
  };

  //Color changing effect
  const [selectedColor, setSelectedColor] = useState(''); // Default background color
  const [selectcol, setSelectcol] = useState('#65C382'); // Default color

  useEffect(() => {
    // Retrieve the color from local storage when the component mounts
    const storedColor = localStorage.getItem("selectedColor");
    const storedCol = localStorage.getItem("selectcol");
    if (storedColor && storedCol) {
      setSelectedColor(storedColor);
      setSelectcol(storedCol);
    }
  }, []);

  //
  useEffect(() => {
    // Clear the token from local storage on logout
    if (!isLoggedIn) {
      localStorage.removeItem('token');
      localStorage.setItem('notice', 'Logout');
    }
  }, [isLoggedIn]);

  const handleColorChange = (color, col) => {
    setSelectedColor(color);
    setSelectcol(col);

    // Store the color in local storage
    localStorage.setItem("selectedColor", color);
    localStorage.setItem("selectcol", col);
  };


  return (

    <div className='App' style={{ background: selectedColor, color: selectcol }}>
      <Router>

        {/* Passing props for Changing button text */}
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} handleColorChange={handleColorChange} />

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
          <Route path="/profile" element={<Profile shouldClearProfile={shouldClearProfile} setShouldClearProfile={setShouldClearProfile} />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setShouldClearProfile={setShouldClearProfile} />} />
          <Route path='/items/:id' element={<Recipe />} />

        </Routes>
        <Footer />
      </Router>
    </div>
    // </div >
  );
}

export default App;  