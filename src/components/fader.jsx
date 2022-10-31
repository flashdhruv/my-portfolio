import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './Fader.css'

const Fader = ({ text }) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    })

    useEffect(() =>{
        const timeout = setInterval(() => {
            if(fadeProp.fade === 'fade-in'){
                setFadeProp({
                    fade: 'fade-out'
                })
            }else{
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 4000);

        return () => clearInterval(timeout);
    }, [fadeProp])
    return ( 
    
        <h1 className={fadeProp.fade} style={{padding: '20px 0px 48px', color:"#DBE8D4", letterSpacing:'20px'}}> {text}</h1>
    

    );
}
Fader.propTypes ={
    text: PropTypes.string,
}
 
export default Fader;