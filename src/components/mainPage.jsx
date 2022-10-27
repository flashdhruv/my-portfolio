import React from 'react';
import ParticlesBackground from './particlesBackground'
import About from './about';
import MoreAbout from './moreAbout';
import Navbar from './navbar';
import Projects from './project';


const MainPage = () => {
    return ( 
        <div style={{backgroundColor:'#222733' , height:'100vh'}}>
            <Navbar/>
            <About/>
            <Projects/>
            <MoreAbout/>
        </div>
     );
}
 
export default MainPage;