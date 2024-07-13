/** 
 * FileName - BlogsPage.jsx
 * FileType - .jsx (React Js file)
 * Lines - -/-
 * Created On - 21/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - Blogs Page of the website
 * /////// NOT FINISHED AS OF NOW //////////
*/
import React, {useEffect} from "react";
import { fadeIn } from "../constants/motion";
import { motion } from "framer-motion";

const BlogsPage = () => {
  
  return (
    <>
   
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid m-8 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="https://miro.medium.com/v2/resize:fit:786/format:webp/1*uzp6KrIfqR_L4olFjEPBLw.jpeg"
              CardTitle=""
              titleHref="https://medium.com/@acmmuj/muj-acm-unveiling-the-powerhouse-of-tech-enthusiasts-76dba47e80cf"
              btnHref="https://medium.com/@acmmuj/muj-acm-unveiling-the-powerhouse-of-tech-enthusiasts-76dba47e80cf"
              CardDescription="MUJ ACM: Unveiling the Powerhouse of Tech Enthusiasts"
              Button="Read more"
            />
            <SingleCard
              image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*q4D3K_OimqpWrEoH4blM5A.png"
              CardTitle=""
              titleHref="https://medium.com/@acmmuj/apis-101-a-beginners-crash-course-7e43223d0ed7"
              btnHref="https://medium.com/@acmmuj/apis-101-a-beginners-crash-course-7e43223d0ed7"
              CardDescription="APIs 101: A Beginner’s Crash Course"
              Button="Read more"
            />
           
          </div>
        </div>
      </section>
    </>
  );
};


const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <motion.div 
    variants={fadeIn('down', 40, 0.5)}
    initial="hidden"
    whileInView="show"
    className=''
  >
      <div className="mb-10 bg-white overflow-hidden rounded-lg shadow-lg shadow-cyan-500/50 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 ">
        <img src={image} alt="" className="w-full h-60" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
     </motion.div>
    </>
  );
};

      export default BlogsPage;