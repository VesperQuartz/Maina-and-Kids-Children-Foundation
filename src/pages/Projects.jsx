import Button from "../components/Button";
// import images
import project1HeroImg from "/assets/safenet-amb-program.png";
import project2HeroImg from "/assets/almajiri-in-tech.png";
import project3HeroImg from "/assets/empower-her-future.png";

import project1Img from "/assets/project-1.png";
import project2Img from "/assets/project-2.png";
import project3Imga from "/assets/project-3-a.png";
import project3Imgb from "/assets/project-3-b.png";

const Projects = () => {
  return (
    <div>
      {/* project 1 */}
      <div className="my-8" id="Safe-Net-Ambassadors-Program">
        <div className="relative">
          <img src={project1HeroImg} alt="safenet" />
          <div className="absolute top-52 w-full">
            <h1 className="font-bold text-[56px] text-white text-center">
              Safe Net Ambassador&apos;s Program
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 justify-center items-center bg-[#f9f9f9] gap-12 px-16 pb-10 pt-20">
          <img src={project1Img} alt="" className="" />
          <p className="text-xl leading-loose">
            The Maina & Kids SafeNet Ambassadors Program is an initiative
            designed to empower Secondary School Students with knowledge on safe
            and responsible digital practices and also how to use Tech for good.
            In 2024, we successfully implemented two cohorts, training over 60
            ambassadors. Through their peer-to-peer efforts, these ambassadors
            reached and trained over 545 students across Dutse, Jigawa State.
          </p>
          <p className="text-xl leading-loose">
            The program emphasizes mentorship, interactive sessions, and
            community engagement, equipping Secondary School Students to
            advocate for online safety and positively impact their communities.
          </p>
          <img src={project1Img} alt="" />
        </div>
        {/* button */}
        <div className="flex sm:flex-col items-center sm:gap-[15px] md:mt-5 gap-[30px] sm:w-[90%] w-[542px] xl:my-10 xl:justify-center xl:w-full">
          <Button
            content={"donate"}
            btnStyle={
              "bg-[#326699] text-white before:bg-[#0f172a] border-white"
            }
          />
          <Button
            content={"get involved"}
            btnStyle={
              "before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
            }
          />
        </div>
      </div>

      {/* project 2 */}
      <div className="my-8" id="Almajiri-in-Tech-Initiative">
        <div className="relative">
          <img src={project2HeroImg} alt="safenet" />
          <div className="absolute top-52 w-full">
            <h1 className="font-bold text-[56px] text-white text-center">
              Almajiri in Tech Initiative
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center items-center bg-[#f9f9f9] gap-12 px-16 pb-10 pt-20">
          <img src={project2Img} alt="" className="" />
          <p className="text-xl leading-loose">
            The Almajiri-in-Tech Initiative is a program aimed at empowering
            marginalized Almajiri boys with basic digital literacy skills. In
            2019, we successfully trained 50 boys, equipping them with
            foundational computer knowledge. Following their training, the
            participants were enrolled to work in nearby cybercafés, providing
            them with practical experience and a pathway to economic
            empowerment. This initiative bridges the digital divide and fosters
            inclusion by integrating underserved youth into the tech ecosystem.
          </p>
        </div>
        {/* button */}
        <div className="flex sm:flex-col items-center sm:gap-[15px] md:mt-5 gap-[30px] sm:w-[90%] w-[542px] xl:my-10 xl:justify-center xl:w-full">
          <Button
            content={"donate"}
            btnStyle={
              "bg-[#326699] text-white before:bg-[#0f172a] border-white"
            }
          />
          <Button
            content={"get involved"}
            btnStyle={
              "before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
            }
          />
        </div>
      </div>

      {/* project 3 */}
      <div className="my-8" id="Empower-Her-Future">
        <div className="relative">
          <img src={project3HeroImg} alt="safenet" />
          <div className="absolute top-52 w-full">
            <h1 className="font-bold text-[56px] text-white text-center">
              Empower Her Future
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 justify-center items-center bg-[#f9f9f9] gap-12 px-16 pb-10 pt-20">
          <img src={project3Imga} alt="" className="" />
          <p className="text-xl leading-loose">
            Empower Her Future: Street-to-Class is an initiative designed to
            enroll 50 girls, ages 13-16, who are currently hawking on the
            streets, back into school. The program aims to provide educational
            support, including covering tuition and materials. In addition to
            schooling, the initiative will offer skill development workshops
            such as sewing and hairdressing.
          </p>
          <p className="text-xl leading-loose">
            {" "}
            The project also includes psychosocial support to ease their
            transition and ensure long-term success. Through this initiative,
            the girls will gain both an education and practical skills for a
            brighter future. Community involvement will be encouraged to ensure
            the program&apos;s sustainability.
          </p>
          <img src={project3Imgb} alt="" />
        </div>
        {/* button */}
        <div className="flex sm:flex-col items-center sm:gap-[15px] md:mt-5 gap-[30px] sm:w-[90%] w-[542px] xl:my-10 xl:justify-center xl:w-full">
          <Button
            content={"donate"}
            btnStyle={
              "bg-[#326699] text-white before:bg-[#0f172a] border-white"
            }
          />
          <Button
            content={"get involved"}
            btnStyle={
              "before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
            }
          />
        </div>
      </div>

      {/* project 4 */}
      <div className="my-8" id="Health-Awareness">
        <div className="relative">
          <img src={project1HeroImg} alt="safenet" />
          <div className="absolute top-52 w-full">
            <h1 className="font-bold text-[56px] text-white text-center">
              Health Awareness
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 justify-center items-center bg-[#f9f9f9] gap-12 px-16 pb-10 pt-20">
          <img src={project1Img} alt="" className="" />
          <p className="text-xl leading-loose">
            The Health Awareness Program for mothers who work as cleaners at
            Abubakar Tafawa Balewa University, Bauchi, was part of our broader
            commitment to supporting families and creating healthier
            environments for children. By reaching out to over 50 hardworking
            mothers with health education, gift items, gloves, and face masks,{" "}
          </p>
          <p className="text-xl leading-loose">
            We not only appreciated their dedication to maintaining clean
            hostels but also contributed to the well-being of their families.
            Healthier mothers ensure healthier homes, fostering better care for
            their children, which aligns with our mission to uplift children and
            their communities.
          </p>
          <img src={project1Img} alt="" />
        </div>
        {/* button */}
        <div className="flex sm:flex-col items-center sm:gap-[15px] md:mt-5 gap-[30px] sm:w-[90%] w-[542px] xl:my-10 xl:justify-center xl:w-full">
          <Button
            content={"donate"}
            btnStyle={
              "bg-[#326699] text-white before:bg-[#0f172a] border-white"
            }
          />
          <Button
            content={"get involved"}
            btnStyle={
              "before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
            }
          />
        </div>
      </div>

      {/* Sister to Sister */}
      <div className="my-8" id="Sister-to-Sister">
        <div className="relative">
          <img src={project1HeroImg} alt="Sister to Sister" />
          <div className="absolute top-52 w-full">
            <h1 className="font-bold text-[56px] text-white text-center">
              Sister to Sister
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 justify-center items-center bg-[#f9f9f9] gap-12 px-16 pb-10 pt-20">
          <img src={Sister} alt="" className="" />
          <p className="text-xl leading-loose">
            The Sister to Sister program is a mentor-mentee initiative designed
            to empower and support young girls through personalized guidance and
            support. Our experienced mentors work closely with mentees to build
            their confidence, develop life skills, and create pathways for
            personal and professional growth.
          </p>
          <p className="text-xl leading-loose">
            Through regular mentoring sessions, workshops, and activities, we
            help girls navigate challenges, set goals, and work towards
            achieving their dreams. The program focuses on holistic development,
            including academic support, career guidance, and personal
            well-being.
          </p>
          <img src={Sister} alt="" />
        </div>
        {/* button */}
        <div className="flex sm:flex-col items-center sm:gap-[15px] md:mt-5 gap-[30px] sm:w-[90%] w-[542px] xl:my-10 xl:justify-center xl:w-full">
          <Button
            content={"donate"}
            btnStyle={
              "bg-[#326699] text-white before:bg-[#0f172a] border-white"
            }
          />
          <Button
            content={"get involved"}
            btnStyle={
              "before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
            }
          />
        </div>
      </div>

      {/* Pad a Girl */}
      <div className="my-8" id="Pad-a-Girl">
        <div className="relative">
          <img src={project2HeroImg} alt="Pad a Girl" />
          <div className="absolute top-52 w-full">
            <h1 className="font-bold text-[56px] text-white text-center">
              Pad a Girl
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center items-center bg-[#f9f9f9] gap-12 px-16 pb-10 pt-20">
          <img src={Pad} alt="" className="" />
          <p className="text-xl leading-loose">
            The Pad a Girl initiative addresses period poverty and promotes
            menstrual hygiene among young girls in underserved communities. We
            provide sanitary pads and essential hygiene products while
            conducting educational workshops on reproductive health and personal
            hygiene. This program ensures that girls don't miss school or face
            health risks due to lack of access to proper menstrual care
            products.
          </p>
        </div>
        {/* button */}
        <div className="flex sm:flex-col items-center sm:gap-[15px] md:mt-5 gap-[30px] sm:w-[90%] w-[542px] xl:my-10 xl:justify-center xl:w-full">
          <Button
            content={"donate"}
            btnStyle={
              "bg-[#326699] text-white before:bg-[#0f172a] border-white"
            }
          />
          <Button
            content={"get involved"}
            btnStyle={
              "before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
            }
          />
        </div>
      </div>

      {/* Policy Making Awareness */}
      <div className="my-8" id="Policy-Making-Awareness">
        <div className="relative">
          <img src={project3HeroImg} alt="Policy Making Awareness" />
          <div className="absolute top-52 w-full">
            <h1 className="font-bold text-[56px] text-white text-center">
              Policy Making Awareness
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 justify-center items-center bg-[#f9f9f9] gap-12 px-16 pb-10 pt-20">
          <img src={Policy} alt="" className="" />
          <p className="text-xl leading-loose">
            Our Policy Making Awareness program empowers girls to understand and
            participate in decision-making processes that affect their lives and
            communities. Through workshops and practical sessions, we educate
            girls about their rights, policy-making processes, and advocacy
            skills.
          </p>
          <p className="text-xl leading-loose">
            The program creates platforms for girls to voice their opinions,
            engage with community leaders, and contribute to policy discussions.
            We believe that by involving girls in policy-making processes, we
            can create more inclusive and effective solutions for community
            development.
          </p>
          <img src={Policy} alt="" />
        </div>
        {/* button */}
        <div className="flex sm:flex-col items-center sm:gap-[15px] md:mt-5 gap-[30px] sm:w-[90%] w-[542px] xl:my-10 xl:justify-center xl:w-full">
          <Button
            content={"donate"}
            btnStyle={
              "bg-[#326699] text-white before:bg-[#0f172a] border-white"
            }
          />
          <Button
            content={"get involved"}
            btnStyle={
              "before:bg-[#0f172a] text-[#0f172a] hover:text-white border-[#326699]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
