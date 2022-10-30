import { NavLink } from 'react-router-dom';

function Supporters() {
  return (
    <>

        <section id="banner">
          {/* <h2>TreePals</h2> */}
          <h2>Supporters</h2>
          <p>Businesses that have contributed to the conservation of tree canopy in Bellevue</p>
        </section>


        <section id="main" className="container">

          <section className="box special">
            <header className="major">
              <h2>
              Special thanks to these businesses who have provided resources
                <br />
                for Bellevue's tree canopy conservation non-profit organizations
              </h2>
              <p>
                <img></img>
                We believe in transparency. The business and contributions made will be listed below.
              </p>
            </header>
          </section>

          <section className='box special'>
            <p>
              <img></img>
              Business Logo and the contributions made to which non-profits here.
            </p>
            <p>
              <img></img>
              Business Logo and the contributions made to which non-profits here.
            </p>
            <p>
              <img></img>
              Business Logo and the contributions made to which non-profits here.
            </p>
            <p>
              <img></img>
              Business Logo and the contributions made to which non-profits here.
            </p>
            <p>
              <img></img>
              Business Logo and the contributions made to which non-profits here.
            </p>
            <p>
              <img></img>
              Business Logo and the contributions made to which non-profits here.
            </p>
          </section>

        </section>

      </>
   )
};

export default Supporters;
