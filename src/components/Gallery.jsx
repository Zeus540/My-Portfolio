import React, { Component } from 'react'
import styled from 'styled-components'
import css from '../images/css.png'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


const Container = styled.div`
width:100%;
justify-content:center;
align-items:center;
padding: 0% 0% 3% 0%;
margin:0 auto;
height:100%;
background:var(--secondary-color);


`
const Heading = styled.h2`
color: var(--primary-color);
margin: 0px;
text-align: center;
`
const ContainerInner = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-bottom:1%;
@media(min-width:768px){
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  margin-bottom:1%;
}
`

const Image = styled.img`
height:150px;
width:150px;
@media(max-width:425px){
  height:50px;
  width:50px;
}
@media(max-width:1024px){
  height:80px;
  width:80px;
}
`

const Text = styled.p`
padding: 0px;
color:aliceblue;
margin:0 auto;
text-align:center;
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
    375: { items: 2 },
    425: { items: 3 },
    768: { items: 4 },
    1024: { items: 6 },
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
      
      <div className="row">
        <Container id="Hobbies">
          <Heading className="headings">Our Clients</Heading>
      
      
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
                  <img src={css} onDragStart={handleOnDragStart} className="-d-b" />
                  <img src={css} onDragStart={handleOnDragStart} className="-d-b" />
                  <img src={css} onDragStart={handleOnDragStart} className="-d-b" />
                  <img src={css} onDragStart={handleOnDragStart} className="-d-b" />
                  <img src={css} onDragStart={handleOnDragStart} className="-d-b" />
                  <img src={css} onDragStart={handleOnDragStart} className="-d-b" />
                </AliceCarousel>      
                </Box>
                
        
        </Container>
      </div>
    );
  }
}
export default Gallery;