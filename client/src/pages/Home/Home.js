import React from 'react';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import FeaturedProduct from '../../components/FeaturedProducts/FeaturedProduct';
import Slider from '../../components/Slider/Slider';
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProduct type="featured" />
      <Categories />
      <FeaturedProduct type="trending" />
      <Contact/>
    </div>
  )
}

export default Home;