import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
class Work extends Component {
     
    render() { 
        return (
            <div >
                <hr></hr>
                <h1 className='text-center'>Work</h1>
                <ol>
                    {this.props.work.map((job, index) => 
                    <div key={index}>
                        <h2>{job.jobTitle}</h2>
                        <h4>{job.company}</h4>
                        <p>{job.workDone}</p>
                    </div>
                        //<li key={index}>{job.jobTitle} + {job.company} + {job.workDone}</li>
                    )}
                </ol>
            </div>
        );
    }
}
 
export default Work;