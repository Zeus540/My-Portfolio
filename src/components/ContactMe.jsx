import React, { Component } from 'react';
import sytled from "styled-components";
import Forms from "./form.jsx";


const Container=sytled.div`
    background-color:var(--secondary-color);
    height:100%;
    width:calc(100%/1)
    margin:0px 0px;
    padding:0px 5% 10% 5%;
   
`

const Textcontainer=sytled.div`
    background-color:var(--secondary-color);
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

const Heading=sytled.h2`
    text-align:center;
    color:white;
    margin:0px;
`

const Subheading=sytled.h3`
    color:white;
    margin:0px;
`

const Item=sytled.li`
    color:white;
    list-style:none;
    padding: 0px 0px 0px 5%;
`

const ContainerInner=sytled.div`
    display:flex;
@media(max-width:425px){
    display:flex;
    flex-direction:column;
}
@media(min-width:1025px){
   justify-content:center;
}
`

const FormContainer=sytled.div`
    width:Calc(100%/2);
    padding:0px 0px 0px 5% ;
@media(max-width:425px){
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
color:aliceblue;
text-decoration:none;
&:hover{
    color:var(--primary-color);;
}
`

class ContactMe extends Component {
    
render() { 
    return (
        
           <Container id="ContactMe">
               <Heading className="headings">Get In Touch</Heading>

               <ContainerInner>

                   <Textcontainer>
                 
               <Mapouter class="mapouter">
                       <Gmapcanvas className="gmap_canvas">
                           <iframe width="90%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Cape%20Town&t=&z=13&ie=UTF8&iwloc=&output=embed"  scrolling="no" ></iframe>
                       </Gmapcanvas>
                </Mapouter>
                <List>
                   <Subheading>Address:</Subheading>
                   &nbsp;
                   <Item><Sub><Anchor href="https://maps.google.com/"><i class="fa fa-home"/> &nbsp; 25 Thomas Crescent</Anchor></Sub></Item>
                   &nbsp;
                   <Item><Sub><Anchor href="tel:021 947 8763"><i class="fa fa-phone"/> &nbsp; 021 947 8763</Anchor></Sub></Item>
               </List>
               &nbsp;
                <Text >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?"
               </Text>
               </Textcontainer>

               <FormContainer >
                    <Forms/>
               </FormContainer>

               </ContainerInner>
           </Container>
     
         );
    }
}
 
export default ContactMe;



