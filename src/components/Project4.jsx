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
const Textcontainer = styled.div`
width:50%;
height:100%;

@media(max-width:425px){
  
   margin:0 auto;
   width:80%;
  }
  @media(min-width:768px) and (max-width:2560px){
    &:hover{
      box-shadow: none;
      transform:scale(1.1);
      position:absolute;
      width:100%
    }
   
   }
`
const Text = styled.p`

padding:5% 15% 5% 15%;
margin-right: 5%;
color: aliceblue;
height: 100%;
background: #1f1f1fdb;
@media(max-width:425px){
   padding: 5% 5% 5% 5%;
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
    {name:"Zafirah", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste maiores hic! Aspernatur neque eos ullam quis cum placeat libero. Ad pariatur quibusdam doloribus ut, commodi non error inventore quidem?", img:Drip,  alt:"image"},
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
             <Textcontainer>
             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus porro doloremque numquam, odit, impedit voluptatum assumenda magnam quidem fugiat eaque doloribus distinctio voluptates alias nam laudantium minus molestias. Adipisci quam ad est expedita tempora explicabo beatae fuga quae eum magnam iure assumenda natus numquam temporibus, esse saepe tempore maiores deserunt fugit. Veniam, pariatur. Dolores quibusdam reprehenderit dolor esse odio repudiandae quasi fugit iste necessitatibus quod, animi voluptates excepturi? Excepturi nam aliquam labore quis perferendis debitis odit cupiditate ducimus. Explicabo amet praesentium, sit laboriosam aut delectus esse est perspiciatis voluptate nostrum! Sit dolorum, non delectus nesciunt quia inventore sunt fugiat adipisci.</Text>
             </Textcontainer>
           </Fragment>
       
           </Flexed>
          
        </Container>
        </div>
  );
}

export default Parallax;

