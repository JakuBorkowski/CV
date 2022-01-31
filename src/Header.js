import photo from "./img/photo.png"

function Header() {
  const name = "Jakub Borkowski"
  return (
  <div className="Header">
    <img className="facePhoto" alt="facePhoto" src={photo}/>
    <p className="name">{name}</p>
  </div>
  );
}

export default Header;
