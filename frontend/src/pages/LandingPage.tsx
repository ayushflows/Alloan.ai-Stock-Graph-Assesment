import { useEffect, useState, useRef } from "react";
import bgImg from "../assets/bgimg.png";
import { motion } from "framer-motion";
import StockGraphComponent from "../components/StockGraphComponent";

function LandingPage() {
  const [animateText, setAnimateText] = useState(false);
  const graphRef = useRef<HTMLDivElement | null>(null);  // Ref for the graph component

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateText(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to the graph component when button is clicked
  const handleGetStartedClick = () => {
    graphRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="text-2xl text-[#E5E5E5] landing-page-bg landing-page-scrollbar relative overflow-x-hidden overflow-y-auto min-h-screen">
        <div
          className="absolute inset-0 w-[100vw] h-[100vh] opacity-[0.13]"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "invert(1)",
          }}
        ></div>
        <div className="abel-regular w-full text-center pt-32 relative">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            initial={{ scale: 1.5, y: "100px", opacity: 0 }}
            animate={{
              scale: animateText ? 1 : 1.5,
              y: animateText ? 0 : "100px",
              opacity: animateText ? 1 : 0,
            }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
          >
            Track Your Favorite Stocks
          </motion.h1>
          <motion.h2
            className="text-[#F97315] mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            initial={{ scale: 1.5, y: "100px", opacity: 0 }}
            animate={{
              scale: animateText ? 1 : 1.5,
              y: animateText ? 0 : "100px",
              opacity: animateText ? 1 : 0,
            }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            in Real-Time 📈
          </motion.h2>
          <motion.p
            className="max-w-[90%] sm:max-w-[65%] lg:max-w-[40vw] text-center mx-auto mt-12 text-[#9299b8] text-[12px] md:text-[17px] inter-regular"
            initial={{ y: "100px", opacity: 0 }}
            animate={{
              y: animateText ? 0 : "100px",
              opacity: animateText ? 1 : 0,
            }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            Stay ahead of the market with dynamic, live-updating stock graphs.
            Analyze trends, make decisions, and stay informed!
          </motion.p>
        </div>
        <div className="w-full flex justify-center items-center mt-12 relative inter-regular">
          <motion.button
            className="bg-[#1D3C50] text-[#F5F5F5] font-semibold w-[130px] md:w-[160px] h-[50px] flex justify-center items-center text-[15px] md:text-lg transition-all duration-200 ease-in-out transform shadow-md hover:shadow-lg hover:bg-[#F6A01D] hover:text-[#2D2D2D] hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{
              opacity: animateText ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 1.2,
            }}
            onClick={handleGetStartedClick}
          >
            Get Started <span className="ml-2">&rarr;</span>
          </motion.button>

          <motion.button
            className="bg-[#04090fab] bg-opacity-30 backdrop-blur-xl ml-10 text-white w-[130px] md:w-[160px] h-[50px] flex justify-center items-center text-[15px] md:text-lg transition-all duration-200 ease-in-out transform hover:bg-opacity-60 hover:bg-[#04090f] hover:shadow-lg hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{
              opacity: animateText ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 1.2,
            }}
            onClick={() => {
              window.open(
                "https://github.com/ayushflows/GenAI-Hackathon_LogiX",
                "_blank"
              );
            }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
      <div ref={graphRef}>
        <StockGraphComponent />
      </div>
    </>
  );
}

export default LandingPage;
