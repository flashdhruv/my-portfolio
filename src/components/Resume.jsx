import React, { Component } from 'react';
import Intro from './Intro';
import BasicInfo from './basicInfo';
import Education from './education';
import Work from './work';
import Skills from './skills';
import Projects from './projects';
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from 'framer-motion';
import Navbar from './navbar';


//import {getResumes} from '../services/fakeResumeService';

class Resume extends Component {
    state = 
    { 
        resumes: {
            name: "Dhruv Bahl",
            bio: `A dedicated and enthusiastic fourth-year university student with a desire to learn and grow in the field of
            Programming and coding, leveraging knowledge to complement my further studies in BSc Computer Science. I am
            currently seeking a summer internship so I can gain some valuable work experience to help expand my current skill
            set, use the perspective I have gained from being an international student as well as diligently use my knowledge and
            experience to benefit the organization I will be part of.`,
            email: "bhldhruv@gmail.com",
            phoneNumber: "2508990360",
            linkedin: "https://www.linkedin.com/in/dhruv-bahl-2a710b175/",
            skills :["Java", "Javascript", "python", "HTML/CSS", "React.js", "C#", "SQL", "MongoDB", "Selenium"],
            workExperience : [
              {
                  jobTitle: "SWE Intern",
                  company: "Microsoft",
                  workDone: [`The main objective of the project was to develop a program that can detect anomalies from transactional data. We were given a stream of financial data through Kusto. this data was filtered through SQL scripts that I specifically set up and then passed onto a analytics page through code my team and I wrote in C#. This is a company requirement and has saved the company time and money by avoiding dealing with potential lawsuits and lost clients.`
                  , `Used the Kusto database to extract the transactional data using the Kusto
                  Query Language.`, `Set up rule-based filtering that included filters based on unusually large purchase orders as well as random spikes in the tax rate. This helped prevent customers from being overcharged and anomalous data from creating issues for teams working further down the pipeline.`,
                  `Technologies used. Kusto DB, Azure App functions, Nugget package, Visual
                  Studio.`]
              },
              {
                jobTitle:"SWE Intern",
                company: "Microsoft",
                workDone: [`I was solely responsible for the creation of an API using C#. The API's role was to change the payment date for an order if a new future date has been provided.
                 The aim was to help reduce clients' products from being disabled and creating a better flow between company and client. `,
                `Additionally, I was responsible for the creation of an end-to-end anomaly detection service. I used technologies such as SCOPE and Azure Data Factory as well as C# to create another API. 
                Unit tests were created for each API as part of the complete development. These make verifying updates to the APIs easier therefore saving the development team time and making it easier to maintain`]
              },
              {
                jobTitle:"Software/Hardware Test Co-op",
                company: "SKYTRAC",
                workDone: [`I was solely responsible for creating a python script to digest a csv that was created during a test case for the ISAT-200 and return key time periods based on changing parameters. 
                This helped reduce the tester's time spent by roughly 20 minutes each time the test was run compared to manually scaling through a large csv file.`,
                `I added to Sktrac's suite of Selenium test cases to test their flight tracking website. This will help reduce the time spent on these tests by testers by up to 200 hours.`,
                ` I contributed to the development of a software test tool (Avionic Data Bus Simulator) using C#. On completion, the test tool is estimated to be able to create 2000 tests a day making it extremely valuable for the company.`]
              }
            ],
            education: [
              {
                  schoolName: "UBCO",
                  degree: "BSc",
                  relevantCourses: ["Math up to Calc 3 ", " Web dev ", " intro to programming ", " data structures & algorithms "]
              }
            ]
            ,
            projects: [
              {
                  projectName: "My Resume in React",
                  technologyUsed: ["React", "HTML/CSS", "Javascript"],
                  repoLink:"https://github.com/flashdhruv/Resume-With-React",
                  about: [`Resume builders online are often paid or have features locked behind pay walls. 
                    I wanted to have complete control over my resume and therefore decided to create it using React.js, HTML and Bootstrap.`,
                   `The aim is to make this a resume builder and show my ability to create a full-stack application`,
                    `It differs as the webpage allows recruiters to easily access the various projects I've worked on through search bars and navigation to GitHub repos as well as view my past work experiences.`]
              },
              {
                projectName:"Snake",
                technologyUsed:["Java"],
                repoLink:"https://github.com/flashdhruv/Java-OOP-Snake",
                about:[`The aim of the project is to find a fun way for me to practice my understanding of Java's OOP concepts by recreating the snake game.`,
                    `I was introduced to Java's GUI through JPanel, JFrames, etc.`,
                    `This is a continuous project as I aim to add more features to make it more fun and continuously tap into the creative part of my mind.`]
              }
            ]
          }
    } 

    // componentDidMount(){
    //     this.setState({ resumes: getResumes()} );
    // }

    render() { 
        
        return (
        <motion.div exit={{opacity: 0}}>
            
            <Intro name = {this.state.resumes.name} bio = {this.state.resumes.bio}/>
            <BasicInfo email = {this.state.resumes.email} linkedin = {this.state.resumes.linkedin} phone={this.state.resumes.phoneNumber}/>
            <div className="row align-items-start">
                <div className='col'>
                    <Education education = {this.state.resumes.education}/>
                    <Work work={this.state.resumes.workExperience}/>
                </div>
                <div className='col'>
                    <Skills skills={this.state.resumes.skills}/>
                <   Projects projects={this.state.resumes.projects}/>
                </div>
            </div>
        </motion.div>
        );
    }
}
 
export default Resume;