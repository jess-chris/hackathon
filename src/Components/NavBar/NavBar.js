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
            <NavLink to="#" className="icon solid fa-angle-down">TreePals</NavLink>
            <ul>
              <li><NavLink to="generic.html">About</NavLink></li>
              <li><NavLink to="contact.html">Contact</NavLink></li>
              <li><NavLink to="elements.html">Funding</NavLink></li>
              <li>
                <NavLink to="#">Creators</NavLink>
                <ul>
                  <li><NavLink to="#">Braxton Kappes</NavLink></li>
                  <li><NavLink to="#">Jesse Christensen</NavLink></li>
                  <li><NavLink to="#">Johnathan Yih</NavLink></li>
                  <li><NavLink to="#">Sharon Fang</NavLink></li>
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
