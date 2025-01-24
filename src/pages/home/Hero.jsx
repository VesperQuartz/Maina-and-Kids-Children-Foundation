import React from "react";
import Button from "../../components/Button";
import { HeroSwipper } from "../../components/HeroSwipper";
// import images

const Hero = () => {
  // const [ isScrolled, setIsScrolled ] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
  //   });
  // });

  return (
    <React.Fragment>
      <div className="mt-10 relative flex w-full justify-center items-center flex-col">
        <HeroSwipper />
        <div className="absolute z-10">
          <div className="flex justify-center items-center flex-col py-[100px]">
            {/* title */}
            <h1 className="text-white uppercase sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center font-moul flex flex-col font-normal mx-2">
              help a child and be our <span className="sm:mt-0 mt-3">hero</span>
            </h1>
            {/* subtitle */}
            <p className="sm:text-[13px] text-[22px] font-semibold text-center text-white my-[20px] tracking-wide">
              No Act of Kindess, no matter how small is ever wasted.
            </p>
            {/* button */}
            <div className="flex sm:flex-col sm:items-center sm:gap-[15px] md:mt-5 gap-[30px] sm:w-[90%] w-[542px]">
              <Button
                content={"donate"}
                btnStyle={
                  "bg-[#326699] text-white before:bg-[#0f172a] border-white"
                }
              />
              <Button
                content={"get involved"}
                btnStyle={"before:bg-[#0f172a] text-white border-white"}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
