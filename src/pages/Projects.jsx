import Button from "../components/Button";
// import images
import project1HeroImg from "/assets/safenet-amb-program.png";
import project2HeroImg from "/assets/almajiri-in-tech.png";
import project3HeroImg from "/assets/empower-her-future.png";

import project1Img from "/assets/project-1.png";
import project2Img from "/assets/project-2.png";
import project3Imga from "/assets/project-3-a.png";
import project3Imgb from "/assets/project-3-b.png";
import { Link } from "react-router-dom";
import { Dialog } from "../components/Dialog";
import React from "react";

const Projects = () => {
  const [isOpen, setOpen] = React.useState();
  return (
    <div className="w-full">
      <Dialog isOpen={isOpen} onClose={() => setOpen(false)} />
      {/* project 1 */}
      <div id="Safe-Net-Ambassadors-Program">
        <div className="relative w-full h-[400px]">
          <img
            src={project1HeroImg}
            alt="safenet"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-bold text-4xl lg:text-6xl text-white text-center">
              Safenet Ambassadors Program
            </h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10">
              <img
                src={project1Img}
                alt=""
                className="w-full lg:w-[600px] h-auto rounded-lg"
              />
              <p className="text-base lg:text-lg text-center lg:text-justify max-w-3xl">
                The Maina & Kids SafeNet Ambassadors Program is an initiative
                designed to empower Secondary School Students with knowledge on
                safe and responsible digital practices and also how to use Tech
                for good. In 2024, we successfully implemented two cohorts,
                training over 60 ambassadors. Through their peer-to-peer
                efforts, these ambassadors reached and trained over 545 students
                across Dutse, Jigawa State.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-6 lg:gap-10">
              <img
                src={project1Img}
                alt=""
                className="w-full lg:w-[600px] h-auto rounded-lg"
              />
              <p className="text-base lg:text-lg text-center lg:text-justify max-w-3xl">
                The program emphasizes mentorship, interactive sessions, and
                community engagement, equipping Secondary School Students to
                advocate for online safety and positively impact their
                communities.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4 md:flex-row">
              <Button
                onclick={() => setOpen(true)}
                content="donate"
                btnStyle="bg-[#326699] text-white before:bg-[#0f172a] border-white"
              />
              <Link to="https://forms.gle/enFrUh2xQ1VqmP8CA">
                <Button
                  content="get involved"
                  btnStyle="before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* project 2 */}
      <div id="Almajiri-in-Tech-Initiative">
        <div className="relative w-full h-[400px]">
          <img
            src={project2HeroImg}
            alt="Almajiri in Tech"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-bold text-4xl lg:text-6xl text-white text-center">
              Almajiri in Tech Initiative
            </h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10">
              <img
                src={project2Img}
                alt=""
                className="w-full lg:w-[500px] h-auto rounded-lg"
              />
              <p className="text-base lg:text-lg text-center lg:text-justify max-w-3xl">
                The Almajiri in Tech Initiative is a program aimed at empowering
                Almajiri students with basic digital literacy skills. In 2024,
                working with a well-established computer knowledge center in
                Dutse, we successfully enrolled 10 Almajiri students in a
                3-month basic computer appreciation and digital literacy course.
              </p>
            </div>
            <p className="text-lg text-center max-w-3xl">
              This initiative not only equips them with essential digital skills
              but also opens up new possibilities for their future. The success
              of this pilot program has encouraged us to expand our reach and
              impact in the coming years.
            </p>
            <div className="flex flex-col gap-4 mt-4 md:flex-row">
              <Button
                content="donate"
                onclick={() => setOpen(true)}
                btnStyle="bg-[#326699] text-white before:bg-[#0f172a] border-white"
              />
              <Link to="https://forms.gle/enFrUh2xQ1VqmP8CA">
                <Button
                  content="get involved"
                  btnStyle="before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* project 3 */}
      <div id="Empower-Her-Future">
        <div className="relative w-full h-[400px]">
          <img
            src={project3HeroImg}
            alt="Empower Her Future"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-bold text-4xl lg:text-6xl text-white text-center">
              Empower Her Future
            </h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10">
              <img
                src={project3Imga}
                alt=""
                className="w-full lg:w-[600px] h-auto rounded-lg"
              />
              <p className="text-base lg:text-lg text-center lg:text-justify max-w-3xl">
                Empower Her Future: Street-to-Class is an initiative designed to
                enroll 50 girls, ages 13-16, who are currently hawking on the
                streets, back into school. The program aims to provide
                educational support, including covering tuition and materials.
                In addition to schooling, the initiative will offer skill
                development workshops such as sewing and hairdressing.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-6 lg:gap-10">
              <img
                src={project3Imgb}
                alt=""
                className="w-full lg:w-[600px] h-auto rounded-lg"
              />
              <p className="text-base lg:text-lg text-center lg:text-justify max-w-3xl">
                The project also includes psychosocial support to ease their
                transition and ensure long-term success. Through this
                initiative, the girls will gain both an education and practical
                skills for a brighter future. Community involvement will be
                encouraged to ensure the program&apos;s sustainability.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4 md:flex-row">
              <Button
                content="donate"
                onclick={() => setOpen(true)}
                btnStyle="bg-[#326699] text-white before:bg-[#0f172a] border-white"
              />
              <Link to="https://forms.gle/enFrUh2xQ1VqmP8CA">
                <Button
                  content="get involved"
                  btnStyle="before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* project 4 */}
      <div id="Health-Awareness">
        <div className="relative w-full h-[400px]">
          <img
            src={project1HeroImg}
            alt="Health Awareness"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-bold text-4xl lg:text-6xl text-white text-center">
              Health Awareness
            </h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10">
              <img
                src={project1Img}
                alt=""
                className="w-full lg:w-[600px] h-auto rounded-lg"
              />
              <p className="text-base lg:text-lg text-center lg:text-justify max-w-3xl">
                The Health Awareness Program for mothers who work as cleaners at
                Abubakar Tafawa Balewa University, Bauchi, was part of our
                broader commitment to supporting families and creating healthier
                environments for children. By reaching out to over 50
                hardworking mothers with health education, gift items, gloves,
                and face masks.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-6 lg:gap-10">
              <img
                src={project1Img}
                alt=""
                className="w-full lg:w-[600px] h-auto rounded-lg"
              />
              <p className="text-base lg:text-lg text-center lg:text-justify max-w-3xl">
                We not only appreciated their dedication to maintaining clean
                hostels but also contributed to the well-being of their
                families. Healthier mothers ensure healthier homes, fostering
                better care for their children, which aligns with our mission to
                uplift children and their communities.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4 md:flex-row">
              <Button
                content="donate"
                onclick={() => setOpen(true)}
                btnStyle="bg-[#326699] text-white before:bg-[#0f172a] border-white"
              />
              <Link to="https://forms.gle/enFrUh2xQ1VqmP8CA">
                <Button
                  content="get involved"
                  btnStyle="before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
