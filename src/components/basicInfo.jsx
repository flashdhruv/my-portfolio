import React, { Component } from 'react';

class BasicInfo extends Component {
    
    render() { 
        const {phone, linkedin, email} = this.props
        return (
            <div className='text-center'>
                <span> {phone} {linkedin} {email}</span>
            </div>
            
        );
    }
}
 
export default BasicInfo;