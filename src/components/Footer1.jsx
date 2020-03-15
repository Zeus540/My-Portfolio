import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color:var(--Section-color);
display:inline-block;
border-radius:0px 0px 0px 0px;
padding: 10px 0px;
position:absolute;
bottom:0px

@media(max-width:425px){
    display:flex;
    flex-direction:column;
    text-align:center;
    position:unset;
    background-color:var(--Primary-color);
}
@media(min-width:1024px){
  
  }
`

const Social = styled.div`
color:white;
float:right;
    @media(max-width:425px){
        color: white;
        justify-content: center;
        display:flex;
        flex-direction:column;
        margin: 0 auto;
        width: 100%;
}
`

const List = styled.ul`
float:right;
margin: 0px;
display:flex;
padding-top:5px;
        flex-direction:column;
    @media(max-width:425px){
        padding:0px;
        flex-direction:row;
        margin: 0 auto;
}
`

const ListItem = styled.li`
list-style:none;
color:var(--secondary-color);
font-weight:bolder;
display:inline-block;
padding-left: 5px;
padding-right: 5px;
    @media(max-width:425px){
        display:inline-flex;
        flex-direction:row;
        text-align:center;
}
`


const Anchor = styled.a`
text-decoration:none;
color:white;
margin:15px 5px;
&:hover{
    color:#717171;
  
  }
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
                 
            </Container>
           
         );
    }
}
 
export default Footer ;