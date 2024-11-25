import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Product from './components/product/Product';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Popup from './components/Popup/Popup';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[]);

  return (
    <div 
    className='bg-white dark:bg-gray-900 
    dark:bg-white duration-200'
    >
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero/>
      <Product/>
      <TopProducts/>
      <Banner />
      <Subscribe />
      <Product />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}
      />
    </div>
  )
}

export default App