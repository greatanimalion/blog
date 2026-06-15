import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()


  const handleStart = () => {

    navigate('/home')
  }

  return (
    <div
      className="welcome-container min-h-screen text-white "
      style={{
          background: "white",
          backgroundImage: `
       linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
       linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
       radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
     `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
    >
      <div className="min-h-screen w-full bg-white relative">
        {/* White Sphere Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{

          }}
        />
        {/* Your Content/Components */}
      </div>
      <div className="welcome-content">
        <section className="hero-section">
          <div className="avatar-wrapper">
            <div className="avatar">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="80" fill="url(#avatarGradient)" />
                <circle cx="100" cy="100" r="75" fill="#1e293b" />
                <circle cx="75" cy="85" r="8" fill="#fff" />
                <circle cx="125" cy="85" r="8" fill="#fff" />
                <circle cx="77" cy="83" r="3" fill="#1e293b" />
                <circle cx="127" cy="83" r="3" fill="#1e293b" />
                <path d="M 70 120 Q 100 140 130 120" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="100" cy="60" r="15" fill="#3b82f6" />
              </svg>
            </div>
          </div>

          <h1 className="name-title">
            <span className="letter" style={{ animationDelay: '0s' }}>你</span>
            <span className="letter" style={{ animationDelay: '0.1s' }}>好</span>
            <span className="letter" style={{ animationDelay: '0.2s' }}>，</span>
            <br />
            <span className="letter" style={{ animationDelay: '0.3s' }}>我</span>
            <span className="letter" style={{ animationDelay: '0.4s' }}>是</span>
            <span className="letter highlight" style={{ animationDelay: '0.5s' }}>LB</span>
          </h1>

          <p className="subtitle">欢迎来到我的博客世界</p>
        </section>

        <section className="intro-section">
          <div className="section-title">关于我</div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>前端开发者</h3>
                <p>热爱 React、Vue、TypeScript</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>技术博主</h3>
                <p>分享技术心得与最佳实践</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>开源爱好者</h3>
                <p>积极参与开源社区贡献</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tech-section">
          <div className="section-title">技术栈</div>
          <div className="tech-tags">
            {['React', 'Vue', 'TypeScript', 'Node.js', 'Vite', 'Tailwind CSS', 'Docker', 'Git'].map((tag, index) => (
              <span
                key={tag}
                className="tech-tag"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="scroll-hint">
          <div className="scroll-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
          <p>向下滚动探索</p>
        </section>
      </div>
      <div className="start-overlay" >
        <button className="start-btn" onClick={handleStart}>
          <span className="btn-text">开始探索</span>
          <span className="btn-icon" >→</span>
        </button>
      </div>
      <style>{`
        .welcome-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .welcome-container::-webkit-scrollbar {
          display: none;
        }
        .welcome-content {
          padding: 60px 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero-section {
          text-align: center;
          padding: 80px 0 120px;
        }
        .avatar-wrapper {
          margin-bottom: 40px;
        }
        .avatar {
          width: 180px;
          height: 180px;
          margin: 0 auto;
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .name-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: 8px;
        }
        .letter {
          display: inline-block;
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
        }
        .letter.highlight {
          color: #3b82f6;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          letter-spacing: 4px;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 40px;
          color: #3b82f6;
          text-align: center;
        }
        .intro-section {
          padding: 60px 0;
        }
        .timeline {
          position: relative;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          transform: translateX(-50%);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          display: flex;
          align-items: center;
        }
        .timeline-item:nth-child(odd) {
          flex-direction: row-reverse;
        }
        .timeline-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          border: 3px solid #1e293b;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
        .timeline-content {
          width: 40%;
          background: rgba(30, 41, 59, 0.8);
          padding: 25px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        .timeline-content h3 {
          color: #fff;
          margin-bottom: 10px;
          font-size: 1.2rem;
        }
        .timeline-content p {
          color: #94a3b8;
          margin: 0;
        }
        .tech-section {
          padding: 60px 0 100px;
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
        }
        .tech-tag {
          padding: 12px 24px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 30px;
          color: #94a3b8;
          font-size: 0.9rem;
          opacity: 0;
          animation: fadeInUp 0.5s ease forwards;
        }
        .scroll-hint {
          text-align: center;
          padding: 40px 0;
          opacity: 0.6;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .scroll-icon {
          width: 40px;
          height: 40px;
          margin: 0 auto 15px;
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .scroll-icon svg {
          width: 100%;
          height: 100%;
        }
        .start-overlay {
          position: fixed;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          animation: slideUp 0.5s ease;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .start-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border: none;
          border-radius: 50px;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }
        .start-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.5);
        }
        .btn-icon {
          font-size: 1.3rem;
          transition: transform 0.3s ease;
        }
        .start-btn:hover .btn-icon {
          transform: translateX(5px);
        }
        @media (max-width: 640px) {
          .name-title {
            font-size: 2rem;
            letter-spacing: 4px;
          }
          .timeline::before {
            left: 20px;
          }
          .timeline-dot {
            left: 20px;
          }
          .timeline-item,
          .timeline-item:nth-child(odd) {
            flex-direction: column;
            align-items: flex-start;
            padding-left: 50px;
          }
          .timeline-content {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
