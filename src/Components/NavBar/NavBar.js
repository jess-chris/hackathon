import { NavLink } from 'react-router-dom';
import treepals from '../../assets/images/treepals.png';


function NavBar() {

  return (
    <header id="header" className="alt">
      <NavLink to="/"><img src={treepals}></img></NavLink>
      <nav id="nav">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li>
            <NavLink to="#" className="icon solid fa-angle-down">Layouts</NavLink>
            <ul>
              <li><NavLink to="generic.html">Generic</NavLink></li>
              <li><NavLink to="contact.html">Contact</NavLink></li>
              <li><NavLink to="elements.html">Elements</NavLink></li>
              <li>
                <NavLink to="#">Submenu</NavLink>
                <ul>
                  <li><NavLink to="#">Option One</NavLink></li>
                  <li><NavLink to="#">Option Two</NavLink></li>
                  <li><NavLink to="#">Option Three</NavLink></li>
                  <li><NavLink to="#">Option Four</NavLink></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><NavLink to="#" className="button">Sign Up</NavLink></li>
        </ul>
      </nav>
    </header>
  )



}


export default NavBar;
