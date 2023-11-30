// WatermarkCanvas.js
import { useRef, useEffect } from 'react';
import './watermark.css';

const WatermarkCanvas = ({ userId, userName }) => {
  const canvasRef = useRef(null);
  const repeat = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < repeat; i++) {
      ctx.save();
      ctx.translate(50, i * 60 + 50); // 调整水印位置
      ctx.rotate(-45 * (Math.PI / 180)); // 调整水印角度
      ctx.globalAlpha = 0.5;
      ctx.font = '14px Arial';
      ctx.fillStyle = '#ccc';
      ctx.fillText(`test/was`, 0, 0);
      ctx.restore();
    }
  }, [userId, userName, repeat]);

  return <canvas ref={canvasRef} className="watermark" />;
};

export default WatermarkCanvas;
