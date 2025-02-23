"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description: `I’m a Full Stack Developer with a passion for building scalable, high-quality web applications.
After transitioning from roles in aviation and customer service, I discovered my love for software
development during a bootcamp, which provided me with a solid foundation in front-end and
back-end technologies. I’m excited to apply my problem-solving skills in dynamic environments,
where I can contribute to innovative projects while continuing to grow as a developer.`,

  info: [
    {
      fieldName: "Name",
      fieldValue: "Martina Best",
    },
    {
      fieldName: "Email",
      fieldValue: "martina.besty@gmailcom",
    },
    {
      fieldName: "Experience ",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "New Zealander (UK Resident)",
    },
    {
      fieldName: "Location",
      fieldValue: "East Midlands, UK",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

// experience data

const experience = {
icon: '/',
title: "Experience",
description: "",
items: [
  {
    title: "Full Stack Developer",
    company: "Company Name",
    location: "Location",
    date: "Date",
    description: "Description",
  },
  {
    title: "Full Stack Developer",
    company: "Company Name",
    location: "Location",
    date: "Date",
    description: "Description",
  },
  {
    title: "Full Stack Developer",
    company: "Company Name",
    location: "Location",
    date: "Date",
    description: "Description",
  },
],
};


const Resume = () => {
  return <div>Resume page</div>;
};

export default Resume;
