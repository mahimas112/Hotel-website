import React,{ useRef,useEffect } from "react";
import { motion,useAnimation,useInView } from "framer-motion";
import ser1 from "../assets/images/data.jpeg";
import ser2 from "../assets/images/platform.jpeg";
import ser3 from "../assets/images/software.jpeg";
import ser4 from "../assets/images/digitl.jpeg";
import ser5 from "../assets/images/Graphic.jpeg";
import ser6 from "../assets/images/project.jpeg";

const Services = () => {

  const ref =useRef(null);
  const isInView =useInView(ref,{ once:true });

  const maincontrols =useAnimation();

  useEffect(()=>{
    if(isInView){
      maincontrols.start("visible")
    }
  },[isInView])


  return (
    <>
      <div className="container mx-auto px-4 mt-28">
        <motion.div 
        variants={{
          hidden:{opacity:0, y:100},
          visible:{opacity:1, y:0}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 1,delay:0.25}}
        >
        <div className="text-center">
          <h1 className="font-bold text-gray-600 text-6xl py-2 px-4 inline-block w-[400px]">
            Our Services
          </h1>
        </div>
        <div className="text-center mb-8">
          <div className="w-full flex justify-center">
          <h4 className="font-bold text-5xl text-gray-400 px-4 inline-block">
          What We Can Do For You
          </h4>
          </div>
          <div className="mx-auto flex justify-center w-[500px] lg:w-[1000px]">
            <p className="text-lg font-normal text-gray-700 mt-10">Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.</p>
          </div>
        </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto bg-[#f6f6fa] m-12 p-4">

          <motion.div
            style={{ backgroundImage: `url(${ser1})` }}
            whileHover={{ y:-20, cursor: "pointer" ,}}
            transition={{duration:0.1 }}
            variants={{hidden:{opacity:0, y:25},visible:{opacity:1, y:0}}}
            initial="hidden"
            animate="visible"
            className="relative bg-black/100 shadow-md h-[450px] rounded-lg bg-no-repeat bg-cover overflow-hidden flex flex-col justify-end transition-transform duration-300 ease-in-out backdrop-brightness-50 backdrop-blur-lg hover:shadow-xl w-[500px] lg:w-[450px] md:w-[400px]"
          >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}                
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:backdrop-blur-lg hover:backdrop-brightness-50">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center"
                  >
                      <motion.h1 
                        initial={{ opacity: 0, y: 20, scaleX: -1 }}
                        animate={{ opacity: 1, y: 0, scaleX: 1 }}
                        className="text-2xl font-extrabold text-white transition-opacity duration-300 ease-in-out">
                          Data Quality Management
                      </motion.h1>
                  </motion.div>
                  <div className="w-[420px] mt-4">
                    <motion.p 
                      initial={{ opacity: 0, y: 20, scaleX: -1 }} 
                      animate={{ opacity: 1, y: 0, scaleX: 1 }}
                      className="font-semibold text-lg text-white transition-opacity duration-300 ease-in-out"
                    >
                        We excel in agile project management, delivering tailored solutions with transparent communication, risk mitigation, and a client-centric approach for success.                        
                    </motion.p>
                  </div>
                </motion.div>
          </motion.div>

          <motion.div
            style={{ backgroundImage: `url(${ser2})` }}
            whileHover={{ y:-20, cursor: "pointer" }}
            variants={{hidden:{opacity:0, y:25},visible:{opacity:1, y:0}}}
            initial="hidden"
            animate="visible"
            transition={{duration:0.1 }}
            className="relative bg-black/100 shadow-md h-[450px] rounded-lg bg-no-repeat bg-cover overflow-hidden flex flex-col justify-end transition-transform duration-300 ease-in-out backdrop-brightness-50 backdrop-blur-lg hover:shadow-xl w-[500px] lg:w-[450px] md:w-[400px]"
          >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}                
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:backdrop-blur-lg hover:backdrop-brightness-50">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center"
                  >
                      <motion.h1 
                        initial={{ opacity: 0, y: 20, scaleX: -1 }}
                        animate={{ opacity: 1, y: 0, scaleX: 1 }}
                        className="text-2xl font-extrabold text-white transition-opacity duration-300 ease-in-out">
                          Platform Consulting
                      </motion.h1>
                  </motion.div>
                  <div className="w-[420px] mt-4">
                    <motion.p 
                      initial={{ opacity: 0, y: 20, scaleX: -1 }} 
                      animate={{ opacity: 1, y: 0, scaleX: 1 }}
                      className="font-semibold text-lg text-white transition-opacity duration-300 ease-in-out"
                    >
                        In our platform consulting service, we offer expert analysis and optimization, ensuring tailored technology platforms that meet our clients' specific needs.                        
                    </motion.p>
                  </div>
                </motion.div>
          </motion.div>

          <motion.div
            style={{ backgroundImage: `url(${ser3})` }}
            whileHover={{ y:-20, cursor: "pointer" }}
            variants={{hidden:{opacity:0, y:25},visible:{opacity:1, y:0}}}
            initial="hidden"
            animate="visible"
            transition={{duration:0.1 }}
            className="relative bg-black/100 shadow-md h-[450px] rounded-lg bg-no-repeat bg-cover overflow-hidden flex flex-col justify-end transition-transform duration-300 ease-in-out backdrop-brightness-50 backdrop-blur-lg hover:shadow-xl w-[500px] lg:w-[450px] md:w-[400px]"
          >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}                
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:backdrop-blur-lg hover:backdrop-brightness-50">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center"
                  >
                      <motion.h1 
                        initial={{ opacity: 0, y: 20, scaleX: -1 }}
                        animate={{ opacity: 1, y: 0, scaleX: 1 }}
                        className="text-2xl font-extrabold text-white transition-opacity duration-300 ease-in-out">
                          Software Consulting
                      </motion.h1>
                  </motion.div>
                  <div className="w-[420px] mt-4">
                    <motion.p 
                      initial={{ opacity: 0, y: 20, scaleX: -1 }} 
                      animate={{ opacity: 1, y: 0, scaleX: 1 }}
                      className="font-semibold text-lg text-white transition-opacity duration-300 ease-in-out"
                    >
                        In our software consulting service, we offer expert guidance and solutions, leveraging industry knowledge to address diverse software-related challenges for clients.                        
                    </motion.p>
                  </div>
                </motion.div>
          </motion.div>

          <motion.div
            style={{ backgroundImage: `url(${ser4})` }}
            whileHover={{ y:-20, cursor: "pointer" }}
            variants={{hidden:{opacity:0, y:25},visible:{opacity:1, y:0}}}
            initial="hidden"
            animate="visible"
            transition={{duration:0.1 }}
            className="relative bg-black/100 shadow-md h-[450px] rounded-lg bg-no-repeat bg-cover overflow-hidden flex flex-col justify-end transition-transform duration-300 ease-in-out backdrop-brightness-50 backdrop-blur-lg hover:shadow-xl w-[500px] lg:w-[450px] md:w-[400px]"
          >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}                
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:backdrop-blur-lg hover:backdrop-brightness-50">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center"
                  >
                      <motion.h1 
                        initial={{ opacity: 0, y: 20, scaleX: -1 }}
                        animate={{ opacity: 1, y: 0, scaleX: 1 }}
                        className="text-2xl font-extrabold text-white transition-opacity duration-300 ease-in-out">
                          Digital Marketing
                      </motion.h1>
                  </motion.div>
                  <div className="w-[420px] mt-4">
                    <motion.p 
                      initial={{ opacity: 0, y: 20, scaleX: -1 }} 
                      animate={{ opacity: 1, y: 0, scaleX: 1 }}
                      className="font-semibold text-lg text-white transition-opacity duration-300 ease-in-out"
                    >
                        Our digital marketing services encompass a strategic approach to boost online visibility, engage target audiences effectively, and drive substantial business growth for our clients.                        
                    </motion.p>
                  </div>
                </motion.div>
          </motion.div>

          <motion.div
            style={{ backgroundImage: `url(${ser5})` }}
            whileHover={{ y:-20, cursor: "pointer" }}
            variants={{hidden:{opacity:0, y:25},visible:{opacity:1, y:0}}}
            initial="hidden"
            animate="visible"
            transition={{duration:0.1 }}
            className="relative bg-black/100 shadow-md h-[450px] rounded-lg bg-no-repeat bg-cover overflow-hidden flex flex-col justify-end transition-transform duration-300 ease-in-out backdrop-brightness-50 backdrop-blur-lg hover:shadow-xl w-[500px] lg:w-[450px] md:w-[400px]"
          >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}                
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:backdrop-blur-lg hover:backdrop-brightness-50">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center"
                  >
                      <motion.h1 
                        initial={{ opacity: 0, y: 20, scaleX: -1 }}
                        animate={{ opacity: 1, y: 0, scaleX: 1 }}
                        className="text-2xl font-extrabold text-white transition-opacity duration-300 ease-in-out">
                          Graphic Design
                      </motion.h1>
                  </motion.div>
                  <div className="w-[420px] mt-4">
                    <motion.p 
                      initial={{ opacity: 0, y: 20, scaleX: -1 }} 
                      animate={{ opacity: 1, y: 0, scaleX: 1 }}
                      className="font-semibold text-lg text-white transition-opacity duration-300 ease-in-out"
                    >
                        Our graphic design service is dedicated to elevating brands through creative expertise. We craft visually stunning solutions tailored to diverse client needs, ensuring a lasting and impactful visual presence.                        
                    </motion.p>
                  </div>
                </motion.div>
          </motion.div>

          <motion.div
            style={{ backgroundImage: `url(${ser6})` }}
            whileHover={{ y:-20, cursor: "pointer" }}
            variants={{hidden:{opacity:0, y:25},visible:{opacity:1, y:0}}}
            initial="hidden"
            animate="visible"
            transition={{duration:0.1 }}
            className="relative bg-black/100 shadow-md h-[450px] rounded-lg bg-no-repeat bg-cover overflow-hidden flex flex-col justify-end transition-transform duration-300 ease-in-out backdrop-brightness-50 backdrop-blur-lg hover:shadow-xl w-[500px] lg:w-[450px] md:w-[400px]"
          >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}                
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:backdrop-blur-lg hover:backdrop-brightness-50">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center"
                  >
                      <motion.h1 
                        initial={{ opacity: 0, y: 20, scaleX: -1 }}
                        animate={{ opacity: 1, y: 0, scaleX: 1 }}
                        className="text-2xl font-extrabold text-white transition-opacity duration-300 ease-in-out">
                          Project Management
                      </motion.h1>
                  </motion.div>
                  <div className="w-[420px] mt-4">
                    <motion.p 
                      initial={{ opacity: 0, y: 20, scaleX: -1 }} 
                      animate={{ opacity: 1, y: 0, scaleX: 1 }}
                      className="font-semibold text-lg text-white transition-opacity duration-300 ease-in-out"
                    >
                        Within our project management service, we specialize in orchestrating software development with precision, guaranteeing timely delivery and exceeding client expectations.                        
                    </motion.p>
                  </div>
                </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </>
  );
};

export default Services;
