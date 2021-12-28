import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='about-container' id='abt'>
                <div className='about'>
                    <h1 className='about-heading'><span>About</span> Me</h1>
                    <hr />
                    <div className='about-info'>
                        <div className='about-left' style={{"fontSize":"x-large"}}>
                            <p>Name : <span>Shivang Singhal</span></p>
                            <p>Age : <span>20</span></p>
                            <p>Qualification : <span>B.E CSE</span></p>
                            <p>Language : <span>Hindi & English</span></p>
                        </div>
                        <div className='about-right'>
                            <div className='qualities'>
                                <div className='course'>
                                    <p>HTML5</p>
                                    <p>80%</p>
                                </div>
                                <div className='html'>
                                    <div className='html-percentage'></div>
                                </div>
                            </div>

                            <div className='qualities'>
                                <div className='course'>
                                    <p>CSS3</p>
                                    <p>85%</p>
                                </div>
                                <div className='css'>
                                    <div className='css-percentage'></div>
                                </div>
                            </div>

                            <div className='qualities'>
                                <div className='course'>
                                    <p>VanillaJS</p>
                                    <p>75%</p>
                                </div>
                                <div className='javascript'>
                                    <div className='javascript-percentage'></div>
                                </div>
                            </div>

                            <div className='qualities'>
                                <div className='course'>
                                    <p>ReactJS</p>
                                    <p>80%</p>
                                </div>
                                <div className='react'>
                                    <div className='react-percentage'></div>
                                </div>
                            </div>

                            <div className='qualities'>
                                <div className='course'>
                                    <p>Java</p>
                                    <p>90%</p>
                                </div>
                                <div className='java'>
                                    <div className='java-percentage'></div>
                                </div>
                            </div>

                            <div className='qualities'>
                                <div className='course'>
                                    <p>C++</p>
                                    <p>70%</p>
                                </div>
                                <div className='cpp'>
                                    <div className='cpp-percentage'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;