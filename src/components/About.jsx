import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";


import { textVariant } from "../utils/motion";
import StarWrapper from "../sectionWrapper/sectionWrap";

const About = (props) => {
  const { light } = props;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        whileInView={{ x: [-100, 0], opacity: [0, 1], transition:{duration:0.5} }}
        className='mt-4 text-slate-500 text-[20px] max-w-3xl leading-[30px]'
      >
        I am highly skilled web developer with a strong background in engineering. Starting with electrical engineering, I honed my analytical and problem-solving skills early on in my career. After realizing my passion for web development and computer science, I decided to transition into the field and quickly became proficient in a variety of programming languages and frameworks.
        Throughout my career, I worked on a diverse range of projects. I have a keen eye for design and user experience, and am skilled in creating responsive, user-friendly interfaces that meet the needs of clients and their customers alike.

        In addition to my technical skills, I am also highly organized and communicative. I understand the importance of clear communication and collaboration in the development process, and am always striving to exceed expectations.
        
      </motion.p>
    </>
  );
};

export default StarWrapper(About, "about");