import React, { Component } from 'react'
import image from '../image.jpg';

export default class SideBar extends Component {
    render() {
        return (
            <div className={`sidebar-container ${this.props.sidebar? 'active':''}`}>
                <div className='cross' onClick={()=>this.props.toggleSidebar()}>
                    <i class="fas fa-times"></i>
                </div>

                <div className='sidebar'>
                    <div className='sidebar-image'>
                        <img src={image} alt="" />
                    </div>

                    <div style={{ "fontSize": "2rem" }}>Shivang Singhal</div>
                    <div style={{ "fontSize": "x-large" }}>Beta MLSA</div>

                    <div className='nav'>
                        <div className='nav-item'><a href="#intro">Home</a></div>
                        <div className='nav-item'><a href="#abt">About</a></div>
                        <div className='nav-item'><a href="#edu">Education</a></div>
                        <div className='nav-item'><a href="#">Portfolio</a></div>
                        <div className='nav-item'><a href="#con">Contact</a></div>
                    </div>
                </div>
            </div>
        )
    }
}
