import React, { useState, useEffect } from 'react';

const Loader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual loading logic)
    const loadingTimer = setTimeout(() => {
      setShowSplash(true);
      // After splash animation, hide the loader
      setTimeout(() => {
        setIsLoading(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 1000); // Splash duration
    }, 4000); // Loading duration

    return () => clearTimeout(loadingTimer);
  }, [onLoadingComplete]);

  if (!isLoading) {
    return null; // Hide the loader completely
  }

  return (
    <div className={`relative w-screen h-screen overflow-hidden flex items-center justify-center transition-all duration-1000 ${showSplash ? 'animate-splash-out' : ''}`} style={{ background: 'linear-gradient(135deg, #F5DEB3 0%, #DEB887 50%, #8B4513 100%)' }}>
      {/* SVG Filter */}
      <svg className="absolute w-0 h-0 overflow-visible" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <filter id="blurFilter">
          <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
          <feColorMatrix type="matrix" values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 19 -9"></feColorMatrix>
        </filter>
      </svg>

      {/* Background with grid pattern and radial gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(transparent 25%, #3d1a00 60%),
            repeating-linear-gradient(
              45deg,
              rgb(218 165 32 / 8%) 0,
              rgb(218 165 32 / 8%) 1.9rem,
              transparent 1.9rem,
              transparent 2rem
            ),
            repeating-linear-gradient(
              115deg,
              rgb(218 165 32 / 8%) 0,
              rgb(218 165 32 / 8%) 1.9rem,
              transparent 1.9rem,
              transparent 2rem
            ),
            conic-gradient(from 0deg, #8B4513, #3d1a00, #654321, #8B4513)
          `
        }}
      />

      {/* Outer blur overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backdropFilter: 'blur(1rem)',
          maskImage: 'radial-gradient(72vmin 72vmin at center, transparent 50%, #8B4513 70%)'
        }}
      />

      {/* Noise overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50 z-20"
        style={{
          background: 'url(https://assets.codepen.io/907471/noise.svg)',
          mixBlendMode: 'lighten',
          filter: 'invert(1)'
        }}
      />

      {/* Main rings container */}
      <div 
        className={`relative transition-all duration-700 ${showSplash ? 'animate-rings-explode' : ''}`}
        style={{
          filter: 'url(#blurFilter)',
          width: '70vmin',
          aspectRatio: '1',
          borderRadius: '50%',
          perspective: '70vmin'
        }}
      >
        {/* Outer rings */}
        <div 
          className="absolute inset-0 rounded-full animate-spin-3d-outer"
          style={{
            border: '1.8vmin solid transparent',
            background: `
              conic-gradient(
                from 540deg,
                #DAA520,
                transparent,
                #CD853F,
                #D2691E,
                #F4A460,
                transparent,
                transparent,
                #DEB887,
                transparent,
                #F5DEB3,
                #D2B48C,
                #FFEFD5,
                transparent,
                transparent,
                transparent
              ) border-box
            `,
            mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor'
          }}
        />
        
        <div 
          className="absolute inset-0 rounded-full animate-spin-3d-outer-alt"
          style={{
            border: '1.8vmin solid transparent',
            background: `
              conic-gradient(
                from 270deg,
                #DAA520,
                transparent,
                #CD853F,
                #D2691E,
                #F4A460,
                transparent,
                transparent,
                #DEB887,
                transparent,
                #F5DEB3,
                #D2B48C,
                #FFEFD5,
                transparent,
                transparent,
                transparent
              ) border-box
            `,
            mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor'
          }}
        />

        {/* Inner rings */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 rounded-full animate-spin-3d-inner"
            style={{
              border: '1.8vmin solid transparent',
              background: `
                conic-gradient(
                  from 1080deg,
                  #DAA520,
                  transparent,
                  #CD853F,
                  #D2691E,
                  #F4A460,
                  transparent,
                  transparent,
                  #DEB887,
                  transparent,
                  #F5DEB3,
                  #D2B48C,
                  #FFEFD5,
                  transparent,
                  transparent,
                  transparent
                ) border-box
              `,
              mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor'
            }}
          />
          
          <div 
            className="absolute inset-0 rounded-full animate-spin-3d-inner-alt"
            style={{
              border: '1.8vmin solid transparent',
              background: `
                conic-gradient(
                  from 810deg,
                  #DAA520,
                  transparent,
                  #CD853F,
                  #D2691E,
                  #F4A460,
                  transparent,
                  transparent,
                  #DEB887,
                  transparent,
                  #F5DEB3,
                  #D2B48C,
                  #FFEFD5,
                  transparent,
                  transparent,
                  transparent
                ) border-box
              `,
              mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor'
            }}
          />

          {/* Logo in center */}
          <div 
            className="absolute inset-0 flex items-center justify-center opacity-70"
            style={{
              filter: 'drop-shadow(0 0 1.5rem hsla(30deg, 60%, 60%, 0.8))',
              backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDAuNTgxIiBoZWlnaHQ9IjU3Ljg0NiIgdmlld0JveD0iMCAwIDQwLjU4MSA1Ny44NDYiPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIwLjkxMSIgeTE9IjAuMDgyIiB4Mj0iMC4xODUiIHkyPSIwLjkxIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0RBQTUyMCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMTA3IiBzdG9wLWNvbG9yPSIjRjRBNDYwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC40NDMiIHN0b3AtY29sb3I9IiNERUI4ODciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjU3NiIgc3RvcC1jb2xvcj0iI0ZGRUZENSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDRDg1M0YiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSJQYXRoXzEiIGRhdGEtbmFtZT0iUGF0aCAxIiBkPSJNOTMzLjYxMyw2OTkuNDkybC0zMS40NTMsMzEuODVoMjAuMzA4bC0xOC43OCwyNiwzOS4wNTMtMzQuNzk1SDkyMS4wN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MDIuMTU5IC02OTkuNDkyKSIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+Cjwvc3ZnPgoK")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'calc(70vmin / 1.5)'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-3d-outer {
          0% {
            transform: rotateY(180deg) rotateX(180deg) rotateZ(180deg) scale(1);
          }
          50% {
            transform: rotateY(270deg) rotateX(270deg) rotateZ(270deg) scale(1.2);
          }
          70% {
            transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg) scale(1);
          }
          80% {
            transform: rotateY(450deg) rotateX(450deg) rotateZ(450deg) scale(1.2);
          }
          100% {
            transform: rotateY(540deg) rotateX(540deg) rotateZ(540deg) scale(1);
          }
        }

        @keyframes spin-3d-outer-alt {
          0% {
            transform: rotateY(90deg) rotateX(90deg) rotateZ(90deg) scale(1);
          }
          50% {
            transform: rotateY(180deg) rotateX(180deg) rotateZ(180deg) scale(1.2);
          }
          70% {
            transform: rotateY(270deg) rotateX(270deg) rotateZ(270deg) scale(1);
          }
          80% {
            transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg) scale(1.2);
          }
          100% {
            transform: rotateY(450deg) rotateX(450deg) rotateZ(450deg) scale(1);
          }
        }

        @keyframes spin-3d-inner {
          0% {
            transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg) scale(1);
          }
          50% {
            transform: rotateY(450deg) rotateX(450deg) rotateZ(450deg) scale(1.2);
          }
          70% {
            transform: rotateY(540deg) rotateX(540deg) rotateZ(540deg) scale(1);
          }
          80% {
            transform: rotateY(630deg) rotateX(630deg) rotateZ(630deg) scale(1.2);
          }
          100% {
            transform: rotateY(720deg) rotateX(720deg) rotateZ(720deg) scale(1);
          }
        }

        @keyframes spin-3d-inner-alt {
          0% {
            transform: rotateY(270deg) rotateX(270deg) rotateZ(270deg) scale(1);
          }
          50% {
            transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg) scale(1.2);
          }
          70% {
            transform: rotateY(450deg) rotateX(450deg) rotateZ(450deg) scale(1);
          }
          80% {
            transform: rotateY(540deg) rotateX(540deg) rotateZ(540deg) scale(1.2);
          }
          100% {
            transform: rotateY(630deg) rotateX(630deg) rotateZ(630deg) scale(1);
          }
        }

        .animate-spin-3d-outer {
          animation: spin-3d-outer 7s ease-in-out infinite;
        }

        .animate-spin-3d-outer-alt {
          animation: spin-3d-outer-alt 7s ease-in-out infinite;
        }

        .animate-spin-3d-inner {
          animation: spin-3d-inner 7s ease-in-out infinite;
        }

        .animate-spin-3d-inner-alt {
          animation: spin-3d-inner-alt 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;