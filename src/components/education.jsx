import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
class Education
 extends Component {
    
    render() { 
        
        return (
            <div >
                <hr></hr>
                <h1 className='text-center'>Education</h1>
                <ol>
                    {this.props.education.map((school, index) => 
                        <div key={index}>
                            <h2>{school.schoolName}</h2>
                            <h4>{school.degree}</h4>
                            <p>{school.relevantCourses}</p>
                        </div>
                        //<li key={index}>{school.schoolName} + {school.degree} + {school.relevantCourses}</li>
                    )}
                </ol>
            </div>
        );
    }
}
 
export default Education
;