import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Jumbotron from './components/Jumbotron.jsx'
import TextBanner from './components/TextBanner.jsx'
import Parallax from './components/Parallax.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'


function App() {

  const [State1] = useState([
    {key:"",
    heading:"About Us",
    paragraph1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?",

}
  ]);

  const [State2] = useState([
    {key:"",
    heading:"Awards",
    paragraph1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?",

}
  ]);
   
  return (
    <div className="App">
      <Nav id="Nav"/>

      <Jumbotron text='OCTOPUS _' text2='Dev House'  />

      {State1.map((data, index) => (
            <TextBanner key={index}  heading={data.heading} paragraph1={data.paragraph1} />))}

      <Parallax heading='Skills'/>
      {State2.map((data, index) => (
            <TextBanner key={index}  heading={data.heading} paragraph1={data.paragraph1} />))}
      <Gallery/>
    
            <Testimonials/>
           <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
