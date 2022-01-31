import cellphone from "./img/cellphone.png"
import mail from "./img/mail.png"
import reactIcon from "./img/React-icon.svg.png"
import htmlIcon from "./img/html-5.png"
import jsIcon from "./img/java-script.png"
import cssIcon from "./img/css-3.png"
import eng from "./img/eng.png"

function Sidebar() {
  const data = [
    {
      id:0,
      contactName:"telefon",
      contact:"000 000 000",
      icon:cellphone
    },
    {
      id:1,
      contactName:"e-mail",
      contact:"000 000 000",
      icon:mail

    }
  ]
  const dataSkils =[
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
      skillLvl:2,
      icon:cssIcon
    },
    {
      id:3,
      skillName:"HTML",
      skillLvl:3,
      icon:htmlIcon
    },
    {
      id:4,
      skillName:"English",
      skillLvl:7,
      icon:eng
    },
 
  ]
  const skillBarId = [1,2,3,4,5,6,7,8,9,10]
  return (
  <>
  <div className="Sidebar">
    <ul>
      {data.map(data=> <li className="conactLi" key={data.id}>
        <img className="contactImg" src={data.icon} alt={data.contactName}/>
        <p>
          {data.contactName}
        </p>
        <p>
          {data.contact}
        </p>
      </li>)}
    </ul>
    <p className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <ul>
      {dataSkils.map(data=> <li className="conactLi" key={data.id}>
        <img className="skillImg" src={data.icon} alt={data.contactName}/>
        <div className="skilNameAndSkillBarContener">
        <p>{data.skillName}</p>
       <ul className="skillBarUl">
         {skillBarId.map(skillBarId=><li key={skillBarId} className={skillBarId > data.skillLvl ? "emptyBar":"fullBar"}/>)}
       </ul>
       </div>
      </li>)}
    </ul>
  </div>
  </>
  );
}

export default Sidebar;
