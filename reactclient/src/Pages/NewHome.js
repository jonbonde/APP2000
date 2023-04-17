import React from 'react';
import { Link } from "react-router-dom";
import { color, motion, useScroll, useTransform } from 'framer-motion';
import "../Utilities/HomeStyle.css";
import background from './bgtest.jpg';



function NewHome() {

    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <motion.div className='main' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' , backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <header>
                <motion.div 
                className='header-container'
                >
                    <h1 className='header-title'>
                        Nettside AS
                    </h1>
                </motion.div>
            </header>

            <motion.section className='about-text'>
            <motion.div
            style={{
                marginTop:"-10vh",
            }}
                initial={{
                    opacity:0,
                    translateX:"-100vh",
                }}
                whileInView={{
                    opacity:1,
                    translateX:"0",
                }}
                transition={{
                    type:"spring",
                    stiffness:87,
                    damping:15.5,
                }}
                className='textbox-container'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. </p>
                </motion.div>
            </motion.section>
            <motion.section className='knappediv' style={{ y }}>
                <div 
                    className='button-container'>
                    <motion.a
                        initial={{
                            opacity:0,
                            translateX:"-100vh",
                            scale:1,
                            color:"white",
                            backgroundImage: "linear-gradient(130deg, #e91779, #244dd1)",
                        }}
                        transition={{
                            type:"spring",
                            stiffness:87,
                            damping:15.5,
                        }}
                        animate={{
                            opacity:1,
                            translateX:"0",
                        }}
                        whileHover={{
                            //scale:1.02,
                            borderRadius:"100px",
                            backgroundImage: "linear-gradient(130deg, #fff, #fff)",
                            color:"#e91779"
                        }}
                        whileTap={{
                            scale:0.9
                        }}
                        style={{
                            // backgroundImage: "linear-gradient(130deg, #e91779, #244dd1)"
                            // linear-gradient(130deg, rgb(233, 23, 121) 0%, rgb(36, 77, 209) 85%)
                            /* linear-gradient(130deg, rgb(233, 23, 121) 0%, rgb(36, 77, 209) 85%)*/
                        }}
                        href="Markedsplass" className="button button1" >
                            Markedsplass
                    </motion.a>
                    <motion.a
                        initial={{
                            opacity:0,
                            translateX:"-100vh",
                            scale:1,
                            color:"white",
                            backgroundImage: "linear-gradient(130deg, #e91779, #244dd1)",
                        }}
                        whileClick={{
                            scale:15
                        }}
                        transition={{
                            type:"spring",
                            stiffness:87,
                            damping:15.5,
                        }}
                        whileHover={{
                            //scale:1.02,
                            borderRadius:"100px",
                            backgroundImage: "linear-gradient(130deg, #fff, #fff)",
                            color:"#e91779"

                        }}
                        animate={{
                            opacity:1,
                            translateX:"0",
                        }}
                        whileTap={{
                            scale:0.9
                        }}
                        href="#" className="button button2">
                            Lag Anbud
                    </motion.a>
                </div>
            </motion.section>
            <motion.section className='about-text' style={{
                marginTop:"-40vh"
            }}>
            <motion.div

                initial={{
                    opacity:0,
                    translateX:"-100vh",
                }}
                whileInView={{
                    opacity:1,
                    translateX:"0",
                }}
                transition={{
                    type:"spring",
                    stiffness:87,
                    damping:15.5,
                }}
                className='textbox-container'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. </p>
                </motion.div>
            </motion.section>
        </motion.div>
    );
}

export default NewHome;