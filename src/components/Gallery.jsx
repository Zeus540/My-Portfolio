import React, { Component,Fragment } from 'react'
import styled from 'styled-components'
import css from '../images/css.png'
import boot from '../images/boots.png'
import html from '../images/html.png'
import git from '../images/github.png'
import java from '../images/javascript.png'
import mail from '../images/mailchimp.png'
import npm from '../images/npm.png'
import word from '../images/wordpress.png'
import react from '../images/react.png'
import sass from '../images/sass.png'
import bit from '../images/bitbucket.png'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


const Container = styled.div`
width:100%;
justify-content:center;
align-items:center;
padding: 0% 0% 3% 0%;
margin:0 auto;
height:100%;
background: var(--Section-color);


`
const Heading = styled.h2`
color: var(--secondary-color);
margin: 0px;
text-align: center;
`
const Text = styled.p`
margin: 0px;
text-align: center;
color: aliceblue;
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
    0: { items: 3 },
    375: { items: 3 },
    425: { items: 5 },
    768: { items: 6 },
    1024: { items: 8 },
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
          <Heading className="headings">My Skills</Heading>
      
      
                <Box>
                <AliceCarousel 
                
                items={this.state.galleryItems}
                responsive={this.responsive}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                autoPlay={true}
                fadeOutAnimation={true}
                disableAutoPlayOnAction={false}
                buttonsDisabled={false}>
                  <Fragment>
                  <img src={css}   className="-d-b" />
                 <Text>Css3</Text>
                  </Fragment>
                  <Fragment>
                  <img src={boot}  className="-d-b" />
                 <Text>BootStrap</Text>
                  </Fragment>
                  <Fragment>
                  <img src={git}  className="-d-b" />
                 <Text>Git</Text>
                  </Fragment>
                  <Fragment>
                  <img src={html}  className="-d-b" />
                 <Text>Html5</Text>
                  </Fragment>
                  <Fragment>
                  <img src={java}  className="-d-b" />
                 <Text>JavaScript</Text>
                  </Fragment>
                  <Fragment>
                  <img src={mail}  className="-d-b" />
                 <Text>MailChimp</Text>
                  </Fragment>
                  <Fragment>
                  <img src={npm}  className="-d-b" />
                 <Text>Npm</Text>
                  </Fragment>
                  <Fragment>
                  <img src={word}  className="-d-b" />
                 <Text>WordPress</Text>
                  </Fragment>
                  <Fragment>
                  <img src={react}  className="-d-b" />
                 <Text>React.js</Text>
                  </Fragment>
                  <Fragment>
                  <img src={bit}  className="-d-b" />
                 <Text>BitBucket</Text>
                  </Fragment>
                  <Fragment>
                  <img src={sass} className="-d-b" />
                 <Text>Sass</Text>
                  </Fragment>
                </AliceCarousel>      
                </Box>
                
        
        </Container>
      </div>
    );
  }
}
export default Gallery;