import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
background: var(--Section-color);
text-align: center;
z-index:1;
position:relative;
`

const Heading = styled.h2`
color: white;
margin: 0px;
text-align: center;
`

const Para = styled.p`
max-width:50%
color:white
text-align:justify
display:block
margin:0 auto;
padding-bottom:20px;
@media(max-width:768px){
    max-width:80%
}
`

class TextBanner extends Component {
    render(){ 
        return ( 
            <Container>
                <Heading className="headings">{this.props.heading}</Heading>
                <Para>{this.props.paragraph1}</Para>
                <br/>
                <Para>{this.props.paragraph2}</Para>
            </Container>
        );
    }
}
 
export default TextBanner;