"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
        className="relative w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
      >
        {/* Circle (Unchanged) */}
        <motion.svg
          className="absolute inset-0 m-auto w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#FF00FF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["12 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Image (Responsive Sizing) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src="/MartinaPhoto_transparent.png"
            priority
            quality={100}
            width={250}
            height={350}
            alt="Martina"
            className="object-cover mix-blend-lighten w-[83px] h-[116px] sm:w-[166px] sm:h-[233px] xl:w-[250px] xl:h-[350px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
