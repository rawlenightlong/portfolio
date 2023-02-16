import aboutus from "../json/aboutus.json"
import { BioContainer, BioImage, BioDescriptionContainer, BioPictureContainer } from "../styledcomponents/Bio"


export function Bio(props){
return (<>
<br></br><br></br>
<div id="bio">
<BioContainer>

   <br></br><br></br>
    <BioImage src={aboutus.image}/>
    

    
    <br></br><br></br><br></br>
    
    <BioDescriptionContainer>
        <h1 style={{"font-family": "'Comfortaa', cursive;"}}> {aboutus.name}</h1>
        <h5>{aboutus.email}</h5>
        <br></br><br></br>
        <h3>About Me</h3>
        <br></br>
        {aboutus.bio}
    </BioDescriptionContainer>
    <br></br>
</BioContainer>
</div>

</>)
}