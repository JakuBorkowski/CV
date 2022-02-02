import photo from "./img/photo.png"

function Header() {
  const name = "Jakub Borkowski"
  return (
  <div className="Header">
    <img className="facePhoto" alt="facePhoto" src={photo}/>
    <div className="namePortfolioContener">
    <p className="name">{name}</p>
    <p><a target="blank" href="https://github.com/JakuBorkowski?tab=repositories">Portfolio</a></p>
    </div>
  </div>
  );
}

export default Header;
