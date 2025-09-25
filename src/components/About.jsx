import React from 'react'
import { motion } from 'framer-motion'


export default function About(){
return (
<section id="about" className="py-14">
<motion.h2 initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} className="text-2xl font-semibold">About</motion.h2>
<motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="mt-4 text-slate-300 max-w-3xl">I build production-ready backends and interactive frontends. My recent work focuses on building low-latency computer vision pipelines (YOLO, TensorFlow), containerized microservices, and cloud observability for scalable systems.</motion.p>
</section>
)
}