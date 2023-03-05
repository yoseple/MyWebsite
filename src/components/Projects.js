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
      "No Man's Land": {
        title: "Photography Portfolio",
        desc:
          "A website with my current porfolio in P",
        techStack: "HTML",
        link: "https://www.seplephotography.us/",
        open: "https://www.seplephotography.us/",
        image: "/assets/nomansland.png"
      },
      Truth: {
        title: "truth",
        desc:
          "A three.js simulation of the planet system revolving around a monolith.",
        techStack: "JAVASCRIPT (THREE.JS)",
        link: "https://github.com/gazijarin/truth",
        open: "https://gazijarin.github.io/Truth/",
        image: "/assets/truth.png"
      },
      "Tall Tales": {
        title: "tall tales",
        desc:
          "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
        techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
        link: "https://github.com/gazijarin/TallTales",
        open: "https://talltales.herokuapp.com/",
        image: "/assets/talltales.png"
      },
      Portfolio: {
        title: "portfolio.js",
        desc:
          "A small JS library that helps with clear and succinct data presentation.",
        techStack: "NODE.JS (EXPRESS.JS)",
        link: "https://github.com/gazijarin/Portfolio.js",
        open: "https://afternoon-ocean-92382.herokuapp.com/",
        image: "/assets/portfolio.png"
      }
    };
    const projects = {
      "DN Hardwood Floors": {
        desc:
          "An react-web-app where clients can contact the company and book appointments",
        techStack: "React.js, Node.js, SASS",
        link: "https://github.com/yoseple/dnhardwoodfloors",
        open: "#"
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
          "Worked with a Ahmed Ibreljic to create an App that allows users to login and upload their degree audit and with the use of ML, can show their best route to graduate early. This is an MVC a model view controller enviornment.",
        techStack: "Node.js (Express.js), React.js, Workbench SQL",
        link: "https://github.com/AhmedIbreljic/EduX",
        open: "https://www.ahmedibreljic.me/"
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
        techStack: "Unreal Engine",
        link: "https://github.com/yoseple/BWH1_SPINE-",
        open: ""
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
        {/* <Carousel>
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
        </Carousel> */}
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
