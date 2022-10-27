import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
class Skills extends Component {

    render() { 
        
        return (
            <div >
                <hr></hr>
                <h1 className='text-center'> Skills </h1>
                <ol >
                     {this.props.skills.map(skill => <li className='btn-primary btn mx-1 mb-1' key={skill}>{skill}</li>)}
                </ol>
            </div>
        );
    }
}
 
export default Skills;