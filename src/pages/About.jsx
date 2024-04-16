import { useEffect, useState } from "react"
import Service from "./Service";
// import SkillsScroll from "./SkillsScroll";

const servicesData = [
  {
    icon: "/images/webdev.svg",
    title: "Web Dev",
    description: "Frontend enthusiast (HTML, CSS, JS). Eager to build user-friendly React applications. Version control with Git. Fast learner, passionate about innovative UIs."
  },
  {
    icon: "/images/aws.svg",
    title: "Cloud Development",
    description: "AWS cloud proficient (EC2, S3, Lambda,ELB,RDS,DynamoDB) for scalable solutions. Eager to design, deploy, & manage cost-effective apps. Fast learner with strong AWS foundation."
  },
  {
    icon: "/images/devops.svg",
    title: "CI-CD",
    description: "DevOps enthusiast with strong AWS (EC2, S3, Lambda) and DevOps tools (Git, Jenkins, Docker). Eager to automate deployments, manage infrastructure, and contribute to CI/CD pipelines. Fast learner with a passion for efficiency and collaboration."
  }
];


const About = () => {
  const [skills , setSkills ] = useState([]);
  useEffect(()=> {
    fetch('./data/skills.json').then(res => res.json()).then(data => {
      console.log(data)
      setSkills(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
        <p>Hi , I am an enthusiast Computer Engineer graduate , enhancing and increasing my hands-on skill particularly in the field of Cloud Computing and DevOps.</p>
        
        <p>I have develop and deployed cloud-native applications and also manages databases in the cloud like AWS RDS and DynamoDb, I also have hands-on experience on some Devops technologies like Docker , Jenkins , Grafana[for Monitoring] and also done CI/CD using Git , GitHub-Actions as well as Code-Commit in AWS </p>
      </section>



    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">Technical Profiency</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - skills
    --> */}
     {/* <section className="skillsScroll">
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
     </section> */}
    

  </article>
  )
}

export default About