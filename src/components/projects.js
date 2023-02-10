import projects from "../json/projects.json"
import { ProjectsContainer, ProjectCard, ProjectLink, ProjectDescription, ProjectLinkContainer} from "../styledcomponents/Projects"

export default function Projects(props){
    return (
    
    <ProjectsContainer>
        
        {
            projects.map((project) => {
                return <ProjectCard key={project.name}>
                    <h3>{project.name}</h3>
                    <img src={project.image} alt="whatup"/>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectLinkContainer>
                        <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">Github</ProjectLink>
                        <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">Live Site</ProjectLink>
                    </ProjectLinkContainer>
                </ProjectCard>
            })
        }
    </ProjectsContainer>
    
    )
}