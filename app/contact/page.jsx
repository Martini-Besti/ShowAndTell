

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "martina.consulting@outlook.com",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        // Reset form
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.error ? `${data.message}: ${data.error}` : data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form*/}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm always open to discussing product design work or partnership
                opportunities.
              </p>
              
              {/* Form status message */}
              {submitStatus && (
                <div className={`p-3 rounded ${submitStatus.type === 'success' ? 'bg-green-800/30 text-green-400' : 'bg-red-800/30 text-red-400'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              {/*input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  name="firstname" 
                  placeholder="Firstname:" 
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  autoComplete="given-name"
                />
                <Input 
                  type="text" 
                  name="lastname" 
                  placeholder="Lastname:" 
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  autoComplete="family-name"
                />
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Email address" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
                <Input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone number:" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
              </div>
              {/*select*/}
              <Select name="service" value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="logo-design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text area*/}
              <Textarea 
                className="h-[200px]" 
                name="message" 
                placeholder="Leave me a message." 
                value={formData.message}
                onChange={handleChange}
                required
                autoComplete="off"
              />
              {/* button*/}
              <Button 
                type="submit" 
                size="md" 
                className="max-w-40"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </div>
          {/*info for future use*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-4">
                  <div className="w-[52px] h-[52px] xl:h-[72px] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{}</p>
                    <h3 className="text-xl">{}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;