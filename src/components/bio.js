import aboutus from "../json/aboutus.json"
import { BioContainer, BioImage, BioDescriptionContainer } from "../styledcomponents/Bio"


export function Bio(props){
return (<>

<BioContainer>
    <h1 style={{"font-family": "'Comfortaa', cursive;"}}> {aboutus.name}</h1><h5>{aboutus.email}</h5><br></br>
    <BioImage src={aboutus.image}/>
    <br></br><br></br>
    <h3>About Me</h3><br></br>
    <BioDescriptionContainer>{aboutus.bio}</BioDescriptionContainer>
</BioContainer>

</>)
}