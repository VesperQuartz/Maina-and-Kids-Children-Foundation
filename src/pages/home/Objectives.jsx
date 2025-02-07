// import icon images
import icon1 from "/assets/Icon.png";
import icon2 from "/assets/Icon (1).png";
import icon3 from "/assets/Icon (2).png";
import icon4 from "/assets/Icon (3).png";

const Objectives = () => {
  const data = [
    {
      id: 1,
      icon: icon1,
      title: "educational support",
      desc: "Providing educational support, including scholarships, school supplies, tutoring, or after-school programs, to ensure children have access to quality education.",
    },
    {
      id: 2,
      icon: icon2,
      title: "health care initiatives",
      desc: "Organizing medical outreaches, health check-ups, and awareness campaigns to promote children's health and well-being.",
    },
    {
      id: 3,
      icon: icon3,
      title: "skills development",
      desc: "Conducting workshops, vocational training, or mentoring programs to equip children with valuable skills for their personal and professional growth.",
    },
    {
      id: 4,
      icon: icon4,
      title: "Advocacy and Awareness",
      desc: "Raising awareness about children's rights, promoting child protection policies, and advocating for policy changes.",
    },
  ];

  return (
    <div
      id="objectives"
      className="w-full flex justify-center items-center flex-col px-4 py-12 lg:px-8 xl:px-12 2xl:px-16"
    >
      {/* subtitle */}
      <p className="text-[#336699] font-semibold text-xl capitalize font-montserrat mb-2">
        objectives
      </p>
      {/* bigger text */}
      <h3 className="text-3xl lg:text-5xl text-center font-extrabold text-[#0F172A]  mb-4">
        Giving Little Children Chances Through{" "}
        <span className="font-bold">;</span>
      </h3>
      {/* sub text only on mobile */}
      <p className="sm:block md:block lg:hidden xl:hidden 2xl:hidden text-center text-[#0F172A] mb-8">
        Our organization caters to children and girls, we have programs that are
        intended for them.
      </p>
      {/* grid box */}
      <div className="w-full max-w-7xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-16">
        {data.map((card) => {
          return (
            <div
              className="flex sm:flex-col md:flex-col lg:flex-row items-start sm:items-center md:items-center lg:items-start gap-6"
              key={card.id}
            >
              <img
                src={card.icon}
                alt={`Icon ${card.id}`}
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0"
              />
              <div className="flex flex-col lg:flex-1">
                <h4 className="text-xl lg:text-2xl font-semibold capitalize mb-3 sm:text-center md:text-center lg:text-left">
                  {card.title}
                </h4>
                <p className="text-base text-[#333333] sm:text-center md:text-center lg:text-left">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Objectives;
