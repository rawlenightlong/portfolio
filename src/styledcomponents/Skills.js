import styled from "styled-components"
import theme from "../json/theme.json"

export const SkillsContainer = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 50px;
margin: 0 auto;
margin-top: 40px;
padding-bottom: 10px;
text-align: center;
background-color: #fae29b;
width: 90%;
color: ${theme.color1};
img {
    width: 40%;
}
.skillIcon{
    margin: auto;
    height: 50%;
    width: 250px;
    transition: .2s;
    :hover {
        transform: scale(1.15);
        transition: .2s;
    }
}

@media all and (max-width: 1500px) {
.skillIcon{
    width: 150px;
}
}
  `