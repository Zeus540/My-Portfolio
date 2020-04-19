import React, {Component,Fragment} from 'react';
import styled from 'styled-components';
import Color from '../images/color.jpg'
import Footer1 from './Footer1'
import { Link } from "react-scroll";

const Container = styled.div`
width: 100%;
min-height:100%;
background-image:url(${Color});
background-size:100% 100%;
position: relative;
@media(min-width:1024px){
  background-attachment: fixed;
}
`


const Heading1 = styled.h2`
color:var(--secondary-color);
text-align:center;
margin-top:-10%
margin-bottom: 4%;
width: 100%;
z-index:0;
text-transform:uppercase;
@media(max-width:425px){
  font-size:9vw;
  padding-bottom: 15%;
  padding-top: 25%;
  
}
@media (max-width: 480px) and (orientation: landscape) {
  font-size:9vw;
  padding-bottom: 15%;
  padding-top: 25%;
}
@media(min-width:426px) and (max-width:768px){
  font-size:9vw;
  padding-bottom: 10%;
  padding-top: 20%;
}
@media(min-width:1024px){
  font-size:5vw;
  position: fixed;
}
`
const Heading = styled.h2`
color:aliceblue;
text-align:center;
margin-top:-2%
margin-bottom: 4%;
z-index:0;
width: 100%;
@media(max-width:768px){
  font-size:5vw;
}
@media(min-width:1024px){
  font-size:3vw;
  position: fixed;
 
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
height: 100vh;
background:#00000085;


@media(max-width:425px){
  height: 100vh;
}
`

const Btn = styled.button`
padding:13px 30px;
background:var(--primary-color);
color:var(--secondary-color);
font-weight:bold;
font-size:12px;
text-transform:uppercase
border:1px solid white;
&:hover{
  background:var(--Section-color);
  border:1px solid var(--Section-color);
}

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
padding-top:5%
z-index:0;
@media(max-width:425px){
  flex-direction:column
  width:100%;
  align-items: center;
}
@media(min-width:1024px){
  font-size:3vw;
  position: fixed;
  width: 100%;
  margin-top:5%
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
                <Btn>PROJECTS</Btn></Link>
              <Link
              activeClass="active"
              to="ContactMe"
              spy={true}
              smooth={true}
              offset={-100}
              duration= {500}>
                <Btn>CONTACT ME</Btn></Link>
            </BtnGroup>
           
            </Fragment>
            <Footer1></Footer1>
           </InnerContainer >
        
        </Container>
       
    );
  }
}
 
export default Jumbotron;


