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
    {name:"Radssa", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste maiores hic! Aspernatur neque eos ullam quis cum placeat libero. Ad pariatur quibusdam doloribus ut, commodi non error inventore quidem?", img:Drip,  alt:"image"},

  ]);
 
return(
   <div className="row">
        <Container  id="Skills">
          
            <Flexed >
            <Fragment  >
            {State.map((data, index) => (
            <Card key={index} name={data.name} message={data.message} img={data.img} Link={data.Link}  alt={data.alt}/>))}
           </Fragment>
           <Fragment>
             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam reiciendis assumenda optio quisquam voluptas obcaecati corporis, libero quam cum veritatis tempora quaerat dolore iusto architecto neque sapiente! Nobis, id ex! Voluptates voluptas amet, dicta excepturi dolorum, quo enim totam illo iure officiis incidunt reiciendis rerum ex ab sint aspernatur reprehenderit natus nobis nesciunt esse. Praesentium expedita ratione consequatur deserunt?</Text>
           </Fragment>
           </Flexed>
            
        </Container>
        </div>
  );
}

export default Parallax;

