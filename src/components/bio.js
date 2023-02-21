import aboutus from "../json/aboutus.json"
import { BioContainer, BioImage, BioDescriptionContainer, BioBox } from "../styledcomponents/Bio"


export function Bio(props){
return (<>
<div id="bio">
    <BioBox/>
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
        {/* {aboutus.bio} */}
        <h5>Hey there! My name is Rawle Becerril and after nearly a decade of professional and leadership experience in the radio and music industries, I've decided to set my sights on a whole new challenge in the world of Software Development. <br></br><br></br>
        
        I am a highly adaptable Full-Stack web developer building creative, responsive, and highly-functional applications using HTML, CSS, and JavaScript with React. When I'm not building, I enjoy cooking anything from shrimp tacos to Beef Wellington, gaming, and making and performing electronic music!</h5>
    </BioDescriptionContainer>
    <br></br>
</BioContainer>
</div>

</>)
}