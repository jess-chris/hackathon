import { NavLink } from 'react-router-dom';

function Nonprofits() {
 return (
  <>

      <section id="banner">
        {/* <h2>TreePals</h2> */}
        <h2>Non-profits</h2>
        <p>Organizations that advocate for tree canopy conservation in Bellevue</p>
      </section>


      <section id="main" className="container">

        <section className="box special">
          <header className="major">
            <h2>
            Contributions made will be used to fund the missions
              <br />
              of the perspective organization
            </h2>
            <p>
              Click "Learn More" to explore more about the organizations
            </p>
          </header>
          <span className="image featured">
            <img src="images/pic01.jpg" alt="" />
          </span>
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
};

export default Nonprofits;
