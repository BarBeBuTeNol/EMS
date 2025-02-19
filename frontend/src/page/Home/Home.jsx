import React from 'react';
import Header from '../../components/Header'; 
import Button from '../../components/Button'; 
import '../Home/Home.css'; 

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <Header />
        <Button />
      </div>
    </div>
  );
}

export default Home;
