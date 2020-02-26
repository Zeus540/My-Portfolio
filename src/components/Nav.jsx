import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from "react-scroll";


const Navbar = styled.div`
width: 100%;
border: none;
border-radius: 0px;
background:var(--secondary-color);
margin: 0px!important;
z-index: 2;
color:white;
position: fixed;
height:auto;
display:flex;

@media(max-width:768px){
      flex-direction:column;
      justify-content: center;
      margin:0 auto;
      transform: translateY(-55%);
      transition:ease-in 200ms;
      &:hover{
        transform: translateY(0%);
      }
  }
`

const List = styled.ul`
display: flex;
justify-content:center;
margin: 0px;
align-items: center;
`

const Logo = styled.h1`
display: flex;
justify-content:center;
align-items: center;
align-self: center;
padding:18px 20px;
background:var(--primary-color);
color:var(--secondary-color);
font-size:20px;
`
const ListItem = styled.li`
list-style:none;
margin:0px 0px
padding:20px 10px;
transition: ease-in 200ms;
height:auto;
@media(max-width:768px){
     padding:20px 6px;
  }
  &:hover {
    background:var(--primary-color);
    
  
}
    
`

class Nav extends Component {

render() { 


        return (
      <Navbar >
         <Link
          activeClass="active"
          to="Nav"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {350}
          ><Logo>" OCTOPUS _ "</Logo>
        </Link>
        
      <List>
      <ListItem>
        <Link
          activeClass="active"
          to="Nav"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {350}
          >Home
        </Link>
      </ListItem>
      <ListItem>
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {350}
          >Our Services
        </Link>
      </ListItem>
      <ListItem>
        <Link
          activeClass="active"
          to="Hobbies"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {350}
          >Our Clients
        </Link>  
      </ListItem>   
      <ListItem >
        <Link 
          activeClass="active"
          to="ContactMe"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {350}
          >Awards
        </Link>
      </ListItem>    
      <ListItem >
        <Link 
          activeClass="active"
          to="ContactMe"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {350}
          >Contact Us
        </Link>
      </ListItem>
   
      </List>
      </Navbar>

  );
  }
}

export default Nav;
