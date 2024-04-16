import { FaBookReader } from "react-icons/fa";
import Timeline from "./Timeline";
// import Skill from "./Skill";
import { useEffect, useState } from "react"
import SkillsScroll from "./SkillsScroll";

const Resume = () => {
  const [skills , setSkills ] = useState([]);
  useEffect(()=> {
    fetch('./data/skills.json').then(res => res.json()).then(data => {
      console.log(data)
      setSkills(data)
    });
  }, [])
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <FaBookReader />
          </div>
         <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <Timeline
          title="Shree L R Tiwari College of Engineering"
          date="2019-2023"
          description="I have completed my bachelors degree from this respective institute."
          />
          <Timeline
          title="Nirmala Memorial College of Science and Commerce"
          date="2017-2019"
          description="I have completed my higher secondary degree from this respective institute."
          />
          <Timeline
          title="St. Soldier Public School"
          date="2007-2017"
          description="I have completed my schooling from this respective institute."
          />
        </ol>
      </div>
      {/* experience */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <FaBookReader />
          </div>
         <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <Timeline
          title="Internkaksha-Web Developer Intern"
          date="September 2023 - December 2023"
          description="During my web development internship, I gained hands-on experience building and contributing to web applications. I worked on tasks like front-end development using HTML, CSS, and JavaScript, while also collaborating with the team on back-end functionalities to ensure a seamless user experience. This internship allowed me to apply my knowledge in real-world projects and refine my web development skills."
          />
           <Timeline
          title="F13 Technologies-AWS Cloud-Developer Intern"
          date="January 2024- April 2024"
          description="In my AWS Cloud development internship, I focused on building and deploying applications on the AWS cloud platform. I leveraged AWS services like EC2, S3, and RDS to design, develop, and implement cloud-based solutions.This experience allowed me to gain expertise in cloud computing and contribute to scalable, efficient cloud infrastructure."
          />
        </ol>
      </div>
      {/* skills-section */}
      {/* <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
        <Skill title="HTML" value={80}/>
        <Skill title="CSS" value={80}/>
        <Skill title="Javascript" value={70}/>
        <Skill title="React" value={70}/>
        <Skill title="Python" value={70}/>


        <Skill title="Nodejs" value={60}/>
        <Skill title="Mysql" value={80}/>
        <Skill title="MongoDB" value={80}/>
        
       
        <Skill title="Git" value={80}/>
        <Skill title="Docker" value={80}/>
        <Skill title="Jenkins" value={80}/>
        <Skill title="Postgresql" value={80}/>
        <Skill title="AWS" value={70}/>
        </ul>
      </div> */}
      <section className="skillsScroll">
       <h3 className="h3 skillsScroll-title">Skills</h3>
       <ul className="skillsScroll-list has-scrollbar">
        {
          skills.map((skills,index)=>(
            <SkillsScroll key={index}
             name={skills.name}
             avatar={skills.avatar} 
             level={skills.level}
             />
          ))
        }
       </ul>
     </section>
    </section>
    
  )
}

export default Resume