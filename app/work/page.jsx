"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  BsArrow90DegUp,
  BsArrowRight,
  BsGithub,
  BsArrowUpRight,
} from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack Development",
    title: "ChitChat App",
    description:
      "This is the backend code for a simple messaging app using Node.js, Express, MongoDB, and Socket.IO. It provides the necessary endpoints and real-time communication functionality for a messaging system, where users can send and receive private messages in real-time.",
    stack: [
      { name: "Css" },
      { name: "Tailwind" },
      { name: "Javascript" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Socket.IO" },
    ],
    image: "/assets/work/chitchatapp.png",
    live: "https://capable-swan-50b68e.netlify.app/",
    github: "https://github.com/Martini-Besti/chitchat-frontend.git",
  },
  {
    num: "02",
    category: "Weather App - Full Stack Development",
    title: "Weather App",
    description:
      "A React-based weather application that fetches and displays weather data based on the user's location or selected city. The app provides a 7-day forecast with current weather details such as temperature, wind speed, and a summary. The user can also select a city or location to view its weather information.",
    stack: [
      { name: "Tailwind" },
      { name: "Javascript" },
      { name: "React" },
      { name: "OpenWeatherMap API" },
    ],
    image: "/assets/work/weatherAppMobile2.png",
    live: "https://weather-app-ten-indol-30.vercel.app/",
    github: "https://github.com/Martini-Besti/Weather-App.git",
  },

  {
    num: "03",
    category: "Quiz - Front end Development",
    title: "Quiz",
    description:
      "A simple quiz application built with React. The app fetches quiz questions from an API and allows users to answer multiple-choice questions. It provides feedback on the user's answers and displays the final score at the end of the quiz.",
    stack: [{ name: "Tailwind" }, { name: "Javascript" }, { name: "Css" }],
    image: "/assets/work/quiz.png",
    live: "live not available",
    github: "https://github.com/Martini-Besti/Quiz.git",
  },
  {
    num: "04",
    category: "Game - Front end Development",
    title: "Game",
    description:
      "I designed a French-themed palace setting where players navigate rooms using JavaScript functions, answering challenges to progress through different rooms.",
    stack: [{ name: "Tailwind" }, { name: "Javascript" }, { name: "Css" }],
    image: "/assets/work/game.png",
    live: "live not available",
    github: "https://github.com/Martini-Besti/Game.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // Get the current slide index
    const currentSlide = swiper.activeIndex;
    // Set the current project
    setProject(projects[currentSlide]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>

                {/* GitHub Project Button */}
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[350px] xl:h-[400px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <Image
                      src={project.image}
                      alt=""
                      width={400}
                      height={250}
                      className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
