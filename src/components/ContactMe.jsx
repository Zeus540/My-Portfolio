import React, { Component,Fragment } from 'react';
import sytled from "styled-components";
import Forms from "./form.jsx";
import Background from '../images/contact.jpg'


const Container=sytled.div`
    background-image:url(${Background});
    background-size:100% 100%;
    background-attachment:fixed;
    height:100%;
    width:calc(100%/1)
    margin:0px 0px;
   
   
`

const Container1=sytled.div`
background-color:#1716168c!important;
position:relative;
margin-top:0%;
left:0%;
top:-0px;

width:100%;
height:100%;

@media (max-width:425px){
  height:100%;
}
    
   
`
const Textcontainer=sytled.div`
    background-color:var(--transparent);
    height:100%;
    width:100%;
    margin:0px 0px;
`

const Text=sytled.p`
    color:white;
    margin:0 auto;
    padding:10px 0px;
@media(max-width:425px){
    width:100%; 
}
@media(min-width:768px) {
    align-self: center;
    
}
`

const Headingcontainer=sytled.div`
    text-align:center;
   
`
const Heading=sytled.h2`
    text-align:center;
    color:var(--secondary-color);
    margin:0px;
`
const Subheading=sytled.h3`
    color:white;
    margin:0px;
`

const Item=sytled.li`

    list-style:none;
    padding: 0px 0px 0px 5%;
`

const ContainerInner=sytled.div`
    display:flex;
    padding: 0px 5% 10% 5%;

@media(max-width:768px){
    display:flex;
    flex-direction:column;
}
@media(min-width:769px){
   
   display:flex;
   flex-direction:row;
}
`

const FormContainer=sytled.div`
    width:Calc(100%/2);
    padding:0px 5% 0px 0% ;
@media(max-width:768px){
    width:Calc(100%/1);
    padding:0px;
}
@media(min-width:1025px){
    width:Calc(100%/3);
}
`

const Mapouter=sytled.div`
    position:relative;
    text-align:center;
    height:300px;
    width:100%;
    padding:3% 0px
`
const Gmapcanvas=sytled.div`
    overflow:hidden;
    background:none!important;
    height:300px;
    width:100%;
    padding:0% 0px
`

const List=sytled.ul`

`

const Sub=sytled.sub`

`

const Anchor=sytled.a`
color:var(--secondary-color);
text-decoration:none;
&:hover{
    color:#717171;
}
`

class ContactMe extends Component {
    
render() { 
    return (
        
           <Container id="ContactMe" className="overlay">
               <Container1 >
               <Headingcontainer ><Heading className="headings ">Get In Touch</Heading></Headingcontainer>
               
               <ContainerInner>
               <FormContainer >
                    <Forms/>
               </FormContainer>
                   <Textcontainer>
                 
              
               
                <Text >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?"
               </Text>
               &nbsp;
               <List>
                   <Subheading>Address:</Subheading>
                   &nbsp;
                   <Item><Sub><Anchor href="https://maps.google.com/"><i class="fa fa-home"/> &nbsp; 25 Thomas Crescent</Anchor></Sub></Item>
                   &nbsp;
                   <Item><Sub><Anchor href="tel:065 947 9631"><i class="fa fa-phone"/> &nbsp; 065 947 9631</Anchor></Sub></Item>
               </List>
               
               <Mapouter class="mapouter">
                       <Gmapcanvas className="gmap_canvas">
                           <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Cape%20Town&t=&z=13&ie=UTF8&iwloc=&output=embed"  scrolling="no" ></iframe>
                       </Gmapcanvas>
                </Mapouter>
               </Textcontainer>

              

               </ContainerInner>
               </Container1>
           </Container>
         
         );
    }
}
 
export default ContactMe;



