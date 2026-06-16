import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SkeletonLoader() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.skeleton-item');
    if (!items) return;
    // 创建动画
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(items, {
      opacity: 0.5,
      duration: 0.5,
      stagger: 0.1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className=" mx-auto mt-25!"  >
      <div className="skeleton-item" style={{ width: '60%', height: '30px', background: '#e0e0e0', marginBottom: '20px', borderRadius: '4px' }} />
      <div className="skeleton-item" style={{ width: '100%', height: '150px', background: '#e0e0e0', marginBottom: '20px', borderRadius: '8px' }} />
      <div className="skeleton-item" style={{ width: '90%', height: '20px', background: '#e0e0e0', marginBottom: '10px', borderRadius: '4px' }} />
      <div className="skeleton-item" style={{ width: '80%', height: '20px', background: '#e0e0e0', marginBottom: '10px', borderRadius: '4px' }} />
      <div className="skeleton-item" style={{ width: '70%', height: '20px', background: '#e0e0e0', borderRadius: '4px' }} />
    </div>
  );
}