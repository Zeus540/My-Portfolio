import React, {useState,Fragment} from 'react';
import styled from 'styled-components';

import Card2 from './Card.jsx' 
import Addicts from '../images/react.png'
import Wolf from '../images/javascript.png'
import Drip from '../images/css.png'

const Container = styled.div`
padding:0px;
height:100%;
`


const Flexed = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
margin: 0 auto;
width: 100%;
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
    {name:"Sasdasd", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laborum quos nemo nihil obcaecati? Est itaque porro harum quasi impedit.", img:Addicts, alt:"image"},
    {name:"Rasdasd", message:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum doloremque ex numquam eos provident dolore repellendus laborum, amet ut accusamus eius veniam eaque perspiciatis magnam rerum. Animi quisquam ullam soluta ipsa ducimus, vero fugiat eligendi neque magnam accusamus nesciunt itaque!", img:Wolf, alt:"image"},
    
    
  ]);
 
return(
   <div className="row">
        <Container  id="Skills">
          
            <Flexed >
            <Fragment  >
            {State.map((data, index) => (
            <Card2 key={index} name={data.name} message={data.message} img={data.img} Link={data.Link}  alt={data.alt}/>))}
           </Fragment>
           </Flexed>
            
        </Container>
        </div>
  );
}

export default Parallax;

