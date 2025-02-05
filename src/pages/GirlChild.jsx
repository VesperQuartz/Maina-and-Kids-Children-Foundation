import Group from "/assets/Rectangle 27.png";
import Education from "/assets/Rectangle 23.png";
import Health from "/assets/Rectangle 25.png";
import Skill from "/assets/Rectangle 26.png";
import Confidence from "/assets/Rectangle 24.png";
import Sister from "/assets/Picture.png";
import Pad from "/assets/Pad.png";
import Policy from "/assets/Policy.png";
import Line from "/assets/Line 2.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Dialog } from "../components/Dialog";
import React from "react";

const GirlChild = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = React.useState();

  return (
    <div className="" id="girl-child">
      <Dialog isOpen={isOpen} onClose={() => setOpen(false)} />
      {/* First Section */}
      <div className="">
        {/* Header 1 */}
        <div className="flex justify-center items-center flex-col p-[40px] sm:p-[20px] gap-[10px]">
          <h3 className="text-[#336699] font-semibold text-xl capitalize font-montserrat">
            GIRL CHILD
          </h3>
          <h1 className="text-[56px] sm:text-3xl sm:text-center font-extrabold text-[0F172A]">
            Girl Child Program
          </h1>
        </div>

        {/* Image and text */}
        <div className="grid grid-cols-2 sm:grid-cols-1 items-center px-[100px] sm:px-[20px] gap-[67px] sm:gap-[30px]">
          <img className="w-full object-cover" src={Group} alt="Group image" />
          <div className="flex gap-[24px] items-center sm:flex-col">
            <img className="sm:h-[100px]" src={Line} alt="" />
            <p className="text-[18px] sm:text-center">
              The Girl Child Program was launched to carry out awareness
              activities among young girls in rural communities in the Northern
              part of Nigeria on sanitary hygiene and bring about possible
              solution to ending period poverty.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div>
        {/* Header 2 */}
        <div className="flex justify-center items-center flex-col p-[60px] sm:p-[20px] gap-[10px]">
          <h3 className="text-[#336699] font-semibold text-xl capitalize font-montserrat">
            PROBLEM
          </h3>
          <h1 className="text-[56px] sm:text-3xl font-extrabold text-[0F172A] sm:text-center">
            A glimpse into the problem
          </h1>
        </div>

        {/* Paragraph */}
        <div className="sm:px-[20px] px-[100px] items-center mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-1 py-10 gap-[91px] sm:gap-6">
            <p className="bg-[#F9F9F9] rounded-[10px] py-5 px-5 text-[18px] sm:text-[16px]">
              The situation of the girl child in the northern part of Nigeria is
              a toxic situation of disregard, lack of awareness, lack of proper
              amenities, discrimination, carelessness and utter
              irresponsibility. The girl child is seen as the lesser child,
              whose only purpose is marriage, staying home and giving birth. no
              education, no health awareness, no skills, no dreams and no voice.
            </p>
            <p className="bg-[#CA8A04] rounded-[10px] py-5 px-5 text-white text-[18px] sm:text-[16px]">
              In a typical northern home the girl child is allowed to get to 14
              before she is shipped into marriage, in cases where she gets lucky
              and starts school, She&apos;s pulled out and sent to her husband.
              Parents and the community assume she can&apos;t be controlled if
              she gets exposed to any form of civility. Cases like this put the
              girl child in a choke hold of stagnation, giving little to no way
              of navigating life and leading her to believe the hands she has
              been dealt with is fair.
            </p>
          </div>
          <div className="grid justify-center px-[200px] sm:px-0">
            <p className="bg-[#9747FF] rounded-[10px] py-5 px-5 text-white text-[18px] sm:text-[16px]">
              These problems stem from cultural and religious beliefs that are
              still deep rooted and upheld in the society, even though one might
              argue that with civilization fast evolving things might get
              different, but it&apos;s not, she keeps getting blindsided,
              disregarded and under-represented. We must do away with this
              problem and tackle them in a way that will bring deserved change
              and development.
            </p>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="sm:px-[20px] px-[100px]">
        {/* Header 2 */}
        <div className="flex justify-center items-center flex-col p-[60px] sm:p-[20px] gap-[10px]">
          <h3 className="text-[#336699] font-semibold text-xl capitalize font-montserrat">
            OUR OBJECTIVES{" "}
          </h3>
          <h1 className="text-[56px] sm:text-3xl sm:text-center font-extrabold text-[0F172A]">
            How we are tackling the problem
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 text-[16px] justify-between mb-20 sm:mb-[30px] gap-8">
          <div className="flex flex-col p-10 sm:p-4 gap-5">
            <img src={Education} alt="" className="sm:w-full" />
            <p className="sm:text-center">
              Educational Workshops: Conducting workshops to promote access to
              quality education, career guidance, and awareness about the
              importance of education for girls.
            </p>
          </div>

          <div className="flex flex-col p-10 sm:p-4 gap-5">
            <img src={Health} alt="" className="sm:w-full" />
            <p className="sm:text-center">
              Health and Hygiene Programs: Implementing health and hygiene
              sessions to educate girls about personal well-being, reproductive
              health, and nutrition.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 text-[16px] justify-between mb-20 sm:mb-[30px] gap-8">
          <div className="flex flex-col p-10 sm:p-4 gap-5">
            <img src={Skill} alt="" className="sm:w-full" />
            <p className="sm:text-center">
              Skill Development Training: Providing vocational training sessions
              to equip girls with practical skills that will enhance their
              employability and economic independence.
            </p>
          </div>

          <div className="flex flex-col p-10 sm:p-4 gap-5">
            <img src={Confidence} alt="" className="sm:w-full" />
            <p className="sm:text-center">
              Confidence-Building Activities: Organizing mentoring sessions,
              leadership workshops, and extracurricular activities to boost
              self-esteem and confidence among the girls.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="px-[100px] sm:px-[20px]">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[56px] sm:text-3xl font-extrabold text-[0F172A] sm:text-center">
            Projects
          </h1>
          <p className="text-[#336699] text-xl font-medium sm:text-center">
            Impacting the girl child one project at a time
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-1 gap-10 py-10">
          <div className="shadow-2xl px-5 py-10 rounded-xl flex flex-col gap-5 justify-between">
            <div className="text-2xl font-bold sm:text-center">
              Sister to sister
            </div>
            <img src={Sister} alt="" className="sm:w-full" />
            <div className="sm:text-center">
              A mentor-mentee program curated to help build confidence, improve
              the state of well being of girl child amd general life.
            </div>
            <Button
              content={"Learn More"}
              btnStyle={
                "bg-[#336699] w-full text-white before:bg-[#0f172a] hover:border-white"
              }
              onclick={() => navigate("/projects#Sister-to-Sister")}
            />
          </div>
          <div className="shadow-2xl px-5 py-10 rounded-xl flex flex-col gap-5 justify-between">
            <div className="text-2xl font-bold sm:text-center">Pad a Girl</div>
            <img src={Pad} alt="" className="sm:w-full" />
            <div className="sm:text-center">
              Providing pads to young girls without access and creating
              awareness about reproductive hygiene.
            </div>
            <Button
              content={"Learn More"}
              btnStyle={
                "bg-[#336699] w-full text-white before:bg-[#0f172a] hover:border-white"
              }
              onclick={() => navigate("/projects#Pad-a-Girl")}
            />
          </div>
          <div className="shadow-2xl px-5 py-10 rounded-xl flex flex-col gap-5 justify-between">
            <div className="text-2xl font-bold sm:text-center">
              Policy Making Awareness
            </div>
            <img src={Policy} alt="" className="sm:w-full" />
            <div className="sm:text-center">
              Creating awareness the girl child, making decisions and being part
              of decision making in their community or environment
            </div>
            <Button
              content={"Learn More"}
              btnStyle={
                "bg-[#336699] w-full text-white before:bg-[#0f172a] hover:border-white"
              }
              onclick={() => navigate("/projects#Policy-Making-Awareness")}
            />
          </div>
        </div>
      </div>

      <div className="flex sm:flex-col px-[100px] sm:px-[20px] gap-10 justify-center items-center my-20">
        <Button
          content={"Donate"}
          onclick={() => setOpen(true)}
          btnStyle={
            "bg-[#336699] sm:w-full text-white before:bg-[#0f172a] hover:border-white"
          }
        />
        <Button btnStyle={"sm:w-full"} content={"Get Involved"} />
      </div>
    </div>
  );
};

export default GirlChild;
