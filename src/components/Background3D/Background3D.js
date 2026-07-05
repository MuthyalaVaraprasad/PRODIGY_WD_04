import React, {useEffect, useRef, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./Background3D.scss";

export default function Background3D() {
  const canvasRef = useRef(null);
  const {isDark} = useContext(StyleContext);
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // --- CYBERPUNK BACKGROUND STATES (Dark Mode) ---
    const gridSpacing = 45;
    const cyberParticles = [];
    const maxCyberParticles = 40;

    for (let i = 0; i < maxCyberParticles; i++) {
      cyberParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 1.5 + 0.8,
        length: Math.random() * 60 + 20,
        color:
          i % 2 === 0 ? "rgba(0, 242, 254, 0.35)" : "rgba(255, 20, 147, 0.35)", // Cyber cyan/pink
        width: Math.random() * 2 + 1
      });
    }

    // --- LIQUID FLOW SILK STATES (Light Mode) ---
    const waves = [
      {
        y: height * 0.5,
        length: 0.003,
        amplitude: 65,
        speed: 0.008,
        color: "rgba(100, 91, 235, 0.06)",
        offset: 0
      },
      {
        y: height * 0.6,
        length: 0.002,
        amplitude: 85,
        speed: -0.006,
        color: "rgba(0, 242, 254, 0.05)",
        offset: 100
      },
      {
        y: height * 0.4,
        length: 0.004,
        amplitude: 50,
        speed: 0.01,
        color: "rgba(255, 20, 147, 0.04)",
        offset: 200
      }
    ];

    // Interaction mouse tracker
    const mouse = {x: width / 2, y: height / 2, tx: width / 2, ty: height / 2};

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      waves[0].y = height * 0.5;
      waves[1].y = height * 0.6;
      waves[2].y = height * 0.4;
    };

    const handleMouseMove = e => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      const isDarkTheme = isDarkRef.current;

      // Interpolate mouse coordinates (spring easing)
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      if (isDarkTheme) {
        // --- 1. CYBERPUNK DIGITAL MAIN-GRID (Dark Mode) ---
        ctx.clearRect(0, 0, width, height);

        // Draw 3D Perspective Digital Cyber-Grid lines
        ctx.strokeStyle = "rgba(100, 91, 235, 0.04)";
        ctx.lineWidth = 1;

        const mouseShiftX = (mouse.x - width / 2) * 0.08;
        const mouseShiftY = (mouse.y - height / 2) * 0.08;

        // Draw Vertical Grid lines
        for (
          let x = -gridSpacing * 2;
          x < width + gridSpacing * 2;
          x += gridSpacing
        ) {
          ctx.beginPath();
          ctx.moveTo(x + mouseShiftX, 0);
          ctx.lineTo(x - mouseShiftX * 2, height);
          ctx.stroke();
        }

        // Draw Horizontal Grid lines
        for (
          let y = -gridSpacing * 2;
          y < height + gridSpacing * 2;
          y += gridSpacing
        ) {
          ctx.beginPath();
          ctx.moveTo(0, y + mouseShiftY);
          ctx.lineTo(width, y - mouseShiftY * 2);
          ctx.stroke();
        }

        // Draw flowing data packet streams
        for (let i = 0; i < cyberParticles.length; i++) {
          const p = cyberParticles[i];

          // Move down
          p.y += p.speed;
          if (p.y > height) {
            p.y = -p.length;
            p.x = Math.random() * width;
          }

          // Draw linear glowing code stream
          const gradient = ctx.createLinearGradient(
            p.x,
            p.y,
            p.x,
            p.y + p.length
          );
          gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
          gradient.addColorStop(1, p.color);

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + p.length);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = p.width;
          ctx.stroke();

          // Particle terminal code head node
          ctx.beginPath();
          ctx.arc(p.x, p.y + p.length, p.width * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      } else {
        // --- 2. LIQUID SILK FLOWING WAVES (Light Mode) ---
        ctx.clearRect(0, 0, width, height);

        // Render layered wave ribbons flowing smoothly
        for (let i = 0; i < waves.length; i++) {
          const w = waves[i];
          w.offset += w.speed;

          ctx.beginPath();
          ctx.moveTo(0, height);

          // Plot points along screen width
          for (let x = 0; x <= width; x += 10) {
            // Sinusoidal wave equations
            const waveY = w.y + Math.sin(x * w.length + w.offset) * w.amplitude;

            // Add interactive mouse ripple bulge
            const dist = Math.abs(x - mouse.x);
            let mouseInfluence = 0;
            if (dist < 280) {
              const alpha = 1 - dist / 280;
              mouseInfluence =
                Math.sin(alpha * Math.PI) * (mouse.y - w.y) * 0.28;
            }

            ctx.lineTo(x, waveY + mouseInfluence);
          }

          ctx.lineTo(width, height);
          ctx.closePath();

          ctx.fillStyle = w.color;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-3d-canvas" />;
}
