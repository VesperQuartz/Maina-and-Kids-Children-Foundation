import { FaArrowRight } from "react-icons/fa";

// import data
import { projects } from "../../data/projects";
import { useNavigate } from "react-router-dom";

const RecentCauses = () => {
  const navigate = useNavigate();
  console.log(projects);
  return (
    <div
      id="recentCauses"
      className="flex justify-center items-center flex-col sm:px-[20px] sm:py-[20px] md:p-[30px] lg:p-[40px] xl:p-[60px] 2xl:p-[60px]"
    >
      {/* subtitle */}
      <p className="font-bold sm:text-base text-xl uppercase tracking-widest text-[#336699]">
        a glimpse into
      </p>
      {/* bigger text */}
      <h3 className="sm:text-[30px] sm:text-center sm:whitespace-nowrap md:text-[55px] md:text-center text-[56px] font-extrabold text-[#0F172A] capitalize">
        our most recent causes
      </h3>
      {/* grid box */}
      <div className="grid sm:grid-cols-1 grid-cols-2 grid-rows-2 sm:mt-[20px] mt-[30px] sm:gap-y-[30px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px] 2xl:gap-[60px]">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center"
            >
              <img
                src={`${project.img}`}
                alt={`Image ${project.id}`}
                className="sm:w-full md:w-full"
              />
              <h3 className="font-extrabold text-[32px] text-[#0F172A] my-[10px] md:whitespace-nowrap md:text-[23px] sm:text-center md:text-center">
                {project.title}
              </h3>
              <span className="text-[14px] mb-[25px] sm:text-center md:text-center">
                {project.description.substring(0, 70) + " ..."}
              </span>
              <div className="sm:flex sm:justify-center md:flex md:justify-center">
                <button
                  onClick={() => navigate(`${project.link}`)}
                  className="w-[256px] h-[56px] rounded-[8px] border border-[#336699] capitalize p-[16px] ${btnStyle} flex items-center justify-center gap-4 z-[1] relative outline-none overflow-hidden transition-all duration-300 ease-in-out hover-on-button bg-[#336699] text-white before:bg-[#0f172a] hover:border-white mt-4"
                >
                  Learn More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentCauses;
