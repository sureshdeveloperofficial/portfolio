"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFirebase,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDocker,
  FaAws,
  FaFigma,
  FaSass,
  FaBootstrap,
  FaWordpress,
  FaPhp,
  FaLaravel,
  FaVuejs,
  FaAngular,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiStripe,
  SiTailwindcss,
  SiD3Dotjs,
  SiPostgresql,
  SiLeaflet,
  SiSocketdotio,
  SiIcons8,
  SiFramer,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiJira,
  SiSlack,
  SiTrello,
  SiNotion,
  SiCanva,
  SiTypescript
} from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";

// Enhanced color map with milk-inspired gradients matching your website
const colorMap = {
  blue: "from-blue-400/20 via-blue-100/30 to-blue-300/25",
  red: "from-red-400/20 via-red-100/30 to-red-300/25",
  green: "from-green-400/20 via-green-100/30 to-green-300/25",
  yellow: "from-yellow-400/20 via-yellow-100/30 to-yellow-300/25",
  teal: "from-teal-400/20 via-teal-100/30 to-teal-300/25",
  purple: "from-purple-400/20 via-purple-100/30 to-purple-300/25",
  orange: "from-orange-400/20 via-orange-100/30 to-orange-300/25",
};

const techIcons = {
  // Frontend
  react: <FaReact className="text-blue-500" title="React" />,
  vue: <FaVuejs className="text-green-500" title="Vue.js" />,
  angular: <FaAngular className="text-red-500" title="Angular" />,
  nextjs: <SiNextdotjs className="text-black" title="Next.js" />,
  html: <FaHtml5 className="text-orange-500" title="HTML5" />,
  css: <FaCss3Alt className="text-blue-500" title="CSS3" />,
  sass: <FaSass className="text-pink-500" title="Sass" />,
  tailwind: <SiTailwindcss className="text-cyan-500" title="Tailwind CSS" />,
  bootstrap: <FaBootstrap className="text-purple-500" title="Bootstrap" />,
  typescript: <SiTypescript className="text-blue-600" title="TypeScript" />,
  javascript: <FaJs className="text-yellow-400" title="JavaScript" />,

  // Backend
  nodejs: <FaNodeJs className="text-green-600" title="Node.js" />,
  express: <SiExpress className="text-gray-600" title="Express.js" />,
  php: <FaPhp className="text-purple-600" title="PHP" />,
  laravel: <FaLaravel className="text-red-600" title="Laravel" />,
  python: <FaPython className="text-blue-500" title="Python" />,

  // Database
  mongodb: <SiMongodb className="text-green-600" title="MongoDB" />,
  postgresql: <SiPostgresql className="text-blue-600" title="PostgreSQL" />,
  mysql: <FaDatabase className="text-blue-800" title="MySQL" />,

  // Services & APIs
  firebase: <RiFirebaseLine className="text-yellow-500" title="Firebase" />,
  stripe: <SiStripe className="text-purple-500" title="Stripe" />,
  aws: <FaAws className="text-orange-500" title="AWS" />,
  vercel: <SiVercel className="text-black" title="Vercel" />,
  netlify: <SiNetlify className="text-green-500" title="Netlify" />,
  heroku: <SiHeroku className="text-purple-500" title="Heroku" />,

  // Libraries & Tools
  gsap: <SiIcons8 className="text-green-500" title="GSAP" />,
  framer: <SiFramer className="text-black" title="Framer Motion" />,
  "framer-motion": <SiFramer className="text-black" title="Framer Motion" />,
  d3: <SiD3Dotjs className="text-orange-500" title="D3.js" />,
  socketio: <SiSocketdotio className="text-black" title="Socket.io" />,
  "socket.io": <SiSocketdotio className="text-black" title="Socket.io" />,
  docker: <FaDocker className="text-blue-500" title="Docker" />,

  // Design & Collaboration
  figma: <FaFigma className="text-purple-500" title="Figma" />,
  canva: <SiCanva className="text-blue-500" title="Canva" />,
  jira: <SiJira className="text-blue-600" title="Jira" />,
  slack: <SiSlack className="text-purple-500" title="Slack" />,
  trello: <SiTrello className="text-blue-500" title="Trello" />,
  notion: <SiNotion className="text-black" title="Notion" />,

  // Other
  github: <FaGithub className="text-black" title="GitHub" />,
  leaflet: <SiLeaflet className="text-green-500" title="Leaflet" />,
  axios: <FaJs className="text-yellow-400" title="Axios" />,
};

