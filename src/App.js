import React, { Component, Suspense } from 'react';
import Sidebar from './components/Sidebar';
import Landing from './components/Landing';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Awards from './components/Awards';
import profileData from './profileData.json';
import { withTranslation, Trans } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      projects : profileData.projects,
      interests : profileData.interests,
      awards : profileData.awards
    }
  }
  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div>
          <h2>
            <Trans i18nKey="welcomeMsg" />
          </h2>
          <Trans i18nKey="nested.startMsg" />
          <br />
          <LanguageSelector />
        </div>
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Projects projects={this.state.projects} />
          <hr className="m-0" />
          <Experience experience={this.state.experience} />
          <hr className="m-0" />
          <Education education={this.state.education}/>
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Interests interests={this.state.interests} />
          {/* <hr className="m-0" />
          <Awards awards={this.state.awards} /> */}
        </div>
      </div>
    );
  }
}

export default withTranslation("translations")(App);