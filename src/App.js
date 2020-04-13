import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Jumbotron from './components/Jumbotron.jsx'
import TextBanner from './components/TextBanner.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Gallery3 from './components/Gallery3.jsx'
import Testimonials from './components/Testimonials.jsx'


function App() {

  const [State1] = useState([
    {key:"",
    heading:"Have you heard about the Bird ?",
    sub:"Have you heard about the Bird ?",
    paragraph1:"I have always had a passion for learning and trying new things. I would like to consider myself a hardworking and reliable person that doesn’t give up until I find a solution to the problem like applying new methods and ideas to traditional problem solving I like working on new and exciting projects that allow me to express my creativity and opinions. I also consider myself a team worker and able to cope with a deadline and a high pressure environment",

}
  ]);

  
   
  return (
    <div className="App">
      <Nav id="Nav"/>

      <Jumbotron text='Zaheer Roberts' text2='Front-End Developer'  />

      {State1.map((data, index) => (
            <TextBanner key={index}  heading={data.heading} sub={data.sub} paragraph1={data.paragraph1} />))}       
 <Gallery/>

 <Gallery3/>
 <Testimonials/>
           <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
