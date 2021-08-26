import React from 'react';
import { NavLink } from "react-router-dom";
import "./style.css"
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<footer class="footer">
				<div class="container">
					<div class="row-footer">
						<div class="footer-col">
							<h4>company</h4>
							<ul>
								<li><NavLink exact to='/aboutus'><li>about us</li></NavLink></li>
								<li><a href="pdfs/privacy-policy.pdf" target='_blank'>Privacy Policy</a></li>
								<li><NavLink exact to='/courses'><li>courses</li></NavLink></li> 
							</ul>
						</div>
						<div class="footer-col">
							<h4>get help</h4>
							<ul>
								<li><a href="pdfs/FAQ.pdf" target='_blank'>FAQ</a></li>
								<li><a href="mailto:tutorherelearning@gmail.com">tutorherelearning@gmail.com</a></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>follow us</h4>
							<div class="social-links">
								<a href="https://www.facebook.com/tutorhere.help/"> <FaFacebookF /></a>
								<a href="https://twitter.com/tutor_here"><FaTwitter/></a>
								<a href="https://www.linkedin.com/company/tutorhere/"><FaLinkedinIn/></a>
								<a href="https://www.instagram.com/tutor.here/?hl=en"><FaInstagram/></a>
							</div>
						</div>
					</div>
					<div className="text-center copyright py-5">Copyright &copy;2021 Tutor Here</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;