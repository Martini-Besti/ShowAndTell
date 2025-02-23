"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

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
    title: "E-Commerce Soutions",
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
    title: "Branding & Visual Identity ",
    description:
      "I help businesses increase their online visibility and attract more customers through search engine optimization and digital marketing strategies. Strong branding is key to standing out. I help craft a unique visual identity that represents your business.",
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
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*title*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/*description*/}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
