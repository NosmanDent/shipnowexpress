import React from "react";
import { motion } from "framer-motion";
import car from "../assets/car.png";
import wall from "../assets/wall.jpg";

const Motor = () => {
  const carVariants = {
    initial: {
      x: -50,
    },
    animate: {
      x: [1050, -50], // Move from off-screen to starting position and repeat
      scale: 1.5,
      transition: {
        x: {
          type: "tween",
          duration: 10,
          repeat: Infinity, // This will make the animation repeat indefinitely
        },
        scale: {
          type: "tween",
          duration: 1,
        },
      },
    },
  };

  return (
    <section>
      <h1 className="px-8 md:px-12 text-2xl md:text-4xl mb-10 font-extrabold mt-16">
        Enjoy the fastest Delivery
      </h1>
      <div
        className=" w-full mb-16 h-44"
        style={{
          backgroundImage: `url(${wall})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <motion.img
            src={car}
            alt=""
            className="mb-3"
            variants={carVariants}
            initial="initial"
            animate="animate"
          />
        </div>
      </div>
    </section>
  );
};

export default Motor;
