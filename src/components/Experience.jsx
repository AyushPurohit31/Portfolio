import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import StarWrapper from '../sectionWrapper/sectionWrap';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from '../styles';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import { Jobs } from '../constants';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          The companies I have worked for 
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-14 flex flex-col'>
      <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
       {Jobs.map((j) => (
                <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className=" min-h-[180px] bg-[#915EFF] max-w-md p-5 border-b-4 border-slate-200 rounded-xl">
                        <p className="text-white font-bold text-2xl mx-2">
                            <span><BusinessIcon/></span> &nbsp;{j.name}
                        </p>
                        <p className="text-white mx-2 my-2">
                            <span><WorkIcon/></span>&nbsp;{j.role}
                        </p>
                        <p  className="text-white mx-2 my-2">
                            {j.date}
                        </p>
                        <div className='flex flex-wrap gap-3 justify-end'>
                            {j.tags.map((t)=>(
                                <img 
                                className="w-10 h-10"
                                src={t.icon}/>
                            ))}
                        </div>
                    </div>
                </TimelineContent>
              </TimelineItem>
        ))}
    </Timeline>
      </div>
    </>
  );
};

export default StarWrapper(Experience, "work");