import React, { Component,Fragment } from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


const Container = styled.div`
width:100%;
justify-content:center;
align-items:center;
padding: 0% 0% 3% 0%;
margin:0 auto;
height:100%;
background:var(--primary-color);


`
const Heading = styled.h2`
color: var(--secondary-color);
margin: 0px;
text-align: center;
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

class Testimonials extends Component {
  state = {
    galleryItems: [1, 2, 3].map((i) => <h2 key={i}>{i}</h2>),
  }
 
  responsive = {
    0: { items: 1 },
  
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
          <Heading className="headings">Client Testimonials</Heading>
      
      
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
                  <Fragment>
                  <Text>My new site is so much faster and easier to work with than my old site.<br/>  It used to take me an hour or more to update a page</Text>
                  <Heading>Kamey</Heading>
                  </Fragment>
                  <Fragment>
                  <Text>Happy handwritten thank you notes… <br/> I just wanted to let you know that it's been great working with you.</Text>
                  <Heading>Shanice</Heading>
                  </Fragment>
                  <Fragment>
                  <Text>My new site is so much faster and easier to work with than my old site.<br/> It used to take me an hour or more to update a page</Text>
                  <Heading>Anushka</Heading>
                  </Fragment>
                  <Fragment>
                  <Text>Happy handwritten thank you notes… <br/> I just wanted to let you know that it's been great working with you.</Text>
                  <Heading>Shane</Heading>
                  </Fragment>
                </AliceCarousel>      
                </Box>
                
        
        </Container>
      </div>
    );
  }
}
export default Testimonials;