import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/prof1.jpg";
import { motion } from "motion/react";
const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">

                        <motion.h1
                            initial={{x: -100, opacity:0 }}
                            animate={{ x:0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                               delay:0.6
                            }} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >Adarsh Sahu</motion.h1>
                        <motion.span initial={{x: -100, opacity:0 }}
                            animate={{ x:0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                               delay:0.16
                            }} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                        <p className="my-2 max-w-xl py-6 font-light tracking tighter">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 lg:p-10 ">
                    <div className="flex justify-center">
                        <motion.img
                        initial={{x: 100, opacity:0 }}
                            animate={{ x:0, opacity: 1 }}
                            transition={{
                                duration: 1,
                               delay:1.2
                            }} className="rounded-2xl" src={profilePic} alt="Adarsh sahu" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
