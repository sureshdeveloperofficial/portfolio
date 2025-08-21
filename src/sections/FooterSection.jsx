"use client";

import React, { useEffect, useRef, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Float, Box } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail, Twitter, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Fallback 3D Element
const FallbackCube = ({ mousePosition, isHovered }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Enhanced hover-based mouse following
      const hoverMultiplier = isHovered ? 1.5 : 0.3; // More responsive when hovered
      const targetRotationY = mousePosition.x * 1.2 * hoverMultiplier;
      const targetRotationX = mousePosition.y * 0.6 * hoverMultiplier;
      
      // Smoother rotation with increased sensitivity when hovered
      const rotationSpeed = isHovered ? 0.12 : 0.04;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * rotationSpeed;
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * rotationSpeed;
      
      // Enhanced floating animation - more active when hovered
      const floatIntensity = isHovered ? 0.25 : 0.15;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * (isHovered ? 2.5 : 1.5)) * floatIntensity;
      
      // Gentle continuous rotation - faster when hovered
      const rotationSpeedY = isHovered ? 0.008 : 0.003;
      meshRef.current.rotation.y += rotationSpeedY;
      
      // Enhanced breathing effect - more pronounced when hovered
      const breathIntensity = isHovered ? 0.12 : 0.08;
      const scale = 1 + Math.sin(state.clock.elapsedTime * (isHovered ? 2.0 : 1.2)) * breathIntensity;
      meshRef.current.scale.setScalar(scale);
      
      // Add subtle position movement based on mouse - more active when hovered
      const positionIntensity = isHovered ? 0.15 : 0.05;
      const targetX = mousePosition.x * 0.15 * positionIntensity;
      const targetZ = mousePosition.y * 0.08 * positionIntensity;
      
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.08;
      meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.08;
      
      // Add hover-specific effects
      if (isHovered) {
        // Gentle swaying motion when hovered
        meshRef.current.position.x += Math.sin(state.clock.elapsedTime * 1.8) * 0.02;
        meshRef.current.position.z += Math.cos(state.clock.elapsedTime * 1.6) * 0.02;
      }
    }
  });

  return (
    <Float
      speed={isHovered ? 2.5 : 1.5}
      rotationIntensity={isHovered ? 0.5 : 0.3}
      floatIntensity={isHovered ? 0.5 : 0.3}
    >
      <Box 
        ref={meshRef}
        args={[1, 1, 1]} 
        scale={1.8}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial 
          color="#ff6b35"
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
    </Float>
  );
};

