import { NavLink } from 'react-router-dom';
import '../../assets/css/custom.css'

function Supporters() {
  return (
    <>

        <section id="banner">
          {/* <h2>TreePals</h2> */}
          <h2 className='font-fix'>Supporters</h2>
          <p>Businesses that have contributed to the conservation of tree canopy in Bellevue</p>
        </section>


        <section id="main" className="container">

          <section className="box special">
            <header className="major">
              <h2>
              Special thanks to these businesses who have provided resources
                <br />
                for Bellevue's tree canopy conservation organizations
              </h2>
              <p>
                <img></img>
                We believe in transparency. The business and contributions made will be listed below.<br></br>5% of donations are redirected towards funding TreePals.
              </p>
            </header>
          </section>

          {/* <div className="row"> */}
            {/* <div className="col-6 col-12-narrower"> */}

              <section className='box special donator'>
                  <span className='image featured resize'><img src='images/amazon_logo.png'></img></span>
                  {/* <h3>Amazon</h3> */}
                  <div className=''>
                    <p>Amazon has donated a total of _____ which has gone towards ______</p>
                    <a>Click here to see a break down</a>
                  </div>
                  <br />
                {/* <ul className="actions special">
                <li>
                  <a href="https://amazon.com/" target="_blank" className="button alt">Visit</a>
                </li>
              </ul> */}
              </section>
            {/* </div> */}

            {/* <div className="col-6 col-12-narrower"> */}

            <section className='box special donator'>
                  <span className='image featured resize'><img src='images/Bellevue-Nursery.png'></img></span>
                  {/* <h3>Amazon</h3> */}
                  <div className=''>
                    <p>Bellevue Nursery has donated a total of _____ which has gone towards ______</p>
                    <a>Click here to see a break down</a>
                  </div>
                  <br />
                {/* <ul className="actions special">
                <li>
                  <a href="https://amazon.com/" target="_blank" className="button alt">Visit</a>
                </li>
              </ul> */}
              </section>
            {/* </div> */}

            <div className="col-6 col-12-narrower">

            <section className='box special donator'>
                  <span className='image featured resize'><img src='images/cropped-logo.png'></img></span>
                  {/* <h3>Amazon</h3> */}
                  <div className=''>
                    <p>Trees, Shrubs & More has donated a total of _____ which has gone towards ______</p>
                    <a>Click here to see a break down</a>
                  </div>
                  <br />
                {/* <ul className="actions special">
                <li>
                  <a href="https://amazon.com/" target="_blank" className="button alt">Visit</a>
                </li>
              </ul> */}
              </section>
            </div>
          {/* </div> */}
        </section>

        {/* </section> */}

      </>
   )
};

export default Supporters;
