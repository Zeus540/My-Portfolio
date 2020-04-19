import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from "react-scroll";


const Navbar = styled.div`
width: 100%;
border: none;
border-radius: 0px;
background:var(--transparent);
margin: 0px!important;
z-index: 2;
color:var(--primary-color);
position: fixed;
height:auto;
display:flex;

@media(max-width:786px){
     background:#000000cf;
  }
@media(max-width:768px){
      flex-direction:column;
      justify-content: center;
      margin:0 auto;
      
      transition:ease-in 200ms;
      &:hover{
        
      }
  }
`

const List = styled.ul`
display: flex;
justify-content:center;
margin: 0px;
align-items: center;
@media(min-width:426px){
   
  }
  @media(min-width:769px){
       position: absolute;
       right: 0px;
    }
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
display:none;

`
const ListItem = styled.li`
list-style:none;
color:var(--secondary-color);
margin:0px 0px
transition: ease-in 200ms;
height:auto;
@media(max-width:425px){
  padding:20px 10px;
  font-size:10px;
  &:hover {
    padding: 15px 40px;
    background: var(--secondary-color);
    color: var(--Section-color);
    transform: translateY(100%);
  }
  
}
@media(min-width:426px){
  padding:20px 20px;
  &:hover {
    padding:20px 100px;
    background:var(--secondary-color);
    color:var(--Section-color);
  }
  
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
          duration= {300}
          ><Logo>" Z &nbsp;ROBERTS "</Logo>
        </Link>
        
      <List>
      
        <Link
          activeClass="active"
          to="Nav"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {300}
          ><ListItem>Home</ListItem>
        </Link>
      
      
        <Link
          activeClass="active"
          to="Hobbies"
          spy={true}
          smooth={true}
          offset={-250}
          duration= {300}
          ><ListItem>About Me</ListItem>
        </Link>  
     
      
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration= {350}
          ><ListItem>Projects</ListItem>
        </Link>
      
        <Link 
          activeClass="active"
          to="ContactMe"
          spy={true}
          smooth={true}
          offset={-50}
          duration= {350}
          ><ListItem>Contact Me </ListItem>
        </Link>
     
   
      </List>
      </Navbar>

  );
  }
}

export default Nav;
