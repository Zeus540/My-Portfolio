import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: inherit;
transition: ease-in 200ms;
margin:1%;
padding: 20px;
background:transparent;
width:calc(100%/3);

&:hover{
    transform:scale(1.05);
    background:var(--Section-color);
    box-shadow: #000000 18px 15px 24px 2px;
    h4{
        color:var(--primary-color);
        text-decoration:unset!important;
    }
}
@media(max-width:786px){
    width:calc(100%/2);
    margin: 0 auto;
    margin-bottom:15%;
}

@media(min-width:500px) and (max-width:1440px) {
   
    margin-bottom:2%;
  
}

@media(min-width:1440px)  {
    width:calc(100%/6);
    margin-bottom:2%;
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

const Anchor = styled.h2`
    color:aliceblue;
    text-decoration:unset;
    text-align:center; 
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
