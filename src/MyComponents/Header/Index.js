import React, { Component } from 'react'
import "./style.css"
// const link="./../../Data/logo1.png";
class Header extends Component {
    render() {
        return (
            <>
                <nav>
                    <input type="checkbox" id="check"/>
                        <label for="check" class="checkbtn">
                            <i class="fas fa-bars"></i>
                        </label>
                        <label class="logo">Tutor Here</label>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Learners</a></li>
                            <li><a href="#">CircleSpace</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">.com.au</a></li>
                        </ul>
                </nav>
            </>
                )
    }
}
                export default Header

