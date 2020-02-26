import React, {Component,Fragment} from 'react';
import styled from 'styled-components';
import Un from '../images/un.jpg';
import Arrow from '../images/arrow.png';

import { Link } from "react-scroll";

const Container = styled.div`
width: 100%;
min-height:100%;
background-image:url(${Un});
background-size:100% 100%;
position: relative;

`

const Test = styled.div`

justify-content: center;
margin:5% 0% 0% 0
width:100%;
`

const NavArrow = styled.img`
width:50px
transition: 100ms;
display: block;
margin: 0 auto;
&:hover{
  transform: translateY(20px);
}
`

const Heading1 = styled.h2`
color:var(--primary-color);
text-align:center;
margin-top:4%
margin-bottom: 4%;
text-transform:uppercase;
@media(min-width:1024px){
  font-size:5vw;
}
`
const Heading = styled.h2`
color:aliceblue;
text-align:center;
margin-top:-2%
margin-bottom: 4%;
@media(min-width:1024px){
  font-size:3vw;
}
`

const Heading2 = styled.p`
color:white;
text-align:center;
letter-spacing:1px;
`

const InnerContainer = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
height: 100%;
background:#00000085;
padding-top: 10%;
padding-bottom:10%;
@media(max-width:425px){
  padding-top: 20%;
}
`

const Btn = styled.button`
padding:13px 30px;
background:var(--primary-color);
color:var(--secondary-color);;
font-weight:bold;
font-size:12px;
text-transform:uppercase
border:none;
margin:5px;
min-width: 144px;
@media(max-width:425px){
  min-width: 116px;
  padding:10px 10px
}
`

const BtnGroup = styled.div`
display: flex;
justify-content: center;
width:100%;
margin-top:5%
@media(max-width:425px){
  flex-direction:column
  width:100%;
  align-items: center;
}
` 



class Jumbotron extends Component {
  render() { 
    return ( 
        <Container id="Nav">
           <InnerContainer >
             <Fragment>
           <div><Heading1>{this.props.text}</Heading1></div>
           <div><Heading>{this.props.text2}</Heading></div>
            <div><Heading2>{this.props.text3}</Heading2></div>
           
            <BtnGroup>
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration= {500}>
                <Btn>Our Services</Btn></Link>
              <Link
              activeClass="active"
              to="ContactMe"
              spy={true}
              smooth={true}
              offset={-100}
              duration= {500}>
                <Btn>GET A QUOTE</Btn></Link>
            </BtnGroup>
           
            </Fragment>
           </InnerContainer >
        </Container> 
    );
  }
}
 
export default Jumbotron;


