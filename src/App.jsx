

import React, { useState } from 'react' 
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import Card from "./components/Card"
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from "./components/Footer"
import EnrollmentForm from './components/EnrollmentForm'; 
import Slider from './components/Slider';

const App = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const appStyle = {
    backgroundColor: '#e2eafc',
    minHeight: '100vh',        
  };

  return (
    <div style={appStyle}> 
      <NavBar />
      <Hero  onJoinClick={handleOpenModal}   />
      <Card />
      <Blog />
      <Slider />
      <Gallery />
      <Contact />
      <Footer />
      {isModalOpen && (
        <EnrollmentForm 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  )
}

export default App