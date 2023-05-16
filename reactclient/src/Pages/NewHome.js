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
                <Link to="/">
                <motion.div 
                className='header-container'>
                    <h1 className='header-title'>
                            Nettside AS
                    </h1>
                </motion.div>
                </Link>
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
                        Welcome to a new and exciting website dedicated to help local businesses and aspiring entrepreneurs achieve their goals. Nettside AS is an up and coming new site that is trying to create a tool that can help and coordinate different actors and their future development. Within this website you can make use of our tools to generate posts and create better visual aid for how you would like your website to appear and behave. Please bear in mind that this is a fairly new website and many elements are therefore subject to changes and some kinks need to be worked out, but we believe that the core uses and functions will still be a tremendous help for the ongoing aspirations of small businesses and newcomers towards the task of creating a website.
                    </p>
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
                            Marketplace
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
                        href="LoggInn" className="button button2">
                            Log in
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
                className='bottom-text-container'>
                    <p>
                        To get started you will need a user which can be registered and activated by pressing the log in button. When you have created and logged in to a user you can start creating your first commission listing for you new website. This website is achieved through the combined efforts of Ruben With Persen, Thomas Terjesen, Jonas Dankertsen, Andreas Jøsendal, Robin Bruun and Jonathan Sveinhaug Hoffmann. We sincerely hope you enjoy and share this website with your friends and family.
                    </p>
                </motion.div>
            </motion.section>
        </motion.div>
    );
}

export default NewHome;