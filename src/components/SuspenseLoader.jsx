import React, { useState, useEffect } from 'react';

const SuspenseLoader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [showTagline, setShowTagline] = useState(false);

  const statusMessages = [
    'Compiling Code...',
    'Deploying App...',
    'Optimizing Performance...',
    'Almost Ready!'
  ];

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Cycle through status messages
    const statusInterval = setInterval(() => {
      setStatusIndex(prev => (prev + 1) % statusMessages.length);
    }, 1500);

    // Show tagline after a delay
    const taglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, 800);

    // Complete loading after progress reaches 100%
    const loadingTimer = setTimeout(() => {
      setShowSplash(true);
      setTimeout(() => {
        setIsLoading(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 800);
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(statusInterval);
      clearTimeout(taglineTimer);
      clearTimeout(loadingTimer);
    };
  }, [onLoadingComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className={`relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center transition-all duration-1000 ${showSplash ? 'animate-splash-out' : ''}`}>
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-gradient-shift" style={{
          background: 'linear-gradient(-45deg, #f4e4d6, #e8d5c4, #f0d8c8, #e6c8b3, #f2d4c8, #e8d0c0)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 8s ease infinite'
        }} />
        <div className="absolute inset-0 bg-amber-900/10" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,69,19,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,69,19,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Developer Name and Title */}
        <div className={`mb-12 transition-all duration-1000 ${showSplash ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 bg-clip-text text-transparent">
              SURESH SHANMUGASUNDARAM
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 font-light">
            ASSOCIATE SOFTWARE DEVELOPER
          </p>
        </div>

        {/* Futuristic Progress Indicator */}
        <div className={`mb-12 transition-all duration-1000 ${showSplash ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="relative w-64 h-64 mx-auto">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-amber-700/50">
              <div 
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-600 border-r-amber-500 border-b-amber-400 border-l-amber-300 animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #d97706, #f59e0b, #fbbf24, #fcd34d, #d97706)',
                  mask: 'radial-gradient(farthest-side, transparent 70%, #000 71%)',
                  WebkitMask: 'radial-gradient(farthest-side, transparent 70%, #000 71%)'
                }}
              />
            </div>

            {/* Progress Ring */}
            <div className="absolute inset-4 rounded-full border-4 border-amber-600/30">
              <div 
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-500"
                style={{
                  background: `conic-gradient(from -90deg, #f59e0b ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
                  mask: 'radial-gradient(farthest-side, transparent 70%, #000 71%)',
                  WebkitMask: 'radial-gradient(farthest-side, transparent 70%, #000 71%)'
                }}
              />
            </div>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-amber-900 mb-2">{progress}%</div>
              <div className="text-sm text-amber-700">LOADING</div>
            </div>

            {/* Rotating Gears */}
            <div className="absolute -top-8 -left-8 w-16 h-16 animate-spin-slow">
              <div className="w-full h-full rounded-full border-2 border-amber-600/60 flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full" />
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-12 h-12 animate-spin-slow-reverse">
              <div className="w-full h-full rounded-full border-2 border-amber-500/60 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-14 h-14 animate-spin-slow">
              <div className="w-full h-full rounded-full border-2 border-amber-400/60 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-10 h-10 animate-spin-slow-reverse">
              <div className="w-full h-full rounded-full border-2 border-amber-300/60 flex items-center justify-center">
                <div className="w-1 h-1 bg-amber-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline with Typewriter Effect */}
        <div className={`mb-8 transition-all duration-1000 ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-lg md:text-xl text-amber-800 font-light">
            <span className="typewriter-text">
              Building modern, functional, and elegant applications...
            </span>
          </p>
        </div>

        {/* Interactive Status Message */}
        <div className={`transition-all duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-50/80 backdrop-blur-sm rounded-full border border-amber-200/40">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
            <span className="text-sm text-amber-900 font-mono">
              {statusMessages[statusIndex]}
            </span>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-600/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }

        .animate-gradient-shift {
          animation: gradientShift 8s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 6s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .typewriter-text {
          overflow: hidden;
          border-right: 2px solid #d97706;
          white-space: nowrap;
          animation: typewriter 3s steps(40) 1s forwards, blink-caret 0.75s step-end infinite;
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #d97706; }
        }

        .animate-splash-out {
          animation: splashOut 0.8s ease-in-out forwards;
        }

        @keyframes splashOut {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default SuspenseLoader;