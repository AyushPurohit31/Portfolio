import { motion } from "framer-motion";
import { contacts } from "../constants";
import { styles } from "../styles";
import Lottie from "react-lottie";
import lottieAnimation from "../assets/lottiefiles/lottie.json"
const Hero = () => {

  const defaultOptions = {
    loop : true,
    autoplay : true,
    animationData : lottieAnimation,
  }
  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col`}>
      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1], transition:{duration : 1}}}
        className={`absolute inset-0 md:top-[140px] xs:top-[80px] max-w-7xl mx-auto ${styles.paddingX} sm:flex md:flex-row  items-start gap-10`}
      >

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ayush</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A web-developer and programmer.
          </p>
          
          <div className="mt-7 pt-8 pb-8">
            <ul className='list-none  flex gap-2'>
              {contacts.map((nav) => (
                <li
                  key={nav.id}
                  onClick={() => setActive(nav.title)}
                >
                  <button>
                    <img 
                      className="m-1 w-12 h-12 rounded-full border-4 border-y-indigo-500" 
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
         
        <div className="h-60 xs:h-72 sm:h-96 md:h-auto pointer-events-none">
          <Lottie
             options={defaultOptions}
          />
        </div>
        
      </motion.div>
    </section>
  );
};

export default Hero;