import React, { Component } from 'react';
import EducationCard from './EducationCard';
import {data} from './EducationData';
class Education extends Component {
    render() {
        return (
            <div id="edu" className='education-container'>
                <div className='education'>
                    <h1 className='education-heading'>My <span>Education</span></h1>
                    <hr/>

                    <div className='education-school'>
                        {data.map((school)=>{
                            return <EducationCard school={school}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;