import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import profile from '../6-112.png';
import Fader from './fader';
import './Fader.css'
import InitialTransition from './BlackBoxTransition';

const About = () => {
    return ( 
        
        <div className='text-center' style={{padding:'48px', backgroundColor:'#222733' , height:'100vh'}} id="Home">
           <InitialTransition/>
            <Fader text="D H R U V      B A H L"/>
            <img className="slide-in-left" src={profile} alt='...' style={{padding: '0px 0px 48px'}}/>
            <div style={{width:'40rem', margin: 'auto' }}>
            <p className='text-center ' style={{fontSize: '1.2rem', textAlign: 'justify', color:"#DBE8D4", font:'Titillium Web'}}>
                Hey! Welcome to My Portfolio! My name's Dhruv Bahl and I hope you like what you see!
                I'm a fourth year computer science major at the University of British Columbia with my eyes
                set on writting code that allows me to use a splash of colour and a dash of problem solving. </p>
                <p className='text-center ' style={{fontSize: '1.2rem', textAlign: 'justify', color:"#DBE8D4", font:'Titillium Web'}}>
                I'm trying to kickstart my professional career as a software developer as I graduate in May 2023! I know, xxciting stuff!
                My experience so far lies in the MERN stack for web-development with splashes of Java, SQL, Python and C# for more general 
                purpose code. I hope you like what you see!</p>
                <p className='text-center ' style={{fontSize: '1.2rem', textAlign: 'justify', color:"#DBE8D4", font:'Titillium Web'}}>
                As always, I'm open to suggestions and conversations so if you have an idea you'd like to see come to life 
                or a project that needs another member, feel free to reach me using the links in my socials section!</p>
            </div>
        </div>
        
     );
}
 
export default About;