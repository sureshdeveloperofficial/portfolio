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
            backgroundSize: 'clamp(20px, 5vw, 50px) clamp(20px, 5vw, 50px)',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Developer Name and Title */}
        <div className={`mb-6 sm:mb-8 md:mb-12 transition-all duration-1000 ${showSplash ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-amber-900 mb-2 sm:mb-3 md:mb-4 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 bg-clip-text text-transparent">
              SURESH
            </span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 bg-clip-text text-transparent">
              SHANMUGASUNDARAM
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-amber-800 font-light px-2">
            ASSOCIATE SOFTWARE DEVELOPER
          </p>
        </div>

        {/* Futuristic Progress Indicator */}
        <div className={`mb-6 sm:mb-8 md:mb-12 transition-all duration-1000 ${showSplash ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 sm:border-3 md:border-4 border-amber-700/50">
              <div 
                className="absolute inset-0 rounded-full border-2 sm:border-3 md:border-4 border-transparent border-t-amber-600 border-r-amber-500 border-b-amber-400 border-l-amber-300 animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #d97706, #f59e0b, #fbbf24, #fcd34d, #d97706)',
                  mask: 'radial-gradient(farthest-side, transparent 70%, #000 71%)',
                  WebkitMask: 'radial-gradient(farthest-side, transparent 70%, #000 71%)'
                }}
              />
            </div>

            {/* Progress Ring */}
            <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full border-2 sm:border-3 md:border-4 border-amber-600/30">
              <div 
                className="absolute inset-0 rounded-full border-2 sm:border-3 md:border-4 border-transparent border-t-amber-500"
                style={{
                  background: `conic-gradient(from -90deg, #f59e0b ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
                  mask: 'radial-gradient(farthest-side, transparent 70%, #000 71%)',
                  WebkitMask: 'radial-gradient(farthest-side, transparent 70%, #000 71%)'
                }}
              />
            </div>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-1 sm:mb-2">{progress}%</div>
              <div className="text-xs sm:text-sm md:text-base text-amber-700">LOADING</div>
            </div>

            {/* Rotating Gears - Responsive sizing */}
            <div className="absolute -top-4 sm:-top-6 md:-top-8 -left-4 sm:-left-6 md:-left-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 animate-spin-slow">
              <div className="w-full h-full rounded-full border border-amber-600/60 flex items-center justify-center">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-amber-600 rounded-full" />
              </div>
            </div>
            <div className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-spin-slow-reverse">
              <div className="w-full h-full rounded-full border border-amber-500/60 flex items-center justify-center">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-500 rounded-full" />
              </div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-7 h-7 sm:w-11 sm:h-11 md:w-14 md:h-14 animate-spin-slow">
              <div className="w-full h-full rounded-full border border-amber-400/60 flex items-center justify-center">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-400 rounded-full" />
              </div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-spin-slow-reverse">
              <div className="w-full h-full rounded-full border border-amber-300/60 flex items-center justify-center">
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1 md:h-1 bg-amber-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline with Typewriter Effect */}
        <div className={`mb-6 sm:mb-8 transition-all duration-1000 ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-amber-800 font-light px-4 sm:px-6 md:px-8">
            <span className="typewriter-text">
              Building modern, functional, and elegant applications...
            </span>
          </p>
        </div>

        {/* Interactive Status Message */}
        <div className={`transition-all duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
          <div className="inline-flex items-center space-x-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-amber-50/80 backdrop-blur-sm rounded-full border border-amber-200/40">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base text-amber-900 font-mono">
              {statusMessages[statusIndex]}
            </span>
          </div>
        </div>
      </div>

      {/* Floating Particles - Responsive count */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(window.innerWidth < 640 ? 10 : window.innerWidth < 1024 ? 15 : 20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-amber-600/40 rounded-full animate-float"
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

        /* Mobile-first responsive adjustments */
        @media (max-width: 640px) {
          .typewriter-text {
            white-space: normal;
            border-right: none;
            animation: none;
            width: 100%;
          }
        }

        /* Landscape mobile adjustments */
        @media (max-height: 500px) and (orientation: landscape) {
          .mb-6 { margin-bottom: 1rem; }
          .mb-8 { margin-bottom: 1.5rem; }
          .mb-12 { margin-bottom: 2rem; }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .border-2 { border-width: 1px; }
          .border-3 { border-width: 1.5px; }
          .border-4 { border-width: 2px; }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .bg-amber-50\/80 {
            background-color: rgba(254, 243, 199, 0.9);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-gradient-shift,
          .animate-spin-slow,
          .animate-spin-slow-reverse,
          .animate-float {
            animation: none;
          }
          
          .gridMove {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SuspenseLoader;