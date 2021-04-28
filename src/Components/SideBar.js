import './sidebar.css';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import { Link } from 'react-router-dom';

function SideBar(){

    return(
      <div className='main-container'>
        <div id="colorlib-aside" role="complementary" className="border js-fullheight" style={{"height": "460px"}}>
            <div className="text-center">
            <div className="author-img"></div>
            <h1 id="colorlib-logo">Moreshwar</h1>
            <span class="position">UI Developer in Pune</span>
            </div>
            <div id="colorlib-main-menu" class="collapse">
                <ul>
                    <li><Link to='/' data-nav-section="home">Home</Link></li>
                    <li><Link to='/about' data-nav-section="about">About</Link></li>
                    <li><Link to='/skills' data-nav-section="skills">Skills</Link></li>
                    <li><Link to='/education' data-nav-section="education">Education</Link></li>
                    <li><Link to='/experience' data-nav-section="experience">Experience</Link></li>
                    <li><Link to='/blogs' data-nav-section="blog">Blog</Link></li>
                    <li><Link to='/contact' data-nav-section="contact">Contact</Link></li>
                </ul>
            </div>
            <div className="colorlib-footer">
            <p><small>© 
            Copyright ©<script>document.write(new Date().getFullYear());</script>2021 All rights reserved</small></p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/moreshwar-boramanikar-661b7389/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                <a href="https://github.com/moreshwar86" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                <a href="mailTo:memoreshwar@gmail.com" target="_blank" rel="noreferrer"><MailIcon /></a>
                <a href="https://twitter.com/MBoramanikar" target="_blank" rel="noreferrer"><TwitterIcon /></a>
            </div>
            </div>
            </div>
    </div>
    );

}

export default SideBar;
