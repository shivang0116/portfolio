import React, { Component } from 'react';

class Introduction extends Component {
    render() {
        return (
            <div id="intro" className='intro-container'>
                <div className='intro'>
                    <p style={{"fontSize":"1.5rem"}}>HI THERE !</p>
                    <p style={{"fontSize":"2.1rem","fontWeight":"bold"}}>I'M <span>Shivang Singhal</span></p>
                    <p className='identity'>I Am Currently A <span className='color-blue'>Third Year Computer Science Undergraduate</span> Student At Chitkara University. I Would Be Interested In Training Programs, Internships Or Certifications Focused On <span className='color-blue'>MEAN Stack</span>. My Specialities Include Quickly Learning New Skills And Programming Languages, Problem Solving, Responsive Design Principles, And Website Optimisation. So Far I Have <span className='color-blue'>JavaScript, HTML, CSS, JQuery, Bootstrap And Git/GitHub</span> Under My Belt. I've Started, Node.JS, MongoDB And Express.JS.</p>
                    <div className='intro-button'><a href='#abt'>About Me</a><i class="fas fa-user"></i></div>
                </div>
            </div>
        );
    }
}

export default Introduction;