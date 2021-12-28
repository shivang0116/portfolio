import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Education from './Education';
import Introduction from './Introduction';

class Main extends Component {
    render() {
        return (
            <div className='main-container'>
                <div className='hamburger' onClick={()=>this.props.toggleSidebar()}>
                    <i class="fas fa-bars"></i>
                </div>
                <Introduction />
                <About />
                <Education />
                <Contact />
            </div>
        );
    }
}

export default Main;