import React from 'react';
import ParticlesBackground from './particlesBackground'
import About from './about';
import MoreAbout from './moreAbout';
import Navbar from './navbar';
import Projects from './project';
import Socials from './socials';


const MainPage = () => {
    return ( 
        <div style={{backgroundColor:'#222733' , height:'100vh'}}>
            <Navbar/>
            <About/>
            <Projects/>
            <MoreAbout/>
            <Socials/>
            <ParticlesBackground/>
        </div>
     );
}
 
export default MainPage;