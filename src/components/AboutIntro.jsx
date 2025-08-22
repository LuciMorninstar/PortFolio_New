import React from "react";
import { ImBook } from "react-icons/im";
import { SiWikibooks } from "react-icons/si";

const AboutIntro = () => {
  const education = [
    {
      from: "BCA – Danfe College, Sinamangal, Kathmandu ",
      date: "(2023 – Present)",
      desc: "Currently pursuing my Bachelor's in Computer Applications, focusing on web development and programming skills.",
    },
    {
      from: "SLC – Takshashila Academy, Samakhusi, Kathmandu",
      date: "(2021)",
      desc: "Completed School Leaving Certificate with strong academic performance.",
    },
  ];
  return (
    <section className = "flex flex-col gap-3 lg:flex-row">
      <div className = "bg-secondary-color dark_values px-10 rounded-sm py-5 flex flex-col gap-4 justify-center">
        <h2 className=" topic  ">About Me</h2> 
        <p className=" text-justify text-black dark:text-white">
          Hi ! I’m Bibek Pandit, an aspiring Full Stack Web Developer. I’m
          currently pursuing my BCA and have experience building web projects
          using HTML, CSS, JavaScript, and React. I enjoy solving problems,
          learning new technologies, and creating websites that are both
          functional and visually appealing. My goal is to grow into a
          professional full stack developer and contribute to exciting web
          applications.
        </p>
      </div>

      <div className="bg-secondary-color dark_values px-10 rounded-sm py-8 flex flex-col gap-4">
        <h2 className=" topic  flex flex-row gap-4 items-center">Education
            <SiWikibooks className = "text-2xl" />
        </h2>

        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div className = "space-y-1">
              <h3 className="text-[18px] font-semibold text-black dark:text-white">
                {edu.from} {edu.date}
              </h3>
              <p className=" text-justify text-black dark:text-white">
                {edu.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
