import { NavLink } from 'react-router-dom';

function HomePage() {

  return (
    <>

      <section id="banner">
        {/* <h2>TreePals</h2> */}
        <h2>Branching together.</h2>
        <p>Getting businesses involved in the tree canopy conservation of Bellevue</p>
        <ul className="actions special">
          <li>
            <NavLink to="/supporters" className="button">Supporters</NavLink>
          </li>
          <li>
            <NavLink to="/nonprofits" className="button">Non-profits</NavLink>
          </li>
        </ul>
      </section>


      <section id="main" className="container">

        <section className="box special">
          <header className="major">
            <h2>
            An easy way for businesses to connect with non-profit
              <br />
              organizations specialized in tree canopy conservation
            </h2>
            <p>
              Explore the various non-profit organizations in Bellevue that emphasize the importance
              of tree canopy conservation and protection.
            </p>
          </header>
          <span className="image featured">
            <img src="images/pic01.jpg" alt="" />
          </span>
        </section>

        <section className="box special features">
          <div className="features-row">
            <section>
              <span className="icon solid major fa-tree accent2"></span>
              <h3>Tree conservation</h3>
              <p>Many residents of Bellevue are shocked when they learn about Bellevue's lax regulations for cutting down significant trees.</p>
            </section>
            <section>
              <span className="icon solid major fa-seedling accent3"></span>
              <h3>Planting new trees</h3>
              <p>The city of Bellevue has a goal of achieving a tree canopy that covers 40% of the city's land area by 2050.</p>
            </section>
          </div>
          <div className="features-row">
            <section>
              <span className="icon solid major fa-landmark accent4"></span>
              <h3>Greener policies</h3>
              <p>The push for greener policies continues as increased development pushes for increased destruction of tree canopy in Bellevue.</p>
            </section>
            <section>
              <span className="icon solid major fa-bolt accent5"></span>
              <h3>Spreading awareness</h3>
              <p>Trees help provide shade, cleaner air, and more temperate conditions in surrounding areas.</p>
            </section>
          </div>
        </section>

        {/* <div className="row">
          <div className="col-6 col-12-narrower">

            <section className="box special">
              <span className="image featured"><img src="images/pic02.jpg" alt="" /></span>
              <h3>Sed lorem adipiscing</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              <ul className="actions special">
                <li>
                  <NavLink to="#" className="button alt">Learn More</NavLink>
                </li>
              </ul>
            </section>

          </div>
          <div className="col-6 col-12-narrower">

            <section className="box special">
              <span className="image featured"><img src="images/pic03.jpg" alt="" /></span>
              <h3>Accumsan integer</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              <ul className="actions special">
                <li>
                  <NavLink to="#" className="button alt">Learn More</NavLink>
                </li>
              </ul>
            </section>

          </div>
        </div> */}

      </section>

    </>
  )

}

export default HomePage;
