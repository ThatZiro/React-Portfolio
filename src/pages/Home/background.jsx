import React, { useEffect, useRef } from 'react';
import './Background.css';

const nordicAlphabet = [
  'ᚠ', 'ᚢ', 'ᚦ', 'ᚬ', 'ᚱ', 'ᚴ', 'ᚼ', 'ᚾ', 'ᛁ', 'ᛅ',
  'ᛋ', 'ᛏ', 'ᛒ', 'ᛘ', 'ᛚ', 'ᛦ', 'ᛁ', 'ᚢ', 'ᛘ', 'ᚾ'
];

const Name = [
  'B', 'r', 'a', 'n', 'd', 'o', 'e', 's'
]
const allChars = [...nordicAlphabet, ...Name];


function Background() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let matrix = allChars;
    let font = 32;
    let col = width / font;
    let arr = [];
    
    for (let i = 0; i < col; i++) {
      arr[i] = 1;
    }
    
    const draw = () => {
      ctx.fillStyle = "rgba(7,4,16,0.1)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgb(112,54,255)";
      ctx.font = `${font}px system-ui`;
      
      for (let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        if (arr[i] * font > height && Math.random() > 0.975) {
          arr[i] = 0;
        }
        arr[i]++;
        ctx.fillText(txt, i * font, arr[i] * font);
      }
    }
    
    const animationId = setInterval(draw, 50);
    
    return () => {
      clearInterval(animationId);
    };
  }, []);
  
  return (
    <div>
      <canvas ref={canvasRef} className="mask"></canvas>
    </div>
  );
}

export default Background;