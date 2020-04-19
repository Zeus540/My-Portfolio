import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 100%;
transition: ease-in 200ms;
margin:1%;
padding: 50px 20px 50px 20px;
background:transparent;

background:var(--primary-color);
box-shadow: #202020 18px 15px 24px 2px;
&:hover{
    transform:scale(1.05);
    background:var(--Section-color);
    
    h4{
        color:var(--secondary-color);
        text-decoration:unset!important;
    }
}
@media (max-width:425px){
    width:calc(100%/1.4);
    margin: 0 auto;
   
}
@media (min-width:426px) and (max-width:768px){
    width:calc(100%/2.5);
    margin: 0 auto;
    
}

@media (min-width:769px) and (max-width:2560px) {
    width:calc(100%/4);
    margin-bottom:2%;
    &:hover{
        box-shadow: none;
        transform:scale(1.1);
        postion:absolute;
        background:var(--Section-color);
       
  
}


`

const Content = styled.div`
display: flex;
justify-content: center;

`

const Image = styled.img`
display:block;
margin:0 auto;
width:100%;
height:100%;
border:none;
width:calc(100%/3);
border-radius:0px 0px 7px 7px;
@media(min-width:426px) and (max-width:768px){
    margin: 0px;
    padding:0px;
    
}
`

const Heading = styled.h4`
text-align:center;
padding:10px;
padding:20px;
margin:0px;
transition:ease-in 200ms;
color:aliceblue;
&:hover{
    transform:scale(1.2);
    text-decoration:underline;
}
`


const Text= styled.div`
    color:aliceblue;
    text-decoration:none;
    text-align:center; 
`

const Des= styled.p`
    color:aliceblue;
    text-decoration:none;
    text-align:center;
    width:80%;
    margin: 0 auto;
`

class Card extends Component {
   
    render() {
    return (        
        <Container>

            <Content>
                <Image src={this.props.img} alt={this.props.alt}/>
            </Content>
            
            <Heading>
               {this.props.name}
            </Heading>

            <Text>
                <Des>{this.props.message}</Des>
            </Text>
        </Container>  
        );
    }
}

export default  Card;
