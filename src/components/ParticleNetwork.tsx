import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const PARTICLE_COUNT = 70;
    const CONNECTION_DISTANCE = 180;
    const MOUSE_RADIUS = 250;
    const MOUSE_LINE_RADIUS = 200;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2.5 + 1.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (mouse.active) {
          const dmx = p.x - mouse.x;
          const dmy = p.y - mouse.y;
          const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);

          if (distMouse < MOUSE_RADIUS && distMouse > 0) {
            const force = ((MOUSE_RADIUS - distMouse) / MOUSE_RADIUS) * 0.12;
            p.vx += (dmx / distMouse) * force;
            p.vy += (dmy / distMouse) * force;
          }

          if (distMouse < MOUSE_LINE_RADIUS) {
            const opacity = (1 - distMouse / MOUSE_LINE_RADIUS) * 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(99, 130, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 2;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }
        p.vx *= 0.995;
        p.vy *= 0.995;

        const distToCursor = mouse.active
          ? Math.hypot(p.x - mouse.x, p.y - mouse.y)
          : Infinity;
        const glowRadius = mouse.active
          ? p.radius + Math.max(0, (MOUSE_RADIUS - distToCursor) / MOUSE_RADIUS) * 3
          : p.radius;

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 130, 255, 0.6)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 130, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    // Listen on window so mouse events work even when cursor is over hero content
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      mouseRef.current = inside
        ? { x, y, active: true }
        : { x: -1000, y: -1000, active: false };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false };
    };

    resize();
    initParticles();
    draw();

    const resizeHandler = () => {
      resize();
      initParticles();
    };

    window.addEventListener("resize", resizeHandler);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleNetwork;
