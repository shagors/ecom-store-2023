import React from 'react';
import FeaturedProduct from '../../components/FeaturedProducts/FeaturedProduct';
import Slider from '../../components/Slider/Slider';
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProduct type="featured" />
      <FeaturedProduct type="trending" />
    </div>
  )
}

export default Home;