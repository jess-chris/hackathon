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
            <NavLink to="#" className="button">Supporters</NavLink>
          </li>
          <li>
            <NavLink to="#" className="button">Non-profits</NavLink>
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
              Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc ornare<br />
              adipiscing nunc adipiscing. Condimentum turpis massa.
            </p>
          </header>
          <span className="image featured">
            <img src="images/pic01.jpg" alt="" />
          </span>
        </section>

        <section className="box special features">
          <div className="features-row">
            <section>
              <span className="icon solid major fa-bolt accent2"></span>
              <h3>Magna etiam</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
            <section>
              <span className="icon solid major fa-chart-area accent3"></span>
              <h3>Ipsum dolor</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
          </div>
          <div className="features-row">
            <section>
              <span className="icon solid major fa-cloud accent4"></span>
              <h3>Sed feugiat</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
            <section>
              <span className="icon solid major fa-lock accent5"></span>
              <h3>Enim phasellus</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
          </div>
        </section>

        <div className="row">
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
        </div>

      </section>

    </>
  )

}

export default HomePage;
