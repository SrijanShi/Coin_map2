import React from 'react'
import "./styles.css"
import phone from "../../assets/Phone.png"
import {motion} from "framer-motion";
function MainComponent() {
  return (
    <div className="flex-info"> 
    <div className="left-component">
        <motion.h1 className="track-heading"
        initial={{opacity: 0, x: 50}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        >Track Crypto</motion.h1>
        <motion.h1 className="real-time-heading"
         initial={{opacity: 0, x: -50}}
         animate={{opacity: 1, x: 0}}
         transition={{duration: 1, delay: 0.5}}>Real Time.</motion.h1>
        <motion.p className="text-para"
         initial={{opacity: 0}}
         animate={{opacity: 1 }}
         transition={{duration: 1, delay: 1}}>Track, Trade, Triumph – Stay Ahead in the Crypto Game!</motion.p>
    </div>
    <div className="phone-container">
        <motion.img src={phone} className="phone-img"
        initial= {{x:-20 , y:-20, z: -20}}
        animate= {{x: 20, y: 20, z: 20}}
        transition={{
            type:"smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
        }}/>
    </div>
    </div>
  )
}

export default MainComponent