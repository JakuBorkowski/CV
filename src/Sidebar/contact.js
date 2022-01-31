import cellphone from "../img/cellphone.png"
import mail from "../img/mail.png"

function Contact() {
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
    return (

   <ul>
    {data.map(data=> <li className="conactLi" key={data.id}>
        <img className="contactImg" src={data.icon} alt={data.contactName}/>
        <p>{data.contactName}</p>
        <p>{data.contact}</p>
    </li>)}
</ul>
 
    );
  }
  
  export default Contact;
