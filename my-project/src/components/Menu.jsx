import { motion } from "framer-motion";
import { menuAnimation } from "../utils/MenuAnimation";
import { masking, translate, staggerContainer, width } from "../utils/MenuNav";


export default function Menu() {

  const imgs = [
    {
      src: "my-project/src/assets/images/img1.webp",
      alt: "image 1"
    },
    {
      src: "my-project/src/assets/images/img2.webp",
      alt: "image 2"
    },
    {
      src: "../assets/images/img3.webp",
      alt: "image 3"
    },
    {
      src: "../assets/images/img4.webp",
      alt: "image 4"
    },
  ]

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
      className=" z-10 top-0 fixed h-[70vh] w-screen bg-[#FFF9F0]"
    >
      <div className=" border-t border-black mt-20 py-10">
        <div className="grid grid-cols-10 px-10 grid-rows-2 h-full gap-5">

          {/* Navigation */}
          <motion.div variants={staggerContainer} initial="hidden" animate="show" exit="exit" className="col-span-4 row-span-2 flex flex-col gap-y-5">
            
            {links.map((link, index) => {
              return (
                <motion.div key={index} variants={masking} className="font-denton text-6xl overflow-hidden">
                  <motion.a variants={translate} initial="initial" animate="animate" exit="exit" href={link.href} className="block translate-y-">{link.label}</motion.a>
                  <motion.div variants={width} initial="initial" animate="animate" exit="exit" className="h-[1px] bg-black"></motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* News Insight */}
          <div className="col-span-6 flex">
            <div className="">
              {imgs.map((img, index) => {
                <img key={index} src={img.src} alt={img.alt} />
              })}
            </div>
            <div>

            </div>
          </div>

          {/* Socials */}
          <div className="col-span-3">Follow me on social media</div>

          {/* Newsletter */}
          <div className="col-span-3">Join the Newsletter</div>
        </div>
      </div>
    </motion.div>
  );
}
