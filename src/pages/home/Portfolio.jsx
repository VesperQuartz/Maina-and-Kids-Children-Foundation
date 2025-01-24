import SwiperComponent from "../../components/SwiperComponent";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="flex justify-center items-center flex-col py-[50px] sm:px-[20px] md:px-[30px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px]"
    >
      {/* subtitle */}
      <p className="font-bold sm:text-base text-xl uppercase tracking-widest text-[#336699]">
        portfolio
      </p>
      {/* bigger text */}
      <h3 className="sm:text-[32px] text-center md:text-[55px] text-[56px] font-extrabold text-[#0F172A]">
        View our work through the lense <br /> of a camera
      </h3>
      <div className="w-full flex justify-center items-center p-2">
        <SwiperComponent />
      </div>
    </div>
  );
};

export default Portfolio;
