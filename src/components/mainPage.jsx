import React from 'react';
import ParticlesBackground from './particlesBackground'
import About from './about';
import MoreAbout from './moreAbout';
import Navbar from './navbar';
import Projects from './project';
import Socials from './socials';
import {motion} from 'framer-motion';



const MainPage = () => {
    return ( 
        <motion.div exit={{opacity: 0}}>
            
        <div style={{backgroundColor:'#222733' , height:'100vh'}}>
            <Navbar/>
            <About/>
            <Projects/>
            <MoreAbout/>
            <Socials/>
            <ParticlesBackground/>
        </div>
        </motion.div>
     );
}
 
export default MainPage;