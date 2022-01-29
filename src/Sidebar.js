import cellphone from "./img/cellphone.png"
import mail from "./img/mail.png"
function Sidebar() {
  const data = [
    {
      id:0,
      contactName:"Telefon",
      contact:"000 000 000",
      icon:cellphone
    },
    {
      id:1,
      contactName:"Mail",
      contact:"000 000 000",
      icon:mail

    }
  ]
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

  </div>
  </>
  );
}

export default Sidebar;
