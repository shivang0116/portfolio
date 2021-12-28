import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="con" className='contact-container'>
                <div className='contact'>
                    <h1 className='contact-heading'><span>Contact</span> Me</h1>
                    <hr />
                    <div className='contact-info'>
                        <div className='contact-left'>
                            <h1>Send A Message</h1>
                            <input placeholder='Your Name' /><br /><br />
                            <input placeholder='Your Email' /><br /><br />
                            <input placeholder='Subject' /><br /><br />
                            <textarea placeholder='Write Something Here...' /><br /><br />
                            <div className='contact-button'>Send Message<i class="fas fa-envelope-open-text"></i></div>
                        </div>
                        <div className='contact-right'>
                            <h1>Get In Touch</h1>
                            <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                                Simply fill the from and send me an email.</p>
                            <div className='icons'>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;