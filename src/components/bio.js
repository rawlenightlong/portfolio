import aboutus from "../json/aboutus.json"
import { BioContainer, BioImage, BioDescriptionContainer } from "../styledcomponents/Bio"


export function Bio(props){
return (<>

<BioContainer>
    <h1> {aboutus.name}</h1><h4>{aboutus.email}</h4><br></br>
    <BioImage src={aboutus.image}/>
    <br></br><br></br>
    <BioDescriptionContainer>{aboutus.bio}</BioDescriptionContainer>
</BioContainer>

</>)
}