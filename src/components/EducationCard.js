import React, { Component } from 'react';

class EducationCard extends Component {
    render() {
        const { school } = this.props
        return (
            <div className='edu-card'>
                <div className='graduation'><i class="fas fa-graduation-cap"></i></div>
                <p className='year'>{school.year}</p>
                <p style={{"fontWeight":"bold"}} className='school'>{school.school}</p>
                <p className='description'>{school.description}</p>
            </div>
        );
    }
}

export default EducationCard;