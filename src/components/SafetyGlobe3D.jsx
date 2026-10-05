import React, { useRef, useEffect } from 'react';

/**
 * SafetyGlobe3D: Interactive 3D Particle Network Canvas
 * Renders an interactive 3D particle sphere and safety grid that rotates
 * and reacts dynamically to cursor hover and dragging.
 */
export default function SafetyGlobe3D({ className = '', width = 360, height = 360 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = canvas.width;
    let height = canvas.height;

    // Generate 3D sphere points
    const pointCount = 140;
    const radius = Math.min(width, height) * 0.38;
    const points = [];

    for (let i = 0; i < pointCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointCount);
      const theta = Math.sqrt(pointCount * Math.PI) * phi;
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        baseRadius: 2.2 + Math.random() * 2,
        isHighlight: i % 7 === 0,
      });
    }

    let angleX = 0.003;
    let angleY = 0.005;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;
      targetRotationY = (mouseX / width) * 0.8;
      targetRotationX = (-mouseY / height) * 0.8;
    };

    const handleMouseLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation towards target rotation
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      const rotX = angleX + currentRotationX * 0.02;
      const rotY = angleY + currentRotationY * 0.02;

      // Rotate points in 3D
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const projected = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y1;
        p.z = z2;

        // 3D perspective projection
        const fov = 350;
        const scale = fov / (fov + p.z);
        const x2d = p.x * scale + width / 2;
        const y2d = p.y * scale + height / 2;
        const alpha = Math.max(0.15, (p.z + radius) / (2 * radius));

        projected.push({
          x: x2d,
          y: y2d,
          z: p.z,
          scale,
          alpha,
          isHighlight: p.isHighlight,
          r: p.baseRadius * scale
        });
      }

      // Sort points back to front for depth
      projected.sort((a, b) => a.z - b.z);

      // Draw connection lines for nearby points
      ctx.lineWidth = 0.7;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 48) {
            const lineAlpha = (1 - dist / 48) * 0.25 * Math.min(projected[i].alpha, projected[j].alpha);
            ctx.strokeStyle = `rgba(0, 131, 169, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particle points
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.r), 0, Math.PI * 2);

        if (p.isHighlight) {
          ctx.fillStyle = `rgba(0, 131, 169, ${Math.min(1, p.alpha * 1.5)})`;
          ctx.shadowColor = '#0083A9';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(0, 43, 127, ${p.alpha * 0.85})`;
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      // Draw subtle orbital outer ring in 3D perspective
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.ellipse(width / 2, height / 2, radius * 1.15, radius * 0.35, Math.PI / 6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 131, 169, 0.2)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full h-full max-w-[360px] max-h-[360px] cursor-grab active:cursor-grabbing"
        title="Interactive 3D Safety Globe"
      />
    </div>
  );
}
