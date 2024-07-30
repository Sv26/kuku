import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styles from './InfiniteScrollComponent.module.css'; // Create a CSS module for styling

const InfiniteScrollComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=${page}&lang=english`);
      setData(prevData => [...prevData, ...response.data.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
      setPage(prevPage => prevPage + 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className={styles.container}>
      {data.map(item => (
        <div key={item.id} className={styles.item}>
          {item.title}
        </div>
      ))}
      {loading && <div className={styles.loading}>Loading...</div>}
    </div>
  );
};

export default InfiniteScrollComponent;
