import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
width:calc(100%/1);
padding: 0px;
height: fit-content;
border-radius:7px;
background:#1f1f1f;
transition: ease-in 200ms;
margin:40px;
&:hover{
    transform:scale(1.05);
    background:#6b222d;
    box-shadow: #000000 18px 15px 24px 2px;
}
@media(max-width:425px){
    width:calc(100%/1);
    margin: 0 auto;
    margin-bottom:15%;
}
@media(min-width:426px) and (max-width:768px)  {
    width:calc(100%/1.);
    margin-bottom:2%;
}
@media(min-width:769px) and (max-width:1440px) {
    width:calc(100%/1);
    margin-bottom:2%;
    &:hover{
        transform:scale(2.05);
        background:#6b222d;
        box-shadow: #000000 18px 15px 24px 2px;
    }
  
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
border-radius:0px 0px 7px 7px;
@media(min-width:426px) and (max-width:768px){
    margin: 0px;
    padding:0px;
    width:calc(100%/1);
}
`

const Heading = styled.h4`
text-align:center;
padding:10px;
padding:20px;
margin:0px;
transition:ease-in 200ms;
&:hover{
    transform:scale(1.2);
    text-decoration:underline;
}
`

const Anchor = styled.a`
color:white;
text-decoration:none;
text-align:center; 
`

class Card extends Component {
   
    render() {
    return (        
        <Container>
             <Heading><Anchor href={this.props.Link} target="_blank" rel="noopener">{this.props.name}</Anchor></Heading>
            <Content>
               
                <Image src={this.props.img} alt={this.props.alt}/>
                </Content>
        </Container>  
        );
    }
}

export default  Card;
