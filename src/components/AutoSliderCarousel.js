import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import styles from './AutoSliderCarousel.module.css'; // Create a CSS module for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoSliderCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axios.get('https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english');
        setCarouselData(response.data.data.slice(0, 5)); // Assuming the first 5 items for the carousel
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };
    fetchCarouselData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {carouselData.map(item => (
          <div key={item.id} className={styles.slide}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoSliderCarousel;
