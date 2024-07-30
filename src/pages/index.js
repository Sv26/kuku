// src/pages/index.js
import React from 'react';
import InfiniteScrollComponent from '../components/InfiniteScrollComponent';
import AutoSliderCarousel from '../components/AutoSliderCarousel';
import Header from '../components/Header';
import ErrorBoundary from '../components/ErrorBoundary'; // Import ErrorBoundary
import styles from '../index.module.css'; // Ensure this path is correct

const HomePage = () => {
  return (
    <ErrorBoundary>
      <div>
        <Header />
        <main className={styles.main}>
          <AutoSliderCarousel />
          <InfiniteScrollComponent />
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;
