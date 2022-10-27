import React, { Component } from 'react';

class Intro extends Component {
    
    render() {
        const {name, bio} = this.props;
        return (
            <div className='mb-2'>
                <span> <h1>{name}</h1> {bio}</span>
            </div>
        );
    }
}
 
export default Intro;