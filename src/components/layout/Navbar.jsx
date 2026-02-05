import { useAuth } from "../../context/AuthContext";
import "./navbar.css";
import logoImage from "../../assets/images/logo.png"; 
import "aos/dist/aos.css"; // Import AOS styles

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="logo">
        <img data-aos="fade-down"
          src={logoImage}   
          alt="App Logo"
          className="logo-image"
        />
      </div>

      <div className="nav-right">
        <span data-aos="fade-down" >
          {user?.name
            ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
            : ""}
        </span>

        <button data-aos="fade-down" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
