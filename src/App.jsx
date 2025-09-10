import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/navbar/Navbar';
import Hero from './component/Hero/Hero';
import Program from './component/program/Program';
import Title from './component/Title/Title';
import About from './component/about/About';
import Campus from './component/campus/Campus';
import Testimonials from './component/testimonials/Testimonials'; 
import Contact from './component/Contact/Contact';
import Footer from './component/footer/Footer';
import Videoplay from './component/videoplay/Videoplay';


function App() {
  let [ playState,setPlayState]=useState( false);

  return (
    <>
      <div>
        <Navbar/>
         <Hero/>
         <Title subTitle='Our Program' title='What We Offer'/>
         <Program/>
         <About setPlayState={setPlayState}/>
         <Title subTitle='Gallery' title='Campus Photos'/>
         <Campus/>
         <Title subTitle='TESTIMONIALS' title='What Student Says
         '/>
         <Testimonials/>
         <Title subTitle='Contact Us' title='Get in Touch
         '/>
         <Contact/>
         <Footer/>
         <Videoplay playState={playState} setPlayState={setPlayState}/>
        </div>
    </>
  )
}

export default App
