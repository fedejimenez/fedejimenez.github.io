import React, { Component } from 'react';
import image from '../assets/profile.jpg';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Trans } from "react-i18next";
import LanguageSelector from "./LanguageSelector";



class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.sidebarData = props.sidebarData;
  }
  
  
  render() {
    let duration = 700;
    let offset = 0;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt=""></img>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link activeClass="active" className="nav-link js-scroll-trigger" href="#about" to="about" spy={true} smooth={true} offset={offset} duration={duration}>
              <Trans i18nKey="sidebar.about" /></Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" className="nav-link js-scroll-trigger" href="#projects" to="projects" spy={true} smooth={true} offset={offset} duration={duration}>
              <Trans i18nKey="sidebar.projects" /></Link>            
            </li>
            <li className="nav-item">
              <Link activeClass="active" className="nav-link js-scroll-trigger" href="#experience" to="experience" spy={true} smooth={true} offset={offset} duration={duration}>
              <Trans i18nKey="sidebar.experience" /></Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" className="nav-link js-scroll-trigger" href="#education" to="education" spy={true} smooth={true} offset={offset} duration={duration}>
              <Trans i18nKey="sidebar.education" /></Link>            
            </li>
            <li className="nav-item">
              <Link activeClass="active" className="nav-link js-scroll-trigger" href="#skills" to="skills" spy={true} smooth={true} offset={offset} duration={duration}>
              <Trans i18nKey="sidebar.skills.title" /></Link>            
            </li>
            <li className="nav-item">
              <Link activeClass="active" className="nav-link js-scroll-trigger" href="#interests" to="interests" spy={true} smooth={true} offset={offset} duration={duration}>
              <Trans i18nKey="sidebar.interests" /></Link>            
            </li>
            {/* <li className="nav-item">
              <Link activeClass="active" className="nav-link js-scroll-trigger" href="#awards" to="awards" spy={true} smooth={true} offset={offset} duration={duration}>
              Awards</Link>            
            </li> */}
            <li className="nav-item">
            <Link activeClass="active" className="nav-link js-scroll-trigger" href="#" to="#">
              <LanguageSelector />
            </Link> 
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;