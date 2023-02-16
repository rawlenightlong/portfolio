import projects from "../json/projects.json"
import { ProjectsContainer, ProjectCard, ProjectLink, ProjectDescription, ProjectLinkContainer, ProjectTitleContainer} from "../styledcomponents/Projects"
import {BsBoxArrowInUpRight} from "react-icons/bs"

export default function Projects(props){
    return (<>
    
    <ProjectTitleContainer>
            <h2>Projects</h2>
        </ProjectTitleContainer>
        
    <ProjectsContainer id="projects">
      
        
        {
            projects.map((project) => {
                return <ProjectCard key={project.name}>
                    <h3>{project.name}</h3>
                    <img src={project.image} alt="whatup"/>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectLinkContainer>
                        <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">Github <BsBoxArrowInUpRight/></ProjectLink>
                        <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">Live Site <BsBoxArrowInUpRight/></ProjectLink>
                    </ProjectLinkContainer>
                </ProjectCard>
            })
        }
    </ProjectsContainer>
    
    </>)
}