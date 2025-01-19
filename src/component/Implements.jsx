import React from "react";
import "../Header.css";
import Ai from "../assets/Ai.jpeg";
import cloud from "../assets/Cloud.jpeg";
import Blockchain from "../assets/Blockchain.jpeg";
import Iot from "../assets/Iot.jpeg";

function Implements() {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="font-poppins mx-auto max-w-screen-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-center pt-9 pb-4">
            Successful Tech Implements
          </h1>
          <p className="text-center text-[18px] sm:text-[18px]">
            Hubnex invest offer a comprehensive suite of technology enablement
            services tailored to meet the specific requirements of each startup
            we work with.
          </p>
        </div>

        <div className="py-12">
          <div className="flex flex-wrap justify-center gap-12">
            {/* card1 */}
            <div className="w-full sm:w-[300px] lg:w-[500px] ">
              <div className="flex flex-col items-center">
                <img
                  className="w-44 h-44 mb-3 rounded-full shadow-lg"
                  src={Ai}
                  alt="AI Powered"
                />
                <h5 className="text-lg font-bold text-gray-800 dark:text-white">
                  AI-Powered
                </h5>
                <span className="text-lg font-bold text-gray-800 dark:text-white">
                  Analytics Platform
                </span>
                <p className="text-center mt-3 text-sm">
                  We partner with a data analytics startup to develop an
                  AI-powered platform using machine learning and big data
                  technologies, delivering real-time insights and predictive
                  analytics for businesses.
                </p>
              </div>
            </div>

            {/* card2 */}
            <div className="w-full sm:w-[300px] lg:w-[500px]">
              <div className="flex flex-col items-center">
                <img
                  className="w-44 h-44 mb-3 rounded-full shadow-lg"
                  src={cloud}
                  alt="Cloud Native"
                />
                <h5 className="text-lg font-bold text-gray-800 dark:text-white">
                  Cloud-Native
                </h5>
                <span className="text-lg font-bold text-gray-800 dark:text-white">
                  Application Development
                </span>
                <p className="text-center mt-3 text-sm">
                  We help a SaaS startup build a cloud-native subscription
                  platform with expertise in cloud architecture,
                  containerization, and microservices for scalable,
                  cost-effective deployment.
                </p>
              </div>
            </div>

            {/* card3 */}
            <div className="w-full sm:w-[300px] lg:w-[500px]">
              <div className="flex flex-col items-center">
                <img
                  className="w-44 h-44 mb-3 rounded-full shadow-lg"
                  src={Blockchain}
                  alt="Blockchain"
                />
                <h5 className="text-lg font-bold text-gray-800 dark:text-white">
                  Blockchain-Based
                </h5>
                <span className="text-lg font-bold text-gray-800 dark:text-white">
                  Supply Chain Solution
                </span>
                <p className="text-center mt-3 text-sm">
                  We assist a startup in revolutionizing the supply chain
                  industry by creating a blockchain-based solution for
                  transparent, secure transactions, ensuring end-to-end
                  visibility and traceability of goods.
                </p>
              </div>
            </div>

            {/* card4 */}
            <div className="w-full sm:w-[300px] lg:w-[500px]">
              <div className="flex flex-col items-center">
                <img
                  className="w-44 h-44 mb-3 rounded-full shadow-lg"
                  src={Iot}
                  alt="IoT Enabled"
                />
                <h5 className="text-lg font-bold text-gray-800 dark:text-white">
                  IoT-Enabled
                </h5>
                <span className="text-lg font-bold text-gray-800 dark:text-white">
                  Smart Home Solution
                </span>
                <p className="text-center mt-3 text-sm">
                  We collaborate with a startup to improve their IoT-enabled
                  smart home devices by integrating sensors, wireless
                  communication, and cloud analytics for innovative, convenient,
                  secure, and energy-efficient solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Implements;
