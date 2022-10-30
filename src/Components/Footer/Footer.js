import { NavLink } from 'react-router-dom';

function Footer() {


  return (
    <footer id="footer">
      <ul className="icons">
        <li><NavLink to="#" className="icon brands fa-twitter"><span className="label">Twitter</span></NavLink></li>
        <li><NavLink to="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></NavLink></li>
        <li><NavLink to="#" className="icon brands fa-instagram"><span className="label">Instagram</span></NavLink></li>
        <li><NavLink to="#" className="icon brands fa-github"><span className="label">Github</span></NavLink></li>
        <li><NavLink to="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></NavLink></li>
        <li><NavLink to="#" className="icon brands fa-google-plus"><span className="label">Google+</span></NavLink></li>
      </ul>
      <ul className="copyright">
        <li>&copy; TreePals. All rights reserved.</li>
      </ul>
    </footer>
  )

}

export default Footer;