import React, { Component } from 'react';
import styled from 'styled-components';

const Container =styled.div`
background-color:var(--secondary-color);
border:none;
border-radius:10px;
color:white;
display: flex;
justify-content: center;
@media(max-width:425px){
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
}
`

const Form =styled.div`
display:flex;
flex-direction:column;
width: 100vw;
justify-content:space-around;
@media(max-width:425px){
  
}


`

const Input =styled.input`
background-color:transparent;
border:none;
border-bottom:2px solid var(--primary-color);
min-height:40px;
margin-bottom:5px;
color:aliceblue;
`

const Label =styled.label`
display:flex;
flex-direction:column;
color:aliceblue;
`

const Textarea =styled.textarea`
background-color:aliceblue;
border:none;
margin-bottom:20px;
color:black;
margin-top:10px;
`

const Button =styled.button`
background-color:var(--primary-color);
border:none;
color:var(--secondary-color);;
text-transform:uppercase;
padding:10px 100px;
width:fit-content;
margin:0 auto;
font-weight:700;
@media(max-width:425px){
    width: 100%;
}
`

class Forms extends Component {
  
    render() { 
        return (
           <Container>
                <Form >
                    <Label >Name :
                    <Input type="text"  placeholder="Name" />
                    </Label>
                    <Label >Email :
                    <Input type="text" placeholder="Email" />
                    </Label>
                    <Label>Message :
                    <Textarea cols="35" rows="20" placeholder="Message" ></Textarea>
                    </Label>
                    <Input type="text" placeholder="3 + 1 ="/>
                    <Button>Send</Button>
                </Form>
            </Container>
         );
    }
}
 
export default Forms;