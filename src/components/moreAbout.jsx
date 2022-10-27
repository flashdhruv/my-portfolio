import React from 'react';

const MoreAbout = () => {
    return ( 
        <div className='text-center' id="About" style={{padding: '96px 0px 48px', backgroundColor:'#222733'}} >
            <h1 style={{padding: '0px 0px 48px', color:"#DBE8D4", textDecorationLine: 'underline'}}>About</h1>
            <img/>
            <div style={{width:'30rem', margin: 'auto' }}>
                <p className='text-center' style={{fontSize: '1.2rem', textAlign: 'justify', color:"#DBE8D4"}}>
                    My aspirations for the future revolve around a role as a software developer with an energetic and diverse team. 
                    I would like the projects that I work on to have a positive impact on society and allow me to be creative.
                </p>
                <p className='text-center' style={{fontSize: '1.2rem', textAlign: 'justify', color:"#DBE8D4"}}>
                    In my free time you can find me at the gym or cheering for Manchester united!
                </p>
                <p className='text-center' style={{fontSize: '1.2rem', textAlign: 'justify', color:"#DBE8D4"}}>
                    My strengths include: Team collaboration, creative problem solving, willingness to learn and improve, meeting deadlines, quick adaptability.
                </p>
            </div>
        </div>
     );
}
 
export default MoreAbout;