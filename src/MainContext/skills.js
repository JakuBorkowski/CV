import reactIcon from "../img/React-icon.svg.png"
import htmlIcon from "../img/html-5.png"
import jsIcon from "../img/java-script.png"
import cssIcon from "../img/css-3.png"
import eng from "../img/eng.png"

function Skills() {
    const data =[
        {
          id:0,
          skillName:"React",
          skillLvl:3,
          icon:reactIcon
        },
        {
          id:1,
          skillName:"Javascript",
          skillLvl:4,
          icon:jsIcon
        },
        {
          id:2,
          skillName:"CSS",
          skillLvl:4,
          icon:cssIcon
        },
        {
          id:3,
          skillName:"HTML",
          skillLvl:5,
          icon:htmlIcon
        },
        {
          id:4,
          skillName:"English",
          skillLvl:6,
          icon:eng
        },
     
      ]
      const skillBarId = [1,2,3,4,5,6,7,8,9,10]


    return (
    
    <ul className="skills">
      {data.map(data=> <li className="conactLi" key={data.id}>
        <img className="skillImg" src={data.icon} alt={data.contactName}/>
        <p>{data.skillName}</p>
       <ul className="skillBarUl">
         {skillBarId.map(skillBarId=><li key={skillBarId} className={skillBarId > data.skillLvl ? "emptyBar":"fullBar"}/>)}
       </ul>
      </li>)}
    </ul>
    );
  }
  
  export default Skills;
  