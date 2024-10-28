import "./header.css";
import imageProfile from "../assets/MyImages.jpg"
function Header() {
  return (
  
    <nav>
      <img src={imageProfile} alt="Logo" />
      <div className="header-last-part">
        <div>
          <h1>Abdeljalil rahil</h1>
          <h4>Frontend Devs</h4>
          <p>rahilabdo17@gmail.com</p>
        </div>

        <div className="header-lastpart-button">
          <button className="btn-email">
            <a href="">Email</a>
          </button>
          <button className="btn-linkdin">
            <a href="">Linkdin</a>
          </button>
        </div>
      </div>
    </nav>
    
  );
}

export default Header;
