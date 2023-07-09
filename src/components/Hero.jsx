import { motion } from "framer-motion";
import { contacts } from "../constants";
import { styles } from "../styles";
import Lottie from "react-lottie";
import lottieAnimation from "../assets/lottiefiles/lottie.json"
const Hero = (props) => {

  const defaultOptions = {
    loop : true,
    autoplay : true,
    animationData : lottieAnimation,
  }

  const { light} = props;
  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col`}>
      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1], transition:{duration : 1}}}
        className={`absolute inset-0 top-[130px] max-w-7xl mx-auto ${styles.paddingX} flex md:flex-row xs:flex-col items-start gap-10`}
      >

        <div className="mt-[5%]">
          <h1 className={`${styles.heroHeadText} ${
                light? "text-gray-500" : "text-white"
              }`}>
            Hi, I'm <span className='text-[#915EFF]'>Ayush</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 ${
                light? "text-gray-700" : "text-white"
              }`}>
            A web-developer and programmer.
          </p>
          
          <div className="mt-7 pt-8 pb-8">
            <ul className='list-none  flex gap-2'>
              {contacts.map((nav) => (
                <li
                  key={nav.id}
                  onClick={() => setActive(nav.title)}
                >
                  <button className="neon-button rounded-full m-1.5 w-12 h-12 bg-white">
                    <img 
                      className="w-full h-full, p-1" 
                      src={nav.icon} 
                      alt="img" 
                      onClick={() => window.open(nav.link, "_blank")}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <a className="rounded-full bg-[#915EFF]  hover:bg-violet-600 px-5 py-2 font-semibold" href="#contact">Let's connect</a>
        </div>
         
        <div className="mx-auto xs:h-64 md:h-96 pointer-events-none mt-[5%]">
          <Lottie
             options={defaultOptions}
          />
        </div>
        
      </motion.div>
    </section>
  );
};

export default Hero;