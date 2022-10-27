import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import construction from '../construction.png';

const Projects = () => {
    return ( 
        <div className='text-center' style={{padding: '96px 0px 48px', backgroundColor:'#222733'}} id="Project">
            <h1 style={{padding: '0px 0px 48px', color:"#DBE8D4", textDecorationLine: 'underline'}}>Projects</h1>
            <div className="card" style={{width: '18rem', margin:'auto'}}>
            <img src={construction} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">The Resume Builder</h5>
                <p className="card-text">A quick and free Resume builder built using React.js & Node.js</p>
            </div>
            </div>
        </div>
        
        
     );
}
 
export default Projects;