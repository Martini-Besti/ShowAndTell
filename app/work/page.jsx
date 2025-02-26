"use client";

import { motion } from "framer-motion";
import react, { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltioProvider, TooltipTrigger } from "@/components/tooltip";


import Link from "next/link";
import Image from "next/image";


const projects = [
  {
  num: '01',  
  category: 'Web Development',
  title: 'Project 1',
  description: "",
  stack: 'React, Node, Express, MongoDB',
  },
  {
    num: '02',  
    category: 'Web Development',
    title: 'Project 1',
    description: "",
    stack: 'React, Node, Express, MongoDB',
    },
    {
      num: '03',  
      category: 'Web Development',
      title: 'Project 1',
      description: "",
      stack: 'React, Node, Express, MongoDB',
      },
];


const Work = () => {
  return (
    <div>Work page</div>
  )
}

export default Work;