// 3D Model Component with Error Handling
const FutureRobot = ({ mousePosition, onLoad, onError, isHovered }) => {
  const { scene } = useGLTF('/models/future_robo.glb');
  const modelRef = useRef();
  const { viewport } = useThree();

  useEffect(() => {
    try {
      if (scene && onLoad) {
        onLoad();
      }
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
  }, [scene, onLoad, onError]);

  useFrame((state) => {
    if (modelRef.current) {
      // Enhanced hover-based mouse following
      const hoverMultiplier = isHovered ? 1.5 : 0.3; // More responsive when hovered
      const targetRotationY = mousePosition.x * 1.2 * hoverMultiplier;
      const targetRotationX = mousePosition.y * 0.6 * hoverMultiplier;
      
      // Smoother rotation with increased sensitivity when hovered
      const rotationSpeed = isHovered ? 0.12 : 0.04;
      modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * rotationSpeed;
      modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * rotationSpeed;
      
      // Enhanced floating animation - more active when hovered
      const floatIntensity = isHovered ? 0.25 : 0.15;
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * (isHovered ? 2.5 : 1.5)) * floatIntensity;
      
      // Gentle continuous rotation - faster when hovered
      const rotationSpeedY = isHovered ? 0.008 : 0.003;
      modelRef.current.rotation.y += rotationSpeedY;
      
      // Enhanced breathing effect - more pronounced when hovered
      const breathIntensity = isHovered ? 0.12 : 0.08;
      const scale = 1 + Math.sin(state.clock.elapsedTime * (isHovered ? 2.0 : 1.2)) * breathIntensity;
      modelRef.current.scale.setScalar(scale);
      
      // Add subtle position movement based on mouse - more active when hovered
      const positionIntensity = isHovered ? 0.15 : 0.05;
      const targetX = mousePosition.x * 0.15 * positionIntensity;
      const targetZ = mousePosition.y * 0.08 * positionIntensity;
      
      modelRef.current.position.x += (targetX - modelRef.current.position.x) * 0.08;
      modelRef.current.position.z += (targetZ - modelRef.current.position.z) * 0.08;
      
      // Add hover-specific effects
      if (isHovered) {
        // Gentle swaying motion when hovered
        modelRef.current.position.x += Math.sin(state.clock.elapsedTime * 1.8) * 0.02;
        modelRef.current.position.z += Math.cos(state.clock.elapsedTime * 1.6) * 0.02;
      }
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={1.8}
      position={[0, 0, 0]}
    />
  );
};

// Scene Component
const Scene = ({ mousePosition, onModelLoad, onModelError, useFallback = false, isHovered = false }) => {
  const lights = useMemo(() => [
    { position: [8, 8, 4], intensity: 1.2, color: "#ffffff" },
    { position: [-8, -8, -4], intensity: 0.6, color: "#ff6b35" },
    { position: [8, -8, -4], intensity: 0.6, color: "#ff1744" },
    { position: [0, 10, 0], intensity: 0.8, color: "#ffffff" }
  ], []);

  return (
    <>
      <ambientLight intensity={0.7} />
      {lights.map((light, index) => (
        <directionalLight 
          key={index}
          position={light.position} 
          intensity={light.intensity} 
          color={light.color}
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
      ))}
      
      {useFallback ? (
        <FallbackCube mousePosition={mousePosition} isHovered={isHovered} />
      ) : (
        <Float
          speed={isHovered ? 2.5 : 2}
          rotationIntensity={isHovered ? 0.6 : 0.4}
          floatIntensity={isHovered ? 0.6 : 0.4}
        >
          <FutureRobot 
            mousePosition={mousePosition} 
            onLoad={onModelLoad} 
            onError={onModelError}
            isHovered={isHovered}
          />
        </Float>
      )}
      
      <Environment preset="sunset" />
    </>
  );
};

// Animated Contact Form Component
const ContactForm = () => {
  const formRef = useRef(null);
  const paperPlaneRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaperPlane, setShowPaperPlane] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', ''

  useEffect(() => {
    if (!formRef.current) return;

    // GSAP animation for form fields
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate form container
    tl.fromTo(formRef.current, 
      { 
        y: 50, 
        opacity: 0,
        scale: 0.9
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }
    );

    // Animate form fields with stagger
    tl.fromTo(formRef.current.querySelectorAll('.form-field'), 
      { 
        x: 100, 
        opacity: 0,
        rotationY: 15
      },
      { 
        x: 0, 
        opacity: 1,
        rotationY: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
      },
      "-=0.4"
    );

    // Animate submit button
    tl.fromTo(formRef.current.querySelector('.submit-btn'), 
      { 
        y: 30, 
        opacity: 0,
        scale: 0.8
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.6)"
      },
      "-=0.2"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    // Show paper plane
    setShowPaperPlane(true);
    
    // Wait a bit for the plane to appear, then animate
    setTimeout(() => {
      if (paperPlaneRef.current) {
        const tl = gsap.timeline();
        
        // Reset to starting position
        tl.set(paperPlaneRef.current, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1
        });
        
        // Fly in from bottom-left
        tl.to(paperPlaneRef.current, {
          x: -80,
          y: 60,
          rotation: -20,
          duration: 0.8,
          ease: "power2.out"
        })
        
        // Fly up and to the right
        .to(paperPlaneRef.current, {
          x: 100,
          y: -120,
          rotation: 30,
          duration: 1.0,
          ease: "power2.inOut"
        })
        
        // Continue flying with more rotation
        .to(paperPlaneRef.current, {
          x: 200,
          y: -200,
          rotation: 60,
          duration: 0.8,
          ease: "power2.in"
        })
        
        // Final exit with fade out
        .to(paperPlaneRef.current, {
          x: 300,
          y: -300,
          rotation: 90,
          opacity: 0,
          scale: 0.5,
          duration: 0.6,
          ease: "power2.in"
        });
      }
    }, 100);
    
    try {
      // Send email using Nodemailer API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        // Reset form on success
        setFormData({ name: '', email: '', service: '', message: '' });
        
        // Success animation
        gsap.to(formRef.current, {
          scale: 1.05,
          duration: 0.2,
          yoyo: true,
          repeat: 1
        });
      } else {
        setSubmitStatus('error');
        console.error('Email sending failed:', result.error);
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Hide paper plane
      setTimeout(() => setShowPaperPlane(false), 1000);
    }
  };

  return (
    <div 
      ref={formRef}
      className="relative w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-200"
    >
      {/* Paper Plane Element */}
      {showPaperPlane && (
        <div
          ref={paperPlaneRef}
          className="absolute z-50 pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-orange-500 drop-shadow-lg"
          >
            <path
              d="M22 2L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
          Contact Us
        </h3>
        <p className="text-gray-600">Let's start building something amazing together!</p>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
          <p className="font-semibold">🎉 Message sent successfully!</p>
          <p className="text-sm">We'll get back to you within 24 hours.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
          <p className="font-semibold">❌ Failed to send message</p>
          <p className="text-sm">Please try again or contact us directly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="form-field">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div className="form-field">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            placeholder="Enter your email"
          />
        </div>

        {/* Service Request Field */}
        <div className="form-field">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Request Service *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-app">Mobile App</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="form-field">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-btn w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>

      {/* Success Message */}
      {!isSubmitting && formData.name === '' && formData.email === '' && submitStatus !== 'success' && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            We'll get back to you within 24 hours! 🚀
          </p>
        </div>
      )}
    </div>
  );
};

const FooterSection = () => {
  const footerRef = useRef(null);
  const headlineRef = useRef(null);
  const [isHovered, setIsHovered] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelError, setModelError] = useState(false);
  const [modelHovered, setModelHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Enhanced GSAP animation with color effects
  useEffect(() => {
    if (!headlineRef.current || !footerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    const headline = headlineRef.current;
    const words = headline.textContent.split(' ');
    headline.innerHTML = words.map((word, i) => 
      `<span class="word" data-word="${i}">${word}</span>`
    ).join(' ');
    
    // Animate words with color transitions
    tl.fromTo(headline.querySelectorAll('.word'), 
      { 
        y: 120, 
        opacity: 0,
        rotationX: -90,
        scale: 0.8
      },
      { 
        y: 0, 
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "elastic.out(1, 0.6)"
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Mouse movement handler for 3D model
  useEffect(() => {
    // Only run on client side to prevent hydration mismatch
    if (typeof window === 'undefined') return;

    const handleMouseMove = (event) => {
      const rect = footerRef.current?.getBoundingClientRect();
      if (rect) {
        // Normalize mouse position to -1 to 1 range
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleModelLoad = () => {
    setModelLoaded(true);
    setModelError(false);
  };

  const handleModelError = (error) => {
    console.error('3D Model loading error:', error);
    setModelError(true);
    setModelLoaded(false);
  };

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/yourprofile", 
      label: "LinkedIn",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-400"
    },
    { 
      icon: Mail, 
      href: "mailto:your.email@example.com", 
      label: "Email",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-400"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/yourhandle", 
      label: "Twitter",
      bgColor: "bg-amber-600",
      hoverColor: "hover:bg-amber-500"
    }
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative w-full h-full bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden"
      style={{ backgroundColor: '#f5f5dc' }}
    >
      {/* Dynamic Color Overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/15 via-transparent to-yellow-400/15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-bl from-red-400/10 via-transparent to-pink-400/10 pointer-events-none" />
      
      {/* Content Container with Grid Layout - Full Height */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center px-6 max-w-7xl mx-auto">
        
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left flex flex-col justify-center h-full py-8">
          {/* Bold Colorful Headlines */}
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-3 rounded-lg text-lg font-bold mb-4 transform -rotate-2 shadow-2xl">
              GET READY
            </div>
          </div>
          
          <h2 
            ref={headlineRef}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mb-8 leading-tight tracking-tight"
            style={{ 
              perspective: '1000px',
              textShadow: '0 0 30px rgba(0, 0, 0, 0.1)'
            }}
          >
            LET'S WORK TOGETHER
          </h2>
          
          <div className="mb-12">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-amber-600 text-white px-8 py-3 rounded-lg text-lg font-bold transform rotate-1 shadow-2xl">
              INFINITELY CREATIVE
            </div>
          </div>
          
          {/* Vibrant Subtitle */}
          <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-12 max-w-2xl leading-relaxed drop-shadow-sm">
            Ready to build something <span className="text-orange-600 font-bold">AMAZING</span>? 
            Let's create the <span className="text-red-600 font-bold">FUTURE</span> together!
          </p>


            {/* 3D Robot Model */}
          <div 
            className="relative h-96 w-full max-w-2xl"
            onMouseEnter={() => setModelHovered(true)}
            onMouseLeave={() => setModelHovered(false)}
          >
            {isClient && (
              <Canvas
                camera={{ position: [0, 0, 6], fov: 20 }}
                shadows
                className="w-full h-full"
                performance={{ min: 0.5 }}
                gl={{ 
                  antialias: true, 
                  alpha: true,
                  powerPreference: "high-performance"
                }}
              >
                <Suspense fallback={null}>
                  <Scene 
                    mousePosition={mousePosition} 
                    onModelLoad={handleModelLoad} 
                    onModelError={handleModelError}
                    useFallback={modelError}
                    isHovered={modelHovered}
                  />
                  <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 3}
                    enableDamping={true}
                    dampingFactor={0.05}
                  />
                </Suspense>
              </Canvas>
            )}
            
            {/* Loading indicator */}
            {!modelLoaded && !modelError && isClient && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100/50 to-red-100/50 rounded-2xl transition-opacity duration-500">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-orange-600 font-semibold">Loading 3D Model...</p>
                </div>
              </div>
            )}
            
            {/* Error state */}
            {modelError && isClient && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-100/50 to-pink-100/50 rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚠️</span>
                  </div>
                  <p className="text-red-600 font-semibold">3D Model Failed to Load</p>
                  <p className="text-red-500 text-sm mt-2">Using fallback 3D element</p>
                </div>
              </div>
            )}
          </div>
 
          
          {/* Colorful Social Media Icons */}
          <div className="flex justify-center lg:justify-start items-center space-x-6 mb-12">
            {socialLinks.map(({ icon: Icon, href, label, bgColor, hoverColor }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 rounded-2xl ${bgColor} ${hoverColor} transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 cursor-pointer`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                aria-label={label}
              >
                <Icon 
                  size={32} 
                  className="text-white drop-shadow-md" 
                />
                
                {/* Dynamic Tooltip */}
                <span 
                  className={`absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black text-white text-sm font-bold rounded-lg transition-all duration-300 ${
                    isHovered === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  {label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </span>
                
                {/* Glow Effect */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-white/30 blur-xl transition-opacity duration-300 ${
                    isHovered === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            ))}
          </div>
          
          {/* Bold Copyright */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-200">
            <p className="text-gray-800 font-semibold text-lg">
              © 2025 <span className="text-orange-600 font-bold">All Rights Reserved</span> 
              <br />
              <span className="text-sm text-gray-600">Crafted with passion, code, and lots of ☕</span>
            </p>
          </div>
                 
        </div>
        
        {/* Right Side - 3D Model and Contact Form */}
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;