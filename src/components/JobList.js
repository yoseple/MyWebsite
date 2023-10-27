import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    enLabel: {
      jobTitle: "Software Development Engineer Intern @",
      duration: "MAY 2022 - DEC 2022",
      desc: [
        "Developed and implemented a Microsoft Word-like text box interface for users, facilitating easy toggling on and off during label edits, thereby improving the user experience.",
"Engineered a robust API to handle label errors, effectively capturing critical data, and enhancing the visibility of such errors by presenting them on the front-end via an intuitive table layout.",
"Authored comprehensive documentation for new features, ensuring streamlined understanding and user adoption while maintaining system transparency for stakeholders and clients.",
" Upheld the reliability and accuracy of newly implemented features through rigorous unit testing, ensuring seamless integration and high-quality software performance."
      ]
    },
    Aday: {
      jobTitle: "Software Engineering Intern @",
      duration: "SEPT 2021 - DEC 2021",
      desc: [
        " Architected and developed a robust back-end infrastructure using Node.js, employing RESTful API patterns to seamlessly relay data to the front-end, thereby enhancing data-driven interactions.",
        "Implemented Machine Learning algorithms, specifically utilizing the Decision Tree model, to perform topic selection for users, boosting the efficacy of studying by providing targeted content based on predictive analysis.",
      
      ]
    },
   
    "Brighams Womens Hospital": {
      jobTitle: "Research Developer @",
      duration: "SEPT 2019 - APR 2020",
      desc: [
        "Engineered a specialized software solution that models the kinematics of the lower lumbar spine, designed to visually represent potential areas of pain or discomfort in joints or nerves. This tool has become instrumental for researchers and surgeons in identifying and addressing patient-specific issues.",
        "Collaborated with a Harvard professor to gather comprehensive data through CT scans, subsequently utilizing 3D Slicer to create detailed segmentations of the lower lumbar spine, enhancing the quality and precision of surgical preparation and research.",
        "Automated previously manual steps in the 3D Slicer workflow using Python scripts, substantially reducing time spent on preparatory tasks and increasing overall productivity and efficiency in data processing."
      ]
    },
    "University of Massachusetts Boston": {
      jobTitle: "AV Office @",
      duration: "SEPT 2021 - Current",
      desc: [
        "Ability to fix onsite technical difficulties in the classrooms",
        "Maintain and handle database of items that we check out to professors",
        "Developed a database for checked out items and checked in items using Node.js and SQL"
      ]
    },
   
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
