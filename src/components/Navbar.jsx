import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = (props) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { light, onLightChange } = props;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <motion.nav
    initial = {{y : -50}}
    animate={{
      y: 0,
    }}
    transition = {{
      duration : 1
    }}
      className={`${
        styles.paddingX
      } w-full flex items-center pt-5 pb-5 fixed top-0 z-50 ${
        scrolled ? "bg-gray-700" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className={`
              ${
                light && scrolled? "text-white" : null
              }
              ${
                !light && !scrolled? "text-white" : null
              }
              ${
                !light && scrolled? "text-white" : null
              }
              ${
                light && !scrolled? "text-slate-600" : null
              }
            hover:text-fuchsia-600 text-[20px] font-bold cursor-pointer flex`}>
            Ayush &nbsp;
            <span className='sm:hidden'> |&nbsp; Purohit</span>
          </p>
        </Link>

        <div className="flex">
            <FormGroup>
              <FormControlLabel
                control={<Switch onChange={onLightChange} sx={{ m: 1 }}  defaultChecked />}
                label={
                  !light? <DarkModeIcon /> : <LightModeIcon className={`${
                    scrolled? "text-white-100" : "text-gray-800"
                  }`}/>
                }
              />
            </FormGroup>
          <ul className='list-none hidden md:flex flex-row gap-7'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`
                ${
                  light && scrolled? "text-white" : null
                }
                ${
                  !light && !scrolled? "text-white" : null
                }
                ${
                  !light && scrolled? "text-white" : null
                }
                ${
                  light && !scrolled? "text-slate-700" : null
                }
              hover:text-fuchsia-600 md:text-[20px] sm:text-[16px] font-medium cursor-pointer my-auto`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
       
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-purple-400"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;