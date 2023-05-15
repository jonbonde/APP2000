import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

function Home() {
    return (
        <div className='main'>
            <header>
                <motion.div 
                className='header-container'>
                    <h1 className='header-title'>
                        <a href="www.google.com">
                            Nettside AS
                        </a>
                        
                    </h1>
                </motion.div>
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
            </header>
            <section>
                <div 
                    className='button-container'>
                    <motion.a
                        initial={{
                            opacity:0,
                            translateX:"-100vh",
                            scale:1,
                            color:"white",
                            background:"#4169E1"
                        }}
                        whileInView={{
                            opacity:1,
                            translateX:"0"
                        }}
                        viewport={{
                            once:true
                        }}
                        transition={{
                            type:"spring",
                            stiffness:87,
                            damping:15.5,
                        }}
                        whileHover={{
                            scale:1.02,
                            background:"#00CED1"                  
                        }}
                        whileTap={{
                            scale:0.9
                        }}
                        href="Markedsplass" class="button button1" >
                            Markedsplass
                    </motion.a>
                    <motion.a
                        initial={{
                            opacity:0,
                            translateX:"-100vh",
                            scale:1,
                            color:"white",
                            background:"#4169E1"
                        }}
                        whileInView={{
                            opacity:1,
                            translateX:"0",
                        }}
                        viewport={{
                            once:true
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
                            scale:1.02,
                            background:"#00CED1"                  
                        }}
                        whileTap={{
                            scale:0.9
                        }}
                        href="#" class="button button2">
                            Lag Anbud
                    </motion.a>
                </div>
            </section>
            <footer>
                <div className='footer-container'>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </footer>
        </div>
    );
}

export default Home;