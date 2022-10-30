import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useScipt from './hooks/useScript';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Nonprofits from './Components/Nonprofits/Nonprofits';
import Supporters from './Components/Supporters/Supporters'

import './assets/css/index.css';

function App() {

  const [loaded, setLoaded] = useState(false);

  useScipt("assets/js/jquery.min.js");
  useScipt("assets/js/jquery.dropotron.min.js");
  useScipt("assets/js/jquery.scrollex.min.js");
  useScipt("assets/js/browser.min.js");
  useScipt("assets/js/breakpoints.min.js");
  useScipt("assets/js/util.js");
  useScipt("assets/js/main.js");

  useEffect(() => {
    (async() => {
      await setLoaded(true);
    })();
  }, []);


  if (!loaded) {
    return null;
  }

  return (
    <>

      <NavBar />

      <Routes>


        <Route path='/' element={<HomePage />} />
        <Route path='/nonprofits' element={<Nonprofits />} />
        <Route path='/supporters' element={<Supporters />} />


      </Routes>

      <Footer />

    </>
  );
}

export default App;
