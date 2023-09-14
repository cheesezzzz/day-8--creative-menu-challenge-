import { motion } from "framer-motion";
import { menuAnimation } from "../utils/MenuAnimation";
import { masking, translate, staggerContainer, width } from "../utils/MenuNav";
import { opacity } from "../utils/OpacityAnimation";
import { PiArrowRightLight } from "react-icons/pi";
import { useState, useEffect } from "react";

export default function Menu() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % imgs.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const imgs = [
    {
      src: "../src/assets/images/img1.webp",
      alt: "image 1",
    },
    {
      src: "../src/assets/images/img2.webp",
      alt: "image 2",
    },
    {
      src: "../src/assets/images/img3.webp",
      alt: "image 3",
    },
    {
      src: "../src/assets/images/img4.webp",
      alt: "image 4",
    },
  ];

  const links = [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Works",
      href: "/",
    },
    {
      label: "News",
      href: "/",
    },
    {
      label: "Contact",
      href: "/",
    },
  ];

  return (
    <motion.div
      variants={menuAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className=" z-10 top-0 fixed h-fit w-screen bg-[#FFF9F0] font-denton "
    >
      <div className=" border-t border-black mt-20 py-10">
        <div className="grid grid-cols-10 px-10 grid-rows-2 h-full gap-7">
          {/* Navigation */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="col-span-4 row-span-2 flex flex-col gap-y-5"
          >
            {links.map((link, index) => {
              return (
                <motion.div
                  key={index}
                  variants={masking}
                  className="font-denton text-6xl overflow-hidden"
                >
                  <motion.a
                    variants={translate}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    href={link.href}
                    className="flex justify-between items-center group"
                  >
                    <span className="group-hover:translate-x-3 transition-all duration-300 ease-[cubic-bezier(0.22, 1, 0.36, 1)]">
                      {link.label}
                    </span>
                    <PiArrowRightLight className="group-hover:-translate-x-3 transition-all duration-300 ease-[cubic-bezier(0.22, 1, 0.36, 1)]" />
                  </motion.a>
                  <motion.div
                    variants={width}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-[1px] bg-black"
                  ></motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* News Insight */}
          <motion.a variants={opacity} initial="initial" animate="open" exit="closed" href="" className="col-span-6 flex gap-x-6">
            <div className="relative overflow-hidden h-40 w-72 flex-shrink-0">
              {imgs.map((img, index) => {
                const isActive = currentImage === index;
                return (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute object-cover object-center ${
                      isActive ? "w-full h-full" : "hidden"
                    }`}
                  />
                );
              })}
            </div>
            <div className="font-denton flex flex-col gap-y-2">
              <div className=" tracking-tight">
                <span className="font-light text-base">
                  September 11th, 2023
                </span>
                <h2 className="text-3xl font-bold">
                  Creative Menu Challenge Sparks Curiousity Globally
                </h2>
              </div>
              <p className="font-cabinet text-sm font-light">
                This is a very descriptive and meaningful description of the
                article, I am sure you will learn a lot from reading this right?
                Okay maybe not, but enjoy.{" "}
              </p>
            </div>
          </motion.a>

          {/* Socials */}
          <motion.div variants={opacity} initial="initial" animate="open" exit="closed" className="col-span-3 font-semibold text-lg">
            <p>Follow me on social media</p>
            <div className="flex">

            </div>
           </motion.div>

          {/* Newsletter */}
          <motion.div variants={opacity} initial="initial" animate="open" exit="closed" className="col-span-3">Join the Newsletter</motion.div>
        </div>
      </div>
    </motion.div>
  );
}
