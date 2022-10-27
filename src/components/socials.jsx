import React from 'react';
import '../css/socials.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
    return ( 
        <div className='text-center' style={{backgroundColor:'#222733' , height:'50vh'}} id='Socials'>
            <h1 style={{padding: '0px 0px 48px', color:"#DBE8D4", textDecorationLine: 'underline'}}>Get In Touch With Me!</h1>
            <Container>
                <div className='singleCol social-media-icons-white d-flex justify-content-evenly'>
                    <a href='https://www.linkedin.com/in/dhruv-bahl/'>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href='https://Twitter/flashdhruv.com'>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href='https://github.com/flashdhruv'>
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
            </Container>
        </div>
     );
}
 
export default Socials;