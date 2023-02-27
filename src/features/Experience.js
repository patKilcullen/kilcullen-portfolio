import React, {useEffect} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

import fullstack from '../FullstackCertificate.png'
import '../style/experience.css'

function Experience() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="experience">
      <h1 className='pageTitle'>Experience</h1>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="experienceBox"
          date="Sept/2022 - Feb/2023"
          iconStyle={{ background: "#3e497a", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Fullstack Academy
          </h3>
          <img className="fullstack" src={fullstack} alt="Fullstack Academy Certificate"/>
      <p>Software Engineering Emmerisve Full-Time Bootcamp</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Memoir Writer/Editor 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Freelance
          </h4>
          <ul>
  <li>Crafted and developed engaging story structures that kept prospective readers interested in a client's narrative</li>
  <li>Conducted interviews to extract useful, accurate, and interesting information to add depth, clarity, and color to stories</li>
  <li>Wrote extensive comments, questions, and explanations on multiple drafts to illustrate my thoughts and processes</li>
  <li>Cut memoirs and stories down to ideal length, cutting out as many as 100,000 words while keeping the narrative intact</li>
  <li>Worked extensively to capture a fitting voice for clients, as well as an appropriate tone and writing style</li>
  <li>Researched and cross-checked numerous sources to ensure references and citations were thorough and accurate</li>
  <li>Inspired clients to share my work with their associates, who in turn came to me with their own writing projects</li>
</ul>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Copywriter/Content Writer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Freelance
          </h4>
          <ul>
  <li>Composed compelling advertising copy and descriptions for businesses, products, and events in various industries</li>
  <li>Won a company-wide contest for generating the most engagement from an advertisement for a particular product</li>
  <li>Drafted persuasive emails and proposals in order to sell my clients and better articulate their ideas</li>
  <li>Tailored and refined my writing style to reflect brands and industries and better communicate with unique clientele</li>
  <li>Researched products and services I knew little to nothing about and used that information to construct engaging copy</li>
  <li>Devised clever ways to make both unusual and every-day products sound appealing to their target demographic</li>
</ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Owner at Pat's Pet's Chicago
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Freelance
          </h4>
          <ul>
  <li>Networked and earned the trust of 30+ clients to the extent that they felt safe leaving me with their keys and pets</li>
  <li>Employed two other dog walkers to service a number of my clients, allowing me time to attain more clients</li>
  <li>Maintained an ever-changing schedule for myself and walkers and kept careful track of payments and invoices</li>
</ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className="experienceBox"
          date="2014 - 2018"
          dateStyle={{color: "white"}}
          iconStyle={{ background: "#3e497a", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Columbia College Chicago
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Fine Arts - Fiction Writing
          </h4>

          <p> GPA - 3.7</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;