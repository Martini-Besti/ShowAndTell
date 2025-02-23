import { Button } from "@components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "../components/Social";
import Photo from "@components/Photo";
import Stats from "@components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hi I'm <br /> <span className="text-accent">Martina Best</span>
            </h1>
            <p className="max-w0[500px] mb-9 text-white/80">
              I’m a Full Stack Developer with a passion for building scalable,
              high-quality web applications. After transitioning from roles in
              aviation and customer service, I discovered my love for software
              development during a bootcamp, where I gained a solid foundation
              in both front-end and back-end technologies. I am eager to apply
              my problem-solving skills in dynamic environments, contributing to
              innovative projects while continuing to grow as a developer.
            </p>
            {/* button and socials */}
            <div className="flex felx-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                  justify-center items-center text-white text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-non mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