const projectLists = [
  {
    id: 1,
    title: "Dickman Discovery",
    description: "A full-stack e-commerce platform built with modern technologies.",
    descriptionPoints: [
      "User authentication and authorization system",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment integration with Stripe",
      "Admin dashboard for inventory management",
      "Order tracking and customer support"
    ],
    technologies: ["react", "nodejs", "mongodb", "express", "stripe", "tailwind", "aws"],
    image: "/images/p1.png",
    color: "blue"
  },
  {
    id: 2,
    title: "Onroadz",
    description: "A collaborative task management application with real-time updates.",
    descriptionPoints: [
      "Real-time task synchronization across devices",
      "Drag-and-drop kanban board interface",
      "Team collaboration and role management",
      "File sharing and document management",
      "Progress tracking and analytics dashboard",
      "Mobile-responsive design for all devices"
    ],
    technologies: ["react", "firebase", "typescript", "tailwind", "gsap", "framer"],
    image: "/images/p2.png",
    color: "red"
  },
  {
    id: 3,
    title: "OneTouch",
    description: "Analytics dashboard for social media management.",
    descriptionPoints: [
      "Multi-platform social media integration",
      "Advanced data visualization with D3.js",
      "Content scheduling and automation",
      "Performance metrics and ROI tracking",
      "Custom reporting and export functionality",
      "Real-time notifications and alerts"
    ],
    technologies: ["react", "d3", "nodejs", "postgresql", "typescript", "tailwind"],
    image: "/images/p3.png",
    color: "green"
  },
  {
    id: 4,
    title: "Driving School",
    description: "Real-time weather application with location-based forecasts.",
    descriptionPoints: [
      "GPS-based location detection",
      "Real-time weather data from OpenWeather API",
      "Interactive maps with Leaflet.js",
      "Weather alerts and notifications",
      "Historical weather data analysis",
      "Offline weather information caching"
    ],
    technologies: ["react", "leaflet", "axios", "tailwind", "gsap"],
    image: "/images/p4.png",
    color: "blue"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations.",
    descriptionPoints: [
      "Interactive 3D animations and effects",
      "Smooth scroll-triggered animations",
      "Responsive design for all devices",
      "Performance-optimized loading",
      "SEO-friendly structure and metadata",
      "Contact form with email integration"
    ],
    technologies: ["react", "gsap", "framer-motion", "sass", "nextjs", "vercel"],
    image: "/images/p5.png",
    color: "yellow"
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with encryption.",
    descriptionPoints: [
      "End-to-end message encryption",
      "Real-time messaging with Socket.io",
      "File and media sharing capabilities",
      "Group chat and channel management",
      "User presence and status indicators",
      "Message search and history retention"
    ],
    technologies: ["react", "socketio", "nodejs", "mongodb", "typescript", "tailwind"],
    image: "/images/p6.png",
    color: "teal"
  },
  {
    id: 7,
    title: "E-Learning Platform",
    description: "Comprehensive online learning management system.",
    descriptionPoints: [
      "Course creation and management tools",
      "Video streaming with adaptive quality",
      "Interactive quizzes and assessments",
      "Progress tracking and certificates",
      "Discussion forums and peer learning",
      "Mobile app for offline learning"
    ],
    technologies: ["react", "nodejs", "mongodb", "aws", "typescript", "tailwind", "docker"],
    image: "/images/p7.png",
    color: "purple"
  },
  {
    id: 8,
    title: "Restaurant Management",
    description: "Complete restaurant operations management system.",
    descriptionPoints: [
      "Table reservation and management",
      "Point of sale (POS) system",
      "Inventory and supply chain tracking",
      "Staff scheduling and payroll",
      "Customer loyalty and rewards program",
      "Analytics and business intelligence"
    ],
    technologies: ["react", "nodejs", "postgresql", "stripe", "typescript", "tailwind"],
    image: "/images/p1.png",
    color: "orange"
  }
];

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );

    // Milk splash animations
    gsap.utils.toArray(".milk-splash-card").forEach((card, index) => {
      const splashElements = card.querySelectorAll(".splash-drop");

      // Stagger animation for splash drops
      gsap.set(splashElements, {
        scale: 0,
        opacity: 0,
        rotation: "random(-360, 360)",
      });

      // Hover animations
      card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector(".card-content"), {
          y: -5,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(splashElements, {
          scale: "random(0.8, 1.2)",
          opacity: "random(0.6, 0.9)",
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
        });

        gsap.to(card.querySelector(".ripple-effect"), {
          scale: 1.5,
          opacity: 0.3,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector(".card-content"), {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(splashElements, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          stagger: 0.02,
          ease: "power2.in",
        });

        gsap.to(card.querySelector(".ripple-effect"), {
          scale: 1,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });

    // Continuous floating animation for cards
    gsap.utils.toArray(".milk-splash-card").forEach((card, index) => {
      gsap.to(card, {
        y: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.2,
      });
    });
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {projectLists.map((project, index) => (
          <div
            key={project.title}
            className={`
              milk-splash-card relative z-30 lg:w-[40vw] w-80 lg:h-[70vh] md:w-[75vw] md:h-[60vh] h-96 flex-none
              rounded-3xl overflow-hidden cursor-pointer
              backdrop-blur-xl border border-amber-200/40 shadow-2xl
              transition-all duration-500 hover:shadow-3xl
              bg-gradient-to-br ${colorMap[project.color] || "from-amber-200/20 via-amber-100/30 to-amber-300/25"}
              hover:bg-gradient-to-br hover:${colorMap[project.color] || "from-amber-200/30 via-amber-100/40 to-amber-300/35"}
            `}
          >
            {/* Milk Splash Effects */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Ripple Effect */}
              <div className="ripple-effect absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-100/30 rounded-full opacity-0"></div>

              {/* Splash Drops */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="splash-drop absolute bg-amber-100/50 rounded-full"
                  style={{
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                ></div>
              ))}

              {/* Milk Swirl Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <path
                    d="M50,200 Q200,50 350,200 Q200,350 50,200"
                    fill="none"
                    stroke="#d4a574"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <path
                    d="M100,150 Q250,100 300,250 Q150,300 100,150"
                    fill="none"
                    stroke="#d4a574"
                    strokeWidth="1.5"
                    opacity="0.2"
                  />
                </svg>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-amber-50/10 to-amber-100/20"></div>
            </div>

            {/* Card Content */}
            <div className="card-content relative p-6 h-full flex flex-col justify-center items-center text-center z-10">
              {/* Floating Milk Droplets around title */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-amber-200/70 rounded-full animate-pulse"></div>
              <div className="absolute -top-1 -right-3 w-2 h-2 bg-amber-100/60 rounded-full animate-pulse delay-300"></div>
              <div className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-amber-300/60 rounded-full animate-pulse delay-500"></div>

              {/* Project Title */}
              <h2 className="text-3xl lg:text-6xl font-black mb-4 tracking-tight leading-tight text-amber-900 drop-shadow-lg">
                {project.title}
              </h2>

              {/* Milk Splash Divider */}
              <div className="w-16 h-1 bg-amber-300/80 rounded-full mb-4 shadow-lg"></div>

              {/* Project Description */}
              <p className="mb-5 text-2xl font-medium w-full text-amber-800 leading-relaxed drop-shadow-sm">
                {project.description}
              </p>

              {/* Project Description Points */}
              <div className="mb-6 w-full flex justify-center">
                <ul className="text-left space-y-2 inline-block">
                  {project.descriptionPoints.map((point, index) => (
                    <li key={index}
                      className="flex items-start gap-2 text-lg text-amber-700 font-medium">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies with Milk Drop Background */}
              <div className="flex flex-wrap gap-2 justify-center max-w-full">
                {(project.technologies || []).map((tech) => {
                  const icon = techIcons[tech];
                  const displayName = icon?.props?.title || tech;

                  return (
                    <div
                      key={tech}
                      className="relative p-2 bg-amber-100/40 rounded-full backdrop-blur-sm border border-amber-200/50 shadow-lg hover:scale-110 transition-transform duration-300 group"
                      title={displayName}
                    >
                      <span className="relative z-10 text-4xl">
                        {icon || (
                          <span className="text-sm font-semibold text-amber-800 px-1">
                            {tech.length > 8 ? tech.substring(0, 8) + '...' : tech}
                          </span>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-amber-50/30 rounded-full blur-sm"></div>

                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-amber-900 text-amber-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                        {displayName}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-amber-900"></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating Bubbles */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-amber-200/40 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-amber-100/50 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-16 left-16 w-2 h-2 bg-amber-300/50 rounded-full animate-bounce delay-1000"></div>
            </div>

            {/* Milk Pour Effect on Hover */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0 bg-amber-200/70 rounded-b-full transition-all duration-700 hover:h-16 opacity-0 hover:opacity-100"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;