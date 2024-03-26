import "./Navbar.css"

// functional component
const Navbar = () => {
    return (
  <nav className="navbar">
    <ul>
      <li>
        <a href="#">Home</a>
        </li>
      <li> <a href="#">About</a></li>
      <li><a href="#">login</a></li>
    </ul>
  </nav>
    );
  };

export default Navbar;