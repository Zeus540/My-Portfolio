import React, { Component,Fragment } from 'react'
import styled from 'styled-components'
import Parallax from './Parallax.jsx'
import Parallax2 from './Parallax2.jsx' 
import Un from '../images/un.jpg';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


const Container = styled.div`
width:100%;
justify-content:center;
align-items:center;
margin:0 auto;
height:100%;
background:var(--secondary-color);
background-attachment:fixed;
background-image:url(${Un});
background-size:100% 100%;


`
const Overlay = styled.div`
background-color:#1716168c;
position:relative;
margin-top:0%;
left:0%;
top:-0px;
width:100%;
height:100%;
padding: 0% 0% 3% 0%;
@media (max-width:425px){
  height:100%;
}
`

const Heading = styled.h2`
color: var(--secondary-color);
margin: 0px;
text-align: center;
`


const Box = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
width:100%;
height:100%;
transition: 200ms ease-in;
@media(max-width:1024px){
  margin:0px;
}
`

class Gallery extends Component {
  state = {
    galleryItems: [1, 2, 3].map((i) => <h2 key={i}>{i}</h2>),
  }
 
  responsive = {
    0: { items: 1 },
    375: { items: 1 },
    425: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
  }
 
  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }
 
  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }
  render() {
    

    const handleOnDragStart = (e) => e.preventDefault()

    return (
      
     
        <Container id="Hobbies">
          <Overlay>
          <Heading className="headings">Projects</Heading>
      
      
                <Box>
                <AliceCarousel 
                mouseTrackingEnabled 
                items={this.state.galleryItems}
                responsive={this.responsive}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                autoPlay={true}
                fadeOutAnimation={true}
                mouseTrackingEnabled={true}
                disableAutoPlayOnAction={true}
                onSlideChange={this.onSlideChange}
                onSlideChanged={this.onSlideChanged}
                buttonsDisabled={true}>
                
            <Parallax/>
            <Parallax2/>
                 
                </AliceCarousel>      
                </Box>
                
                </Overlay>
        </Container>
     
    );
  }
}
export default Gallery;