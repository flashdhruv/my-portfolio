import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import {Redirect } from 'react-router-dom';

class Projects extends Component {

    handleClick = (url) => {
        window.location.href = url;
    }

    render() { 
        return (
            <div>
                <hr></hr>
                <h1 className='text-center'>Projects</h1>
                <ol>
                    {this.props.projects.map((project, index) => 
                    <div onClick={() => this.handleClick(project.repoLink)} key={index} className="project" >
                        <h2>{project.projectName}</h2>
                        <p>{project.about}</p>
                        <p>{project.technologyUsed}</p>
                    </div>
                       
                    )}
                </ol>
            </div>
            
        );
    }
}
 
export default Projects;