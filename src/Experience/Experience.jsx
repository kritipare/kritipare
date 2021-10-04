import { Badge, Button, Grid } from "@material-ui/core";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { Button, Badge } from "react-bootstrap";
// import { Reacticon } from "./reacticon.svg";/
import useStyles from './styles';

const Experince = () => {
  const classes = useStyles();
  return (
    <Grid container  className={classes.container} spacing={4} id="experience" >
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ padding: '8px', top: '100px', position: 'relative', display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >
      <h2 className="container text-center">Experience</h2>
      <VerticalTimeline>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan,2021 - Present"
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className="fab fa-angular experience-icon"></i>}
          key={0}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            "MAINTECH"
          </div>

          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            "WORK TITLE"
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            "WORK COMPANY"
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>"TECH"</div>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan,2021 - Present"
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className="fab fa-angular experience-icon"></i>}
          key={0}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            "MAINTECH"
          </div>

          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            "WORK TITLE"
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            "WORK COMPANY"
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>"TECH"</div>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May,2021 - present"
          fontColor="Black"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          {/* <Badge className={classes.badge}>React.js</Badge> 
          <Badge className={classes.badge}>Nodejs</Badge> */}
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">GammaStack</h4>
          <p>
          ● Developing the frontend using React.js and Material-UI with Redux for state management.
          </p>
          <p>
          ● Integrating backend with REST API’s and GraphQL .
          </p>
          {/* <Button variant="outline-light">Website</Button>{" "} */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb-May 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          {/* <Badge className={classes.badge}>React.js</Badge> <Badge className={classes.badge}>Nodejs</Badge> */}
          <h3 className="vertical-timeline-element-title">Software Engineer Trainee</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>● Trained as a full stack Node.js and React.js developer.</p>
          <p>● Building REST APIs on the backend using Node.js.</p>
          <p>● Using Sequelize as the ORM with MySQL as the database.</p>
          <p>● React.js and Material-UI with Redux and Redux- Saga for state management for frontend.</p>
          <Button variant="outline-success">Source Code</Button>{" "}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="Feb-May 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          
          {/* <Badge className={classes.badge}>Nodejs</Badge> */}
          <h3 className="vertical-timeline-element-title">Social Media App</h3>

          <Badge className={classes.badge}>Technologies used: ReactJs, Node.js, Express.js, MongoDB, JSON Web
          Token, REST APIs.</Badge> 
          
          <h4 className="vertical-timeline-element-subtitle"></h4>
          {/* <p>Technologies used: ReactJs, Node.js, Express.js, MongoDB, JSON Web Token, REST APIs.</p> */}
          <p>● This web application can be used to post and like pictures. </p>
          <p>● API endpoints are authenticated using JSON web tokens.</p>
          <p>● User accounts are managed using the Redux toolkit.</p>
          <Button variant="outline-success">Source Code</Button>{" "}
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement> */}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement> */}
        
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement> */}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement> */}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement> */}
        {/* <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        /> */}
      </VerticalTimeline>
      </Grid>
    </Grid>
  );
};

export default Experince;
