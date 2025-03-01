"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io";

import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description: `I’m a Full Stack Developer with a passion for design, building scalable, high-quality web applications.
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
      fieldValue: "See resume download for details or contact page",
    },
    {
      fieldName: "Experience in Tech",
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
      fieldName: "Countries Visited",
      fieldValue: "80+",
    },
    {
      fieldName: "Years on Earth",
      fieldValue: "40 something",
    },
    {
      fieldName: "Availability",
      fieldValue: "Open to opportunities",
    },
  ],
};

// education data
const education = {
  icon: "/", //I think something is missing here!!!!!
  title: "My Education",
  description:
    "Skilled in full-stack development with training in JavaScript, React, and Node.js, complemented by a background in business administration, leadership, first aid, and helicopter safety training.",
  items: [
    {
      institution: "The Developer Academy",
      degree: "Full Stack Developer Bootcamp",
      duration: "2025",
    },
    {
      institution: "EAS Limited",
      degree: "AOI Specialist Training",
      duration: "2024",
    },
    {
      institution: "MediAir",
      degree: "Advanced First Aid",
      duration: "2007 - 2021",
    },
    {
      institution: "Nelson Polytechnic",
      degree: "Business Admin Level 5",
      duration: "1997 - 1998",
    },
  ],
};

// skills data

const skills = {
  title: "My Skills",
  description:
    "Proficient in front-end and back-end technologies, with a focus on creating responsive, user-friendly web applications. Skilled in design tools, version control, and cloud deployment.",
  skillList: [
    {
      name: "HTML5",
      icon: FaHtml5,
    },
    {
      name: "CSS3",
      icon: FaCss3,
    },
    {
      name: "JavaScript",
      icon: FaJs,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      name: "Figma",
      icon: FaFigma,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "Git",
      icon: IoLogoDesignernews,
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// experience data

const experience = {
  icon: "/", //I think something is missing here!!!!!
  title: "Work experience",
  description:
    "Experienced in PCB inspection, data management, and team coordination, with a strong background in aviation as a senior cabin crew member, VIP flight attendant, and customer service professional.",
  items: [
    {
      title: "Full Stack Developer",
      company: "The Developer Academy",
      location: "Remote",
      date: "2024 - Present",
      description:
        "Completed an immersive coding bootcamp focused on full-stack web development. Developed hands-on projects using React.js, Node.js, Express, MongoDB and cloud deployment. Learned problem-solving, debugging, and collaborative development through Agile/Scrum methodologies. Worked on real-world applications, including [mention a key project], applying best coding practices and CI/CD pipelines.",
    },
    {
      title: "AOI Specialist",
      company: "EAS Limited",
      location: "Ashby-de-la-Zouch, UK",
      date: "2022 - 2024 ",
      description:
        "Inspected and analysed PCBs using 3D and 2D photographic programming. Managed data entry and documentation.",
    },
    {
      title: "Temporary Contractor",
      company: "T&K Associates",
      location: "Measham, UK",
      date: "2022 - 2022",
      description:
        "Provided team support to meet project deadlines with a focus on accuracy and collaboration.",
    },
    {
      title: "Freelance Private Flight Attendant",
      company: "Comlux Aviation",
      location: "Clark, Philippines",
      date: "2018 - 2021",
      description:
        "Delivered exceptional customer service on private A318 flights, ensuring passenger comfort and safety.",
    },
    {
      title: "Cabin Senior/Line Checker",
      company: "SalamAir",
      location: "Muscat, Oman",
      date: "2017 - 2017",
      description:
        "Led a team of cabin crew on A320 aircraft, ensuring adherence to safety protocols and company SOPs.",
    },
    {
      title: "Cabin Senior",
      company: "Amiri Flight",
      location: "Doha, Qatar",
      date: "2012 - 2016",
      description:
        "Managed VIP passenger service on A340 and BD700 aircraft, coordinating smooth operations with ground staff.",
    },
    {
      title: "Senior Flight Stewardess,",
      company: "Emirates",
      location: "Dubai, UAE",
      date: "2012 - 2016",
      description:
        "Assisted in leading a team of 16 on the A380, providing high-quality service for over 400 passengers.",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {experience.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60  ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60  ">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
              
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {/* Title & Description */}
                <div className="flex flex-col gap-6 text-center md:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                    {skills.description}
                  </p>
                </div>

                {/* Skill Icons */}
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                  {skills.skillList.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <li
                        key={index}
                        className="relative flex items-center justify-center group"
                      >
                        {/* Skill Icon */}
                        <Icon className="w-12 h-12 text-accent transition-transform duration-300 group-hover:scale-110" />

                        {/* Tooltip (Appears on Hover) */}
                        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black/80 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {skill.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.fieldName}
                        </h3>
                        <div className="flex items-center gap-3">
                        
                          <p className="text-white/60  ">{item.fieldValue}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
