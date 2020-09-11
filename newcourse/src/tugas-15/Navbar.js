import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <>
                <div class="topnav" id="myTopnav">
                    <a href="#home" class="active">Home</a>
                    <a href="#news">Tugas-10</a>
                    <a href="#contact">Tugas-11</a>
                    <a href="#about">Tugas-12</a>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </>
        )
    }
}

export default Navbar;