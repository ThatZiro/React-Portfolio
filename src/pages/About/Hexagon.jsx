import React from 'react';
import './Hexagon.css'

const size = 200;
const height = size;
const width = size * 136/150;
const scale = 25;
const Hexagon = ({ label }) => {
  
  return (
    <div className="hexagon">
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 138 150" fill="none">
        <path d="M136.175 37.9125L70.5499 0.412488C69.5875 -0.137415 68.4124 -0.137415 67.45 0.412488L1.825 37.9125C0.85 38.4688 0.25 39.5062 0.25 40.6251V109.375C0.25 110.494 0.85 111.531 1.825 112.088L67.45 149.588C67.9314 149.863 68.4625 150 69.0001 150C69.5377 150 70.0689 149.863 70.5502 149.588L136.175 112.088C137.15 111.531 137.75 110.494 137.75 109.375V40.6251C137.75 39.5062 137.15 38.4688 136.175 37.9125Z" fill="white"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width={width - scale} height={height - scale} viewBox="0 0 122 132" fill="none">
        <path d="M119.747 33.5483L62.3248 0.735873C61.4827 0.254709 60.4545 0.254709 59.6124 0.735873L2.19062 33.5483C1.3375 34.0351 0.8125 34.9429 0.8125 35.9219V96.0781C0.8125 97.0571 1.3375 97.9648 2.19062 98.4516L59.6124 131.264C60.0336 131.505 60.4983 131.625 60.9687 131.625C61.4391 131.625 61.9039 131.505 62.3251 131.264L119.747 98.4516C120.6 97.9648 121.125 97.0571 121.125 96.0781V35.9219C121.125 34.9429 120.6 34.0351 119.747 33.5483Z" fill="#530C5F"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width={width - scale * 2} height={width - scale * 2} viewBox="0 0 104 114" fill="none">
        <path d="M102.381 29.1843L53.1623 1.05932C52.4405 0.646893 51.5592 0.646893 50.8374 1.05932L1.61875 29.1843C0.887499 29.6015 0.4375 30.3796 0.4375 31.2187V82.7812C0.4375 83.6204 0.887499 84.3984 1.61875 84.8157L50.8374 112.941C51.1984 113.147 51.5968 113.25 52 113.25C52.4032 113.25 52.8016 113.147 53.1626 112.941L102.381 84.8157C103.112 84.3984 103.562 83.6204 103.562 82.7812V31.2187C103.562 30.3796 103.112 29.6015 102.381 29.1843Z" fill="white"/>
      </svg>
      <h1>{label}</h1>
    </div>
  );
};

export default Hexagon;
