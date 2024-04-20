import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Home from './pages/Home';
import Projects from './pages/Projects'; // Make sure this is correctly imported
import ContactPage from './pages/Contact';
import Profilepic from './Components/Profilepic';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Services from './Components/Services';
import Langs from './Components/Langs';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
// import Mailto from './Components/mailto';

import ProgressBar from './Components/ProgressBar';

function App() {
  return (
    // <Mailto />
    <BrowserRouter>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={
          <div className='w-screen'>
            <Header />
            <SideBar props="HOMEPAGE" />

            <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-2 mt-[90px]">
                <Introduction />
                <About />
                <Services />
                <Langs />
                <Skills />
                <Contact />
                <Footer />
              </div>
              <div className="hidden md:block">
                <ProgressBar />
                <Profilepic />
              </div>
            </div>
          </div>
        }>
          <Route index element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
