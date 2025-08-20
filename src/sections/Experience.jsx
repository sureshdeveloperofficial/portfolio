"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Briefcase,
  Code,
  GraduationCap,
  Award,
  Rocket,
  Users,
  Target,
  TrendingUp,
  Building,
  Coffee,
  Icon,
  // Tech icons
  Database,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  Cpu,
  Layers
} from 'lucide-react';
// Import real tech icons from React Icons
import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiPython,
  SiExpress,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiAdobexd,
  SiPostman,
  SiJira,
  SiTrello,
  SiSlack,
  SiDiscord,
  SiWordpress,
  SiShopify,
  SiStripe,
  SiPaypal,
  SiDigitalocean,
  SiRazorpay,
  SiJsonwebtokens,
  SiBitbucket,
  SiPassport
} from 'react-icons/si';
import { DiDotnet } from "react-icons/di";
import { DiMsqlServer } from "react-icons/di";
import { SiDevexpress } from "react-icons/si";
import { IoLogoBitbucket } from "react-icons/io";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { SiAmazonec2 } from "react-icons/si";
import { SiGoogleauthenticator } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiIcons8 } from "react-icons/si";
import { BiLogoKubernetes } from "react-icons/bi";
import { SiXdadevelopers } from "react-icons/si";
import { TbStack3Filled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";

import ClipPathTitle from '../components/ClipPathTitle';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const timelineRef = useRef(null);
  const paragraphRef = useRef(null);
  
  // paragraph text reveal gsap animation
  useGSAP(() => {
    const paragraphSplit = new SplitText(paragraphRef.current, {
      type: "words",
    });

    gsap.from(paragraphSplit.words, {
      yPercent: 100,
      opacity: 0,
      scale: 0.8,
      ease: "back.out(1.7)",
      duration: 1.2,
      stagger: 0.15,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Experience data with positions for snake-like flow
  const experiences = [
    {
      id: 1,
      title: "Associate Software Developer",
      company: "Webnox Technologies PVT",
      period: "2025 (May) - Present",
      description: [
        "Designing and developing scalable web applications using Next.js, React, Node.js, and Express, following modern development standards.",
        "Leading performance optimization efforts and maintaining code quality using TypeScript, PostgreSQL, and cloud services.",
        "Collaborating with cross-functional teams to deliver high-quality software solutions",
        "Implementing authentication and security protocols with JWT, Passport, and Google Auth.",
        "Integrating cloud services like AWS EC2, Docker, and Kubernetes to ensure smooth deployment and scalability.",
        "Working with cross-functional teams to deliver efficient and high-quality software solutions.",
        "Mentoring junior developers, promoting clean code, and encouraging best practices in version control and deployment."
      ],
      icon: <SiXdadevelopers className="w-6 h-6" />,
      skills: [
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" />, color: "text-black-500" },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" />, color: "text-blue-600" },
        { name: "React", icon: <SiReact className="w-4 h-4" />, color: "text-blue-500" },
        { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" />, color: "text-green-500" },
        { name: "Express", icon: <SiExpress className="w-4 h-4" />, color: "text-gray-600" },
        { name: "Three.js", icon: <SiThreedotjs className="w-4 h-4" />, color: "text-black-500" },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4" />, color: "text-orange-500" },
        { name: "JWT", icon: <SiJsonwebtokens  className="w-4 h-4" />, color: "text-pink-500" },
        { name: "Google Auth", icon: <FcGoogle className="w-4 h-4" />, color: "text-red-500" },
        { name: "Passport", icon: <SiPassport className="w-4 h-4" />, color: "text-green-500" },
        { name: "Postgres", icon: <SiPostgresql className="w-4 h-4" />, color: "text-blue-500" },
        { name: "Github", icon: <SiGithub className="w-4 h-4" />, color: "text-black-500" },
        { name: "Git", icon: <SiGit className="w-4 h-4" />, color: "text-orange-600" },
        { name: "AWS", icon: <FaAws className="w-4 h-4" />, color: "text-black-500" },
        { name: "Node Mailer", icon: <FaMailBulk className="w-4 h-4" />, color: "text-black-500" },
        { name: "Tailwind", icon: <SiTailwindcss className="w-4 h-4" />, color: "text-cyan-500" },
        { name: "AWS EC2", icon: <SiAmazonec2 className="w-4 h-4" />, color: "text-grey-500" },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" />, color: "text-green-600" },
        { name: "GSAP", icon: <SiIcons8 className="w-4 h-4" />, color: "text-black-500" },
        { name: "Docker", icon: <SiDocker className="w-4 h-4" />, color: "text-blue-400" },
        { name: "Kubernetes", icon: <BiLogoKubernetes className="w-4 h-4" />, color: "text-blue-500" }
      ],
      color: "bg-amber-600",
      side: "left",
      pathPoint: 0
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Webnox Technologies",
      period: "2024 (Sep) - 2025 (April)",
      description: [
        "Built and maintained full-stack web applications using React.js, Node.js, and Express.js, deploying on DigitalOcean and AWS.",
        "Designed RESTful APIs, developed robust backend logic, and structured efficient MySQL databases.",
        "Integrated third-party services including Firebase, Razorpay, and JWT for real-time features and secure transactions.",
        "Used Tailwind CSS and Framer Motion for responsive and animated UI components.",
        "Managed backend utilities such as NodeMailer for email automation and used Git/Bitbucket for source control.",
        "Mentored junior developers, promoting clean code practices, version control workflows, and team collaboration."
      ],
      icon: <TbStack3Filled className="w-6 h-6" />,
      skills: [
        { name: "React", icon: <SiReact className="w-4 h-4" />, color: "text-blue-500" },
        { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" />, color: "text-green-500" },
        { name: "Express", icon: <SiExpress className="w-4 h-4" />, color: "text-gray-600" },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4" />, color: "text-blue-700" },
        { name: "Digital Ocean", icon: <SiDigitalocean className="w-4 h-4" />, color: "text-cyan-500" },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4" />, color: "text-orange-500" },
        { name: "Razorpay", icon: <SiRazorpay className="w-4 h-4" />, color: "text-blue-500" },
        { name: "JWT", icon: <SiJsonwebtokens  className="w-4 h-4" />, color: "text-pink-500" },
        { name: "Bitbucket", icon: <IoLogoBitbucket className="w-4 h-4" />, color: "text-blue-500" },
        { name: "Git", icon: <SiGit className="w-4 h-4" />, color: "text-orange-600" },
        { name: "AWS", icon: <FaAws className="w-4 h-4" />, color: "text-black-500" },
        { name: "Node Mailer", icon: <FaMailBulk className="w-4 h-4" />, color: "text-black-500" },
        { name: "Tailwind", icon: <SiTailwindcss className="w-4 h-4" />, color: "text-cyan-500" },
        { name: "Framer Motion", icon: <TbBrandFramerMotion className="w-4 h-4" />, color: "text-yellow-500" }
      ],
      color: "bg-orange-600",
      side: "right",
      pathPoint: 1
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "Webnox Technologies",
      period: "2023 (March) - 2024 (August)",
      description: [
        "Developed and maintained full-stack web applications using React.js (frontend) and Node.js/Express.js (backend).",
        "Designed and optimized MySQL databases for efficient data storage and retrieval.",
        "Deployed and managed web applications on DigitalOcean via Cloudways, ensuring performance and uptime.",
        "Integrated third-party services including Firebase, Razorpay, and JWT for authentication and payments.",
        "Followed responsive design principles and ensured cross-browser compatibility.",
        "Collaborated with senior developers through Git and Bitbucket, learning best practices in version control, clean code, and agile workflows."
      ],
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" />, color: "text-green-500" },
        { name: "Express", icon: <SiExpress className="w-4 h-4" />, color: "text-gray-600" },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4" />, color: "text-blue-700" },
        { name: "Digital Ocean", icon: <SiDigitalocean className="w-4 h-4" />, color: "text-cyan-500" },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4" />, color: "text-orange-500" },
        { name: "Razorpay", icon: <SiRazorpay className="w-4 h-4" />, color: "text-blue-500" },
        { name: "JWT", icon: <SiJsonwebtokens  className="w-4 h-4" />, color: "text-pink-500" },
        { name: "Bitbucket", icon: <IoLogoBitbucket className="w-4 h-4" />, color: "text-blue-500" },
        { name: "Git", icon: <SiGit className="w-4 h-4" />, color: "text-orange-600" }
      ],
      color: "bg-yellow-600",
      side: "left",
      pathPoint: 2
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Webnox Technologies",
      period: "2023 (Nov) - 2024 (March)",
      description: [
        "Developed and maintained dynamic web applications using React.js for frontend and Node.js for backend APIs",
        "Designed and optimized MySQL databases for efficient data storage and retrieval",
        "Implemented responsive design principles and cross-browser compatibility",
        "Collaborated with senior developers to learn best practices and coding standards"
      ],
      icon: <Rocket className="w-6 h-6" />,
      skills: [
        { name: "HTML", icon: <SiHtml5 className="w-4 h-4" />, color: "text-orange-500" },
        { name: "CSS", icon: <SiCss3 className="w-4 h-4" />, color: "text-blue-500" },
        { name: "React", icon: <SiReact className="w-4 h-4" />, color: "text-blue-500" },
        { name: "Node JS", icon: <SiNodedotjs className="w-4 h-4" />, color: "text-green-500" },
        { name: "Express", icon: <SiExpress className="w-4 h-4" />, color: "text-gray-600" },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4" />, color: "text-blue-700" },
        { name: "Digital Ocean", icon: <SiDigitalocean className="w-4 h-4" />, color: "text-cyan-500" }       
      ],
      color: "bg-yellow-600",
      side: "right",
      pathPoint: 3
    },
    {
      id: 4,
      title: "Software Developer Intern",
      company: "Sivasakthi Software Services Private Limited",
      period: "2023 (August) - 2023 (Oct)",
      description: [
        "Experienced ASP.NET and VB.NET developer skilled in building and maintaining web applications using Microsoft technologies",
        "Proficient in SQL Server and legacy system modernization",
        "Developed client websites and learned industry best practices",
        "Gained experience in database management and system integration"
      ],
      icon: <Building className="w-6 h-6" />,
      skills: [
        { name: "Dotnet", icon: <DiDotnet className="w-4 h-4" />, color: "text-blue-500" },
        { name: "Microsoft Sql Server", icon: <DiMsqlServer className="w-4 h-4" />, color: "text-pink-500" },
        { name: "Dev Express", icon: <SiDevexpress className="w-4 h-4" />, color: "text-blue-600" }
      ],
      color: "bg-red-600",
      side: "left",
      pathPoint: 4
    },
    {
      id: 5,
      title: "Bachelor of Computer Science",
      company: "Sri Jayendra Saraswathy Maha Vidhya Colleg Of Arts & Science",
      period: "2020 (May) - 2023 (Jun)",
      description: [
        "Completed Bachelor's degree with focus on software engineering, data structures, and algorithms",
        "Participated in coding competitions and hackathons",
        "Studied database management systems and software development methodologies",
        "Gained foundational knowledge in programming languages and computer science principles"
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      skills: [
        { name: "Programming", icon: <Code className="w-4 h-4" />, color: "text-red-500" },
        { name: "Algorithms", icon: <Cpu className="w-4 h-4" />, color: "text-blue-700" },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4" />, color: "text-blue-700" }
      ],
      color: "bg-orange-700",
      side: "right",
      pathPoint: 5
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    if (!container || !path) return;

    // Check if device is mobile
    let isMobile = window.innerWidth <= 768;
    
    // Handle resize and orientation changes
    const handleResize = () => {
      isMobile = window.innerWidth <= 768;
      
      // Kill all existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Reinitialize animations based on new screen size
      initializeAnimations();
    };
    
    const initializeAnimations = () => {
      // Set initial path styles
      const pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      // Create main timeline for path animation (only on desktop)
      if (!isMobile) {
        const pathTl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const offset = pathLength - (pathLength * progress);
              gsap.set(path, { strokeDashoffset: offset });
              
              // Update progress indicator
              const progressElement = document.querySelector('.timeline-progress');
              if (progressElement) {
                progressElement.textContent = `${Math.round(progress * 100)}%`;
              }
            }
          }
        });
      }

      // Animate each timeline item
      const items = container.querySelectorAll('.timeline-item');
      items.forEach((item, index) => {
        if (isMobile) {
          // On mobile, set items to visible state immediately
          gsap.set(item, {
            opacity: 1,
            scale: 1,
            y: 0
          });
          
          // Simple fade-in animation for mobile
          gsap.fromTo(item, 
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
        } else {
          // Desktop animations
          gsap.set(item, {
            opacity: 0,
            scale: 0.7,
            y: 50
          });

          gsap.to(item, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 50%",
              toggleActions: "play none none reverse"
            }
          });
        }

        // Animate the timeline pin
        const pin = item.querySelector('.timeline-pin');
        if (pin) {
          if (isMobile) {
            // Simple pin animation for mobile
            gsap.fromTo(pin,
              { scale: 0.8, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                delay: index * 0.1 + 0.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 85%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          } else {
            // Desktop pin animation
            gsap.set(pin, { scale: 0, rotation: 180 });
            gsap.to(pin, {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              delay: 0.3,
              ease: "elastic.out(1, 0.75)",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            });
          }
        }

        // Animate the content card
        const card = item.querySelector('.timeline-card');
        if (card) {
          if (isMobile) {
            // Simple card animation for mobile
            gsap.fromTo(card,
              { opacity: 0, y: 15 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: index * 0.1 + 0.3,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 85%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          } else {
            // Desktop card animation
            gsap.set(card, {
              opacity: 0,
              y: 30,
              scale: 0.9
            });
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            });
          }
        }

        // Animate connecting lines (only on desktop)
        if (!isMobile) {
          const connectorLines = item.querySelectorAll('.absolute.top-1\\/2');
          connectorLines.forEach((line, lineIndex) => {
            gsap.set(line, {
              scaleX: 0,
              transformOrigin: lineIndex === 0 ? "right center" : "left center"
            });
            gsap.to(line, {
              scaleX: 1,
              duration: 0.5,
              delay: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            });
          });
        }
      });
    };

    // Initialize animations
    initializeAnimations();

    // Add resize listener
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Set initial path styles
    const pathLength = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    });

    // Create main timeline for path animation (only on desktop)
    if (!isMobile) {
      const pathTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const offset = pathLength - (pathLength * progress);
            gsap.set(path, { strokeDashoffset: offset });
            
            // Update progress indicator
            const progressElement = document.querySelector('.timeline-progress');
            if (progressElement) {
              progressElement.textContent = `${Math.round(progress * 100)}%`;
            }
          }
        }
      });
    }

    // Animate each timeline item
    const items = container.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
      if (isMobile) {
        // On mobile, set items to visible state immediately
        gsap.set(item, {
          opacity: 1,
          scale: 1,
          y: 0
        });
        
        // Simple fade-in animation for mobile
        gsap.fromTo(item, 
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      } else {
        // Desktop animations
        gsap.set(item, {
          opacity: 0,
          scale: 0.7,
          y: 50
        });

        gsap.to(item, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Animate the timeline pin
      const pin = item.querySelector('.timeline-pin');
      if (pin) {
        if (isMobile) {
          // Simple pin animation for mobile
          gsap.fromTo(pin,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              delay: index * 0.1 + 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        } else {
          // Desktop pin animation
          gsap.set(pin, { scale: 0, rotation: 180 });
          gsap.to(pin, {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: 0.3,
            ease: "elastic.out(1, 0.75)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });
        }
      }

      // Animate the content card
      const card = item.querySelector('.timeline-card');
      if (card) {
        if (isMobile) {
          // Simple card animation for mobile
          gsap.fromTo(card,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.1 + 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        } else {
          // Desktop card animation
          gsap.set(card, {
            opacity: 0,
            y: 30,
            scale: 0.9
          });
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });
        }
      }

      // Animate connecting lines (only on desktop)
      if (!isMobile) {
        const connectorLines = item.querySelectorAll('.absolute.top-1\\/2');
        connectorLines.forEach((line, lineIndex) => {
          gsap.set(line, {
            scaleX: 0,
            transformOrigin: lineIndex === 0 ? "right center" : "left center"
          });
          gsap.to(line, {
            scaleX: 1,
            duration: 0.5,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // GSAP Animation
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".experience-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="experience-section">
          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"MY JOURNEY"}
              color={"#2E2D2F"}
              bg={"#FED777"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>
        </section>
        
        <div ref={paragraphRef} className="text-center mb-16">
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Follow the path of my professional evolution through technology and innovation
          </p>
        </div>
  
        {/* Timeline Container */}
        <div ref={containerRef} className="timeline-container relative py-20 min-h-screen">
          {/* Progress Indicator */}
          <div className="absolute top-4 right-4 z-20 bg-amber-100/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-amber-800 font-medium">
            <span className="timeline-progress">0%</span> Complete
          </div>
          
          {/* Snake Path SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
            viewBox="0 0 400 2000"
            preserveAspectRatio="xMidYMin meet"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="25%" stopColor="#ea580c" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="75%" stopColor="#c2410c" />
                <stop offset="100%" stopColor="#a16207" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              ref={pathRef}
              d="M200,50 
                 Q250,100 200,150 
                 Q150,200 200,250 
                 Q250,300 200,350 
                 Q150,400 200,450 
                 Q250,500 200,550 
                 Q150,600 200,650 
                 Q250,700 200,750 
                 Q150,800 200,850 
                 Q250,900 200,950 
                 Q150,1000 200,1050 
                 Q250,1100 200,1150 
                 Q150,1200 200,1250 
                 Q250,1300 200,1350
                 Q150,1400 200,1450
                 Q250,1500 200,1550
                 Q150,1600 200,1650
                 Q250,1700 200,1750
                 Q150,1800 200,1850
                 Q250,1900 200,1950"
              stroke="url(#pathGradient)"
              strokeWidth="6"
              fill="none"
              filter="url(#glow)"
              className="drop-shadow-lg"
            />
          </svg>

          {/* Timeline Items Container */}
          <div ref={timelineRef} className="relative z-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-16">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="timeline-item relative"
                >
                  {/* Timeline Row */}
                  <div className="flex items-center justify-center relative">
                    {/* Left Content */}
                    {exp.side === 'left' && (
                      <div className="flex-1 max-w-md mr-8">
                        <div className="timeline-card bg-amber-50/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-amber-200/50">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-amber-900 mb-2">
                                {exp.title}
                              </h3>
                              <p className="text-orange-700 font-semibold mb-2">
                                {exp.company}
                              </p>
                              <p className="text-sm text-amber-700 mb-3">
                                {exp.period}
                              </p>
                            </div>
                            <div className={`${exp.color} w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                              {exp.id}
                            </div>
                          </div>

                          <div className="text-amber-800 text-sm leading-relaxed mb-4">
                            {exp.description.map((desc, descIndex) => (
                              <div key={descIndex} className="flex items-start mb-2">
                                <span className="text-amber-600 mr-2 flex-shrink-0 mt-0.5">•</span>
                                <span className="flex-1">{desc}</span>
                              </div>
                            ))}
                          </div>

                          {/* Technology Icons */}
                          <div className="mb-4">
                            <p className="text-xs font-semibold text-amber-700 mb-2">Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <div
                                  key={skillIndex}
                                  className={`flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100/50 border border-amber-200/50 ${skill.color}`}
                                >
                                  {skill.icon}
                                  <span className="text-xs font-medium">{skill.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Progress bar */}
                          <div className="w-full bg-amber-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${exp.color.replace('bg-', 'from-')} to-amber-300`}
                              style={{ width: `${(experiences.length - index) * 15}%` }}
                            ></div>
                          </div>

                          {/* Floating orbs */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-pulse opacity-70"></div>
                          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-400 rounded-full animate-bounce opacity-60"></div>
                        </div>
                      </div>
                    )}

                    {/* Center Timeline Pin */}
                    <div className="flex-shrink-0 relative">
                      <div
                        className={`timeline-pin w-20 h-20 ${exp.color} rounded-full flex items-center justify-center text-white shadow-2xl z-20 border-4 border-amber-100`}
                      >
                        {exp.icon}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                      </div>
                      
                      {/* Connecting Lines */}
                      <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-500 -left-8"></div>
                      <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-orange-500 to-amber-400 -right-8"></div>
                    </div>

                    {/* Right Content */}
                    {exp.side === 'right' && (
                      <div className="flex-1 max-w-md ml-8">
                        <div className="timeline-card bg-amber-50/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-amber-200/50">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-amber-900 mb-2">
                                {exp.title}
                              </h3>
                              <p className="text-orange-700 font-semibold mb-2">
                                {exp.company}
                              </p>
                              <p className="text-sm text-amber-700 mb-3">
                                {exp.period}
                              </p>
                            </div>
                            <div className={`${exp.color} w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                              {exp.id}
                            </div>
                          </div>

                          <div className="text-amber-800 text-sm leading-relaxed mb-4">
                            {exp.description.map((desc, descIndex) => (
                              <div key={descIndex} className="flex items-start mb-2">
                                <span className="text-amber-600 mr-2 flex-shrink-0 mt-0.5">•</span>
                                <span className="flex-1">{desc}</span>
                              </div>
                            ))}
                          </div>

                          {/* Technology Icons */}
                          <div className="mb-4">
                            <p className="text-xs font-semibold text-amber-700 mb-2">Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <div
                                  key={skillIndex}
                                  className={`flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100/50 border border-amber-200/50 ${skill.color}`}
                                >
                                  {skill.icon}
                                  <span className="text-xs font-medium">{skill.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Progress bar */}
                          <div className="w-full bg-amber-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${exp.color.replace('bg-', 'from-')} to-amber-300`}
                              style={{ width: `${(experiences.length - index) * 15}%` }}
                            ></div>
                          </div>

                          {/* Floating orbs */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-pulse opacity-70"></div>
                          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-400 rounded-full animate-bounce opacity-60"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Floating particles */}
                  <div
                    className="absolute w-2 h-2 bg-orange-400 rounded-full animate-float opacity-70"
                    style={{
                      left: exp.side === 'left' ? '30%' : '70%',
                      top: '20px',
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                  <div
                    className="absolute w-1 h-1 bg-amber-400 rounded-full animate-float opacity-80"
                    style={{
                      left: exp.side === 'left' ? '25%' : '75%',
                      top: '40px',
                      animationDelay: `${index * 0.3}s`
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "3+", label: "Years Experience", color: "text-amber-700" },
            { number: "50+", label: "Projects", color: "text-orange-700" },
            { number: "15+", label: "Technologies", color: "text-red-700" },
            { number: "95%", label: "Client Satisfaction", color: "text-yellow-700" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-amber-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

              {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
                 /* Ensure bullet points are always visible */
         .timeline-card .flex.items-start span:first-child {
           opacity: 1 !important;
           transform: none !important;
           display: inline !important;
           color: #d97706 !important;
         }
         
         /* Global bullet point styling */
         .timeline-card .text-amber-600 {
           opacity: 1 !important;
           transform: none !important;
           display: inline !important;
           color: #d97706 !important;
           font-weight: bold !important;
         }
         
         /* Force all bullet points to be visible */
         .timeline-card span:first-child {
           opacity: 1 !important;
           transform: none !important;
           display: inline !important;
           color: #d97706 !important;
           font-weight: bold !important;
         }
         
         /* Ensure bullet points in description lists are always visible */
         .timeline-card .text-amber-800 .flex span:first-child {
           opacity: 1 !important;
           transform: none !important;
           display: inline !important;
           color: #d97706 !important;
           font-weight: bold !important;
         }
         
         /* Target bullet points in flex containers */
         .timeline-card .flex.items-start span:first-child {
           opacity: 1 !important;
           transform: none !important;
           display: inline !important;
           color: #d97706 !important;
           font-weight: bold !important;
         }
         
                 /* Universal bullet point visibility */
        .timeline-card .flex span:first-child,
        .timeline-card .text-amber-600,
        .timeline-card .flex.items-start.mb-2 span:first-child {
          opacity: 1 !important;
          transform: none !important;
          display: inline !important;
          color: #d97706 !important;
          font-weight: bold !important;
          visibility: visible !important;
        }
        
        /* Global bullet point layout improvements */
        .timeline-card .flex.items-start.mb-2 {
          align-items: flex-start !important;
          gap: 0.5rem !important;
        }
        
        .timeline-card .flex.items-start.mb-2 span:first-child {
          flex-shrink: 0 !important;
          margin-top: 0.125rem !important;
          line-height: 1.2 !important;
          min-width: 0.5rem !important;
        }
        
        .timeline-card .flex.items-start.mb-2 span:last-child {
          flex: 1 !important;
          line-height: 1.4 !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
        
                 /* Mobile responsive timeline layout */
        @media (max-width: 768px) {
          .timeline-item .flex {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          
          .timeline-item .flex > div {
            max-width: 100% !important;
            margin: 0 !important;
          }
          
          .timeline-pin {
            order: 1 !important;
            margin: 1rem 0 !important;
            width: 3rem !important;
            height: 3rem !important;
          }
          
          .timeline-card {
            order: 2 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 1rem !important;
          }
          
          /* Adjust SVG path for mobile */
          .timeline-container svg {
            display: none;
          }
          
          /* Mobile-specific animations - only for main containers */
          .timeline-item {
            opacity: 1 !important;
            transform: none !important;
          }
          
          .timeline-card {
            opacity: 1 !important;
            transform: none !important;
          }
          
          .timeline-pin {
            opacity: 1 !important;
            transform: none !important;
          }
          
          /* Ensure bullet points and text content are visible on mobile */
          .timeline-card span {
            opacity: 1 !important;
            transform: none !important;
            display: inline !important;
          }
          
          .timeline-card .flex {
            opacity: 1 !important;
            transform: none !important;
          }
          
          .timeline-card .flex span {
            opacity: 1 !important;
            transform: none !important;
            display: inline !important;
          }
          
          /* Ensure all text elements in cards are visible */
          .timeline-card p,
          .timeline-card h3,
          .timeline-card div {
            opacity: 1 !important;
            transform: none !important;
          }
          
          /* Mobile-specific bullet point alignment */
          .timeline-card .flex.items-start.mb-2 {
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
          
          .timeline-card .flex.items-start.mb-2 span:first-child {
            flex-shrink: 0 !important;
            margin-top: 0.125rem !important;
            line-height: 1.2 !important;
          }
          
          .timeline-card .flex.items-start.mb-2 span:last-child {
            flex: 1 !important;
            line-height: 1.4 !important;
            word-wrap: break-word !important;
          }
          
                     /* Force bullet points to be visible */
           .timeline-card .flex.items-start .text-amber-600 {
             opacity: 1 !important;
             transform: none !important;
             display: inline !important;
             color: #d97706 !important;
             font-weight: bold !important;
           }
           
           /* Ensure bullet points in description lists are visible */
           .timeline-card .text-amber-800 .flex span:first-child {
             opacity: 1 !important;
             transform: none !important;
             display: inline !important;
             color: #d97706 !important;
             font-weight: bold !important;
           }
           
           /* Target bullet points more specifically */
           .timeline-card .flex.items-start.mb-2 span:first-child {
             opacity: 1 !important;
             transform: none !important;
             display: inline !important;
             color: #d97706 !important;
             font-weight: bold !important;
           }
           
           /* Comprehensive bullet point visibility for mobile */
           .timeline-card .flex.items-start span:first-child,
           .timeline-card .flex.items-start .text-amber-600,
           .timeline-card .text-amber-800 .flex span:first-child,
           .timeline-card .flex.mb-2 span:first-child {
             opacity: 1 !important;
             transform: none !important;
             display: inline !important;
             color: #d97706 !important;
             font-weight: bold !important;
             visibility: visible !important;
           }
           
           /* Ensure bullet points are not hidden by any means */
           .timeline-card * span:first-child {
             opacity: 1 !important;
             transform: none !important;
             display: inline !important;
             color: #d97706 !important;
             font-weight: bold !important;
             visibility: visible !important;
           }
          
          /* Ensure description text is visible */
          .timeline-card .text-amber-800 {
            opacity: 1 !important;
            transform: none !important;
          }
          
          /* Optimize mobile performance */
          .timeline-item * {
            will-change: auto !important;
          }
          
          /* Ensure proper spacing on mobile */
          .timeline-item {
            margin-bottom: 2rem !important;
          }
          
          /* Hide complex animations on mobile */
          .animate-float {
            display: none !important;
          }
        }
        
        @media (max-width: 480px) {
          .timeline-card {
            padding: 1rem !important;
            margin: 0 0.5rem !important;
          }
          
          .timeline-pin {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          
          .timeline-item .flex {
            gap: 1rem !important;
          }
          
          /* Hide progress indicator on very small screens */
          .timeline-progress {
            display: none;
          }
        }
        
        /* Ensure animations work properly on all screen sizes */
        @media (min-width: 769px) {
          .timeline-item {
            opacity: 0;
            transform: scale(0.7) translateY(50px);
          }
          
          .timeline-card {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          
          .timeline-pin {
            opacity: 0;
            transform: scale(0) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;