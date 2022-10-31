import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

const Projects = () => {
    return ( 
        <div className='text-center' style={{padding: '96px 0px 48px', backgroundColor:'#222733'}} id="Project">
            <h1 style={{padding: '0px 0px 48px', color:"#DBE8D4", textDecorationLine: 'underline'}}>Projects</h1>
            <Container>
            <div className='singleCol  d-flex justify-content-evenly'>
            <div className="card" style={{width: '18rem', margin:'auto'}}>
            <img src='https://www.animatedimages.org/data/media/695/animated-under-construction-image-0035.gif' className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">The Resume Builder</h5>
                <p className="card-text">A quick and free Resume builder built using React.js & Node.js</p>
                <a href="#" class="btn btn-primary disabled">Check it Out!</a>
            </div>
            </div>

            <div className="card" style={{width: '18rem', margin:'auto', backgroundColor: 'lightgreen'}}>
            <img src='https://www.animatedimages.org/data/media/290/animated-snake-image-0022.gif' height='147px' className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Snake</h5>
                <p className="card-text">A throwback to the old Snake Game built using Java.</p>
                <a href="https://github.com/flashdhruv/Java-OOP-Snake" class="btn btn-primary" target="_blank">Check the Github Repo Out!</a>
            </div>
            </div>
            </div>
            </Container>   
        </div>
        
        
     );
}
 
export default Projects;