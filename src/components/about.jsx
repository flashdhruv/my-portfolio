import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import profile from '../profile.jpg';

const About = () => {
    return ( 
        <div className='text-center' style={{padding:'48px'}} id="Home">
            <h1 style={{padding: '20px 0px 48px', color:"#DBE8D4", letterSpacing:'20px'}}>DHRUV  BAHL</h1>
            <img src={profile} alt='...' style={{width:'18em', height:'18em', padding: '0px 0px 48px'}}/>
            <div style={{width:'30rem', margin: 'auto' }}>
            <p className='text-center' style={{fontSize: '1.2rem', textAlign: 'justify', color:"#DBE8D4", font:'Titillium Web'}}>A 4th year computer science major at the University of British Columbia with 1.5 years work experience
                through internships involving database querying, APIs and testing and a personal
                interest in becoming a full stack developer!</p>
            <p className='text-center'>

            </p>
            </div>
        </div>
     );
}
 
export default About;