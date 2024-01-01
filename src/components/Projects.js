import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Photography ": {
        title: "Photography Portfolio",
        desc:
          "A website with my current porfolio in Photography",
        techStack: "HTML",
        link: "https://www.seplephotography.us/",
        open: "https://www.seplephotography.us/",
        image: "/assets/photography.png"
      },
      Truth: {
        title: "BWH1",
        desc:
          "A three.js simulation of the Spine Vertebrae.",
        techStack: "JAVASCRIPT (THREE.JS)",
        link: "google.com",
        open: "google.com",
        image: "/assets/bwh3.png"
      },
      "EduX": {
        title: "Edux",
        desc:
          "AI Web app that show students the best route to graduate quicker.",
        techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
        link: "https://www.edux.ai",
        open: "https://www.edux.ai",
        image: "/assets/edux.png"
      },
      Portfolio: {
        title: "Besieged Bounty",
        desc:
          "A multiplayer 1-4 player game, survival based pirate game.",
        techStack: "Unity",
        link: "https://yoseple.itch.io/pirate-bounty",
        open: "https://yoseple.itch.io/pirate-bounty",
        image: "/assets/game.png"
      }
    };
    const projects = {
      "Besieged Bounty": {
        desc:
          "A Multiplayer Survival based game, pirate hunting and treasure hunting",
        techStack: "Unity, C#",
        link: "#",
        open: "https://yoseple.itch.io/pirate-bounty"
      },
      "8 Puzzle": {
        desc:
          "An A* search algorithm to solve the 8 puzzle problem greedily with the use of Breadth First Search.",
        techStack: "Java",
        link: "https://github.com/yoseple/8-puzzle",
        open: "https://github.com/yoseple/8-puzzle"
      },
      "EduX": {
        desc:
          "Colloborated with a team to create an App that allows users to login and upload their degree audit and with the use of ML, can show their best route to graduate early.",
        techStack: "Node.js (Express.js), React.js, Workbench SQL, Streamlit",
        link: "https://github.com/AhmedIbreljic/EduX",
        open: "https://www.edux.ai"
      },
      "Photography Website": {
        desc:
          "An webapp that showcases my portfolio in photography",
        techStack: "HTML, CSS, Javascript",
        link: "https://github.com/yoseple/yoseplephotography",
        open: "https://www.seplephotography.us"
      },
      "BWH1-Spine": {
        desc:
          "Created an app using Game Engines for nuero-radiologists to help visualize the lower lumbar spine and pinpoint where the pain during certain movements. This app mimics and models the lower lumbar spine kinematic movements.",
        techStack: "Unity",
        link: "https://github.com/yoseple/BWH1_SPINE-",
        open: "https://yoseple.itch.io/bwh1-updated2"
      },  
      "Markov Model": {
        desc:
          "Used the Markov Model ML model that reads in all text and predicts the next word based on the laplace rule",
        techStack: "Java",  
        link: "",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        { <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> }
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
