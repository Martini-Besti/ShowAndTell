"use client";

import { motion } from "framer-motion";
import react, { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import { BsArrowRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";


import Link from "next/link";
import Image from "next/image";


const projects = [
  {
  num: '01',  
  category: 'Full Stack Development',
  title: 'ChitChat App',
  description: "This is the backend code for a simple messaging app using Node.js, Express, MongoDB, and Socket.IO. It provides the necessary endpoints and real-time communication functionality for a messaging system, where users can send and receive private messages in real-time.",
  stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Tailwind"}, {name: "Javascript"}, {name: "Node.js"}, {name: "Express"}, {name: "MongoDB"}, {name: "Socket.IO"}],
  },
  {
    num: '02',  
    category: 'Full Stack Development',
    title: 'Weather App',
    description: "A React-based weather application that fetches and displays weather data based on the user's location or selected city. The app provides a 7-day forecast with current weather details such as temperature, wind speed, and a summary. The user can also select a city or location to view its weather information.",
    stack: [ {name: "Tailwind"}, {name: "Javascript"}, {name: "React"}, {name: "OpenWeatherMap API"}],
    },
    {
      num: '03',  
      category: 'Full Stack Development',
      title: 'Plants App',
      description: 'A full-stack application that allows users to view and manage a collection of plants. Users can add, edit, and delete plants, as well as view details about each plant. The app uses React for the front end, Node.js and Express for the back end, and MongoDB for the database.', 
      stack: [{name: "Tailwind"}, {name: "Javascript"}, {name: "React"}, {name: "Node.js"}, {name: "Express"}, {name: "MongoDB"}],
      },
      {
        num: '04',  
        category: 'Front end Development',
        title: 'Quiz',
        description: 'A simple quiz application built with React. The app fetches quiz questions from an API and allows users to answer multiple-choice questions. It provides feedback on the user\'s answers and displays the final score at the end of the quiz.',
        stack: [{name: "Tailwind"}, {name: "Javascript"},{name: "Css 3"}],
        },
];


const Work = () => {
  return (
    <div>Work page</div>
  )
}

export default Work;