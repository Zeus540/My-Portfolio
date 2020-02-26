import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color:var(--primary-color);
display:inline-block;
width:100%;
padding: 10px 0px;
@media(max-width:425px){
    display:flex;
    flex-direction:column;
    text-align:center;
   
}
`

const Copyright = styled.p`
color:var(--secondary-color);;
display: flex;
font-size:12px;
flex-wrap: wrap; 
justify-content: center;
    @media(max-width:425px){
        text-align: center;
        margin: 0px;
}
`

const Social = styled.div`
color:white;
float:right;
    @media(max-width:425px){
        color: white;
        justify-content: center;
        display:flex;
        flex-direction:row;
        margin: 0 auto;
        width: 100%;
}
`

const List = styled.ul`
float:right;
margin: 0px;
    @media(max-width:425px){
        padding:0px;
}
`

const ListItem = styled.li`
list-style:none;
color:var(--secondary-color);
font-weight:bolder;
display:inline-block;
padding:0px 0px;
   
    @media(max-width:425px){
        display:inline-flex;
        flex-direction:row;
        text-align:center;
}
`
const Legal = styled.div`
display: inline-block;
`

const I = styled.i`
width:30px;
height:30px;
margin:15px 5px;
border-radius: 5px;
`

const Anchor = styled.a`
text-decoration:none;
color:white;
margin:15px 5px;
`
const Span = styled.span`
font-size:17px;
color:var(--secondary-color);
`
class Footer extends Component {
    render() { 
        return ( 
           
            <Container>
                        <Social>
                            <List>
                                <ListItem><Anchor href="" class="icon"> <i class="fa fa-whatsapp"></i></Anchor></ListItem>
                                &nbsp;
                                <ListItem><Anchor href="" class="icon"> <i class="fa fa-instagram"></i></Anchor></ListItem>
                                &nbsp;
                                <ListItem><Anchor href="" class="icon"><i class="fa fa-facebook-square"></i></Anchor></ListItem>
                                &nbsp;
                            </List>
                        </Social>
                        <Legal>
                <Copyright><Span>&nbsp;" OCTAPUS _ "  &copy;</Span> &nbsp;All Right Reserved Copyright 2019</Copyright>
                </Legal>
            </Container>
           
         );
    }
}
 
export default Footer ;