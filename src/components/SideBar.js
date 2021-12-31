import React, { Component } from 'react'
import image from '../image.jpg';

export default class SideBar extends Component {
    changeIcon = () => {
        if(window.innerWidth<=800){
            this.props.toggleSidebar();
        }
    }
    render() {
        return (
            <div className={`sidebar-container ${this.props.sidebar ? 'active' : ''}`}>
                <div className='cross' onClick={() => this.props.toggleSidebar()}>
                    <i class="fas fa-times"></i>
                </div>

                <div className='sidebar'>
                    <div className='sidebar-image'>
                        <img src={image} alt="" />
                    </div>

                    <div style={{ "fontSize": "2rem" }}>Shivang Singhal</div>
                    <div style={{ "fontSize": "x-large" }}>Beta MLSA</div>

                    <div className='nav'>
                        <a href="#intro"><div onClick={() => this.changeIcon()} className='nav-item'>Home</div></a>
                        <a href="#abt"><div onClick={() => this.changeIcon()} className='nav-item'>About</div></a>
                        <a href="#edu"><div onClick={() => this.changeIcon()} className='nav-item'>Education</div></a>
                        <a href="#"><div onClick={() => this.changeIcon()} className='nav-item'>Portfolio</div></a>
                        <a href="#con"><div onClick={() => this.changeIcon()} className='nav-item'>Contact</div></a>
                    </div>
                </div>
            </div>
        )
    }
}
