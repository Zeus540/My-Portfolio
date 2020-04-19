import React, {useState,Fragment} from 'react';
import styled from 'styled-components';
import Card from './Card.jsx' 
import Addicts from '../images/react.png'
import Wolf from '../images/javascript.png'
import Drip from '../images/css.png'

const Container = styled.div`
padding:0px;
height:100%;
`
const Text = styled.p`
width:30%;
padding:3% 5% 0% 5%;
margin-right: 5%;
color:#1f1f1f;
height:100%;
background:aliceblue;
@media(max-width:425px){
   width:80%;
   margin:0 auto;
   padding:5% 5% 5% 5%;
  }
`

const Flexed = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
margin: 0 auto;
width: 100%;
height:100%;
@media(max-width:425px){
      flex-direction:column  ;
      justify-content: center;
      margin:0 auto;
  }
@media(min-width:426px) and (max-width:786px){
    flex-direction:row  ;
    justify-content: center;
    margin:0 auto;
}
`

function Parallax() {
 
  const [State] = useState([
    {name:"Z", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste maiores hic! Aspernatur neque eos ullam quis cum placeat libero. Ad pariatur quibusdam doloribus ut, commodi non error inventore quidem?", img:Drip,  alt:"image"},
  ]);

 
 
return(
   <div className="row">
        <Container  id="Skills">
       
            <Flexed >

            <Fragment>
            {State.map((data, index) => (
            <Card key={index} name={data.name} message={data.message} img={data.img} Link={data.Link}  alt={data.alt}/>))}
           </Fragment>
           <Fragment>
             <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia soluta et iste! Qui magni eos eius nemo assumenda distinctio dolorem amet voluptatem cupiditate molestiae fuga ipsa ea nostrum, odio ad beatae a. Consectetur pariatur, iste magni velit soluta ex, voluptates totam dolore eaque eos consequuntur ipsa quod? Porro, unde vero.</Text>
           </Fragment>
           </Flexed>
          
        </Container>
        </div>
  );
}

export default Parallax;

