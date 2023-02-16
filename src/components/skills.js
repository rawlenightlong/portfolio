import { SkillsContainer } from "../styledcomponents/Skills";


export default function Skills(props){

    return(
        <div className="skillsBox" id="skills">
             <div className="technicalStack"><h2>Technical Stack</h2><br></br><br></br></div>
           <SkillsContainer> 
           <div class="skillIcon"><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/JavaScript.svg"/> Javascript</div>
           <div class="skillIcon"><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/HTML.svg"/> HTML</div>
           <div class="skillIcon"><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/CSS.svg"/>CSS</div>
           <div class="skillIcon"><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"/>ReactJS</div>
          <div class="skillIcon"><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/MongoDB.svg"/>MongoDB</div>
           <div class="skillIcon"><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NodeJS-Dark.svg"/>Node.js</div>
           <div class="skillIcon">Python<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Python-Dark.svg"/></div>
           <div class="skillIcon">PostgreSQL<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/PostgreSQL-Dark.svg"/></div>
           <div class="skillIcon">Django<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Django.svg"/></div>
           <div class="skillIcon">Express.js<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/ExpressJS-Dark.svg"/></div>
           <div class="skillIcon">jQuery<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/JQuery.svg"/></div>
           <div class="skillIcon">Tailwind<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/TailwindCSS-Dark.svg"/></div>
           </SkillsContainer>
        </div>
    )
}