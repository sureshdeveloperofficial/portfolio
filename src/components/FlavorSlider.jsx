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
    title: "OneTouch",
    description: "A full-stack field service platform built with modern technologies.",
    descriptionPoints: [
      "Core Features: Task management, scheduling, real-time updates, analytics.",
      "Access Control: Role-based access for different user types.",
      "Design: Responsive and mobile-friendly UI.",
      "Notifications: Instant alerts and updates.",
      "Business Impact: Boosts productivity and operational efficiency for field service management",
    ],
    technologies: ["react", "nodejs", "mysql", "express", "firebase"],
    image: "/images/p1.png",
    color: "green"
  },
  {
    id: 2,
    title: "Easy Field Services",
    description: "A collaborative task management application with real-time updates.",
    descriptionPoints: [
      "Core Features: Task management, scheduling, real-time updates, analytics.",
      "Access Control: Role-based access for different user types.",
      "Design: Responsive and mobile-friendly UI.",
      "Notifications: Instant alerts and updates.",
      "Progress tracking and analytics dashboard",
      "Mobile-responsive design for all devices"
    ],
    technologies: ["react", "nodejs", "mysql", "express", "firebase"],
    image: "/images/p2.png",
    color: "blue"
  },
  {
    id: 3,
    title: "Shanthi Gears",
    description: "Products and Mailing Service Management System",
    descriptionPoints: [
      "Purpose: Manage Shanthi Gears’ product catalog, service requests, and customer interactions.",
      "Core Features: Inventory management, service scheduling, customer engagement tools.",
      "Special Feature: Bulk mail sending for customer communication.",
      "Goal: Enhance operational efficiency and customer service."
    ],
    technologies: ["react", "nodejs", "mysql", "express", "firebase"],
    image: "/images/p4.png",
    color: "red"
  },
  {
    id: 4,
    title: "Driving School",
    description: "Analytics dashboard for social media management.",
    descriptionPoints: [
      "Purpose: Learning Management System for students and instructors.",
      "Key Features: Course management, automated scheduling, real-time notifications, sales & performance reporting.",
      "Tech Stack: Firebase for authentication & notifications, MySQL for data management.",
      "Frontend: Responsive React.js interface for seamless cross-device experience.",
      "Impact: Enhanced operational efficiency and improved learning outcomes.",
      "Real-time notifications and alerts"
    ],
    technologies: ["react", "nodejs", "mysql", "firebase", "express"],
    image: "/images/p3.png",
    color: "blue"
  },
  {
    id: 5,
    title: "Scrap Collection System",
    description: "Manage scrap collection operations efficiently.",
    descriptionPoints: [
      "Core Features: Service request handling, scheduling pickups, route optimization, and real-time tracking.",
      "User Roles: Customers, collection agents, and admin with role-based access.",
      "Notifications: Instant alerts for service updates and reminders.",
      "Data Management: Centralized database for customer info, collection history, and payments.",
      "Performance: Optimized loading & navigation for smooth user experience.",
      "Goal: Streamline scrap collection workflows, improve customer satisfaction, and optimize resource allocation.",
      "Security: Two-factor authentication for enhanced account security."
    ],
    technologies: ["react", "nodejs", "mysql", "express", "firebase"],
    image: "/images/p5.png",
    color: "yellow"
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
    <div ref={sliderRef} className="slider-wrapper w-full">
      <div className="flavors flex gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 min-w-max">
        {projectLists.map((project, index) => (
          <div
            key={project.title}
            className={`
              milk-splash-card relative z-30 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
              h-auto min-h-[26rem] sm:min-h-[28rem] md:min-h-[32rem] lg:min-h-[36rem] xl:min-h-[40rem] flex-none
              rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer
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
            <div className="card-content relative p-3 sm:p-4 lg:p-6 h-full flex flex-col justify-between items-center text-center z-10">
              {/* Floating Milk Droplets around title */}
              <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-2 sm:w-3 h-2 sm:h-3 bg-amber-200/70 rounded-full animate-pulse"></div>
              <div className="absolute -top-1 -right-2 sm:-right-3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-100/60 rounded-full animate-pulse delay-300"></div>
              <div className="absolute -bottom-1 sm:-bottom-2 left-2 sm:left-4 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-amber-300/60 rounded-full animate-pulse delay-500"></div>

              {/* Content Container */}
              <div className="w-full flex flex-col items-center flex-1 justify-start min-h-0">
              {/* Project Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black mb-2 sm:mb-3 lg:mb-4 tracking-tight leading-tight text-amber-900 drop-shadow-lg break-words text-center max-w-full px-1">
                {project.title}
              </h2>

              {/* Milk Splash Divider */}
                <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-amber-300/80 rounded-full mb-2 sm:mb-3 lg:mb-4 shadow-lg"></div>

              {/* Project Description */}
                <p className="mb-3 sm:mb-4 lg:mb-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium w-full text-amber-800 leading-relaxed drop-shadow-sm break-words text-center px-2 max-w-full">
                {project.description}
              </p>

              {/* Project Description Points */}
                <div className="mb-3 sm:mb-4 lg:mb-6 w-full flex justify-center flex-1 min-h-0">
                  <ul className="text-left space-y-1 sm:space-y-1.5 lg:space-y-2 inline-block w-full max-w-full px-2">
                  {project.descriptionPoints.map((point, index) => (
                    <li key={index}
                        className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-amber-700 font-medium leading-relaxed w-full">
                        <div className="w-1 sm:w-1.5 lg:w-2 h-1 sm:h-1.5 lg:h-2 bg-amber-400 rounded-full mt-1 sm:mt-1.5 lg:mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed break-words flex-1 min-w-0 hyphens-auto max-w-full text-left">{point}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>

              {/* Technologies with Milk Drop Background */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2 justify-center max-w-full mt-2 sm:mt-3 lg:mt-4 px-2 flex-shrink-0">
                {(project.technologies || []).map((tech) => {
                  const icon = techIcons[tech];
                  const displayName = icon?.props?.title || tech;

                  return (
                    <div
                      key={tech}
                      className="relative p-1 sm:p-1.5 lg:p-2 bg-amber-100/40 rounded-full backdrop-blur-sm border border-amber-200/50 shadow-lg hover:scale-110 transition-transform duration-300 group flex-shrink-0"
                      title={displayName}
                    >
                      <span className="relative z-10 text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                        {icon || (
                          <span className="text-xs sm:text-sm lg:text-base font-semibold text-amber-800 px-1">
                            {tech.length > 5 ? tech.substring(0, 5) + '...' : tech}
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
              <div className="absolute top-2 sm:top-4 lg:top-8 right-2 sm:right-4 lg:right-8 w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-amber-200/40 rounded-full animate-bounce"></div>
              <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-2 sm:left-4 lg:left-8 w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 bg-amber-100/50 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-4 sm:top-8 lg:top-16 left-4 sm:left-8 lg:left-16 w-1 sm:w-1.5 lg:w-2 h-1 sm:h-1.5 lg:h-2 bg-amber-300/50 rounded-full animate-bounce delay-1000"></div>
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