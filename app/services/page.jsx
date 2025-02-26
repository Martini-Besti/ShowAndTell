"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Custom Website Design",
    description:
      "I create visually stunning, high-performing websites that captivate audiences and drive brand growth. By leveraging the latest technologies, I craft modern, engaging digital experiences that leave a lasting impact.",
    href: "",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "I use the latest technologies to build fast, secure, and scalable websites that work seamlessly across all devices.",
    href: "",
  },
  {
    num: "03",
    title: "E-Commerce Solutions",
    description:
      "With an eye for marketing and a passion for design, I create e-commerce websites that drive sales and increase revenue.",
    href: "",
  },
  {
    num: "04",
    title: "Website Maintenance & Support",
    description:
      "Keep your website secure, updated, and running smoothly with ongoing support and maintenance.",
    href: "",
  },
  {
    num: "05",
    title: "Branding & Visual Identity",
    description:
      "Strong branding is key to standing out. I help craft a unique visual identity that represents your business.",
    href: "",
  },
  {
    num: "06",
    title: "Website Hosting",
    description:
      "I provide fast, reliable hosting services that keep your website running smoothly and securely.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.5, ease: "easeOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-6 group h-full min-h-[320px] p-6 bg-gray-900 rounded-xl shadow-lg"
            >
              {/* Number & Arrow */}
              <div className="flex items-center justify-between">
                <span className="text-6xl font-extrabold text-white/40 group-hover:text-white transition-all duration-500">
                  {service.num}
                </span>
                <Link
                  href={service.href}
                  className="w-16 h-16 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 shadow-md"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/70 text-lg leading-relaxed">{service.description}</p>

              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
