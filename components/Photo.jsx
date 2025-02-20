"use client";
import { motion } from "framer-motion";
import Image from "next/image"; 

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[398px] xl:w-[498px] xl:h-[598px] relative bg-transparent">
          <Image
            src="/MartinaPhoto.png"
            priority
            quality={100}
            fill
            alt="Martina"
            className="object-contain bg-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Photo;
