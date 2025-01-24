import { useContext } from "react";
import { AnniversaryContext } from "../../context/AnniversaryContext";

const StringText = () => {
  const { isTextShown } = useContext(AnniversaryContext);
  return (
    isTextShown && (
      <div className="bg-indigo-800 text-sm text-white h-10 flex items-center fixed bottom-0 left-0 z-10 px-5 overflow-hidden scrollbar-none w-full whitespace-nowrap">
        <p className="sliding-text w-full">
          We&apos;re excited to share that Maina and Kids Children Foundation
          has recently celebrated its 10th anniversary as an NGO! 🎉 It’s been a
          wonderful decade of making a positive impact, and we’re truly grateful
          for the support of everyone who’s been part of this journey.
          Here&apos;s to many more years of making a difference in the lives of
          children! Thank you for being with us every step of the way!💙
        </p>
      </div>
    )
  );
};

export default StringText;
