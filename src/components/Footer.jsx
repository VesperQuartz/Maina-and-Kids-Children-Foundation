import { useContext } from "react";
// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import footer image
// import anniversary context
import { AnniversaryContext } from "../context/AnniversaryContext";

const Footer = () => {
  const { isTextShown } = useContext(AnniversaryContext);

  return (
    // setting margin bottom based on the informative text at bottom
    <footer
      className={`${isTextShown ? "mb-10" : "mb-0"} bg-[#fafafa] text-[#453838] s:px-[20px] sm:px-[25px] md:px-[40px] lg:px-[60px] xl:px-[70px] capitalize`}
    >
      {/* columns */}
      <div className="md:h-[320px] lg:h-[322px] xl:h-[322px] grid s:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 py-[48px] gap-[48px]">
        <div className="flex flex-col gap-[25px]">
          <h3 className="font-semibold">navigation</h3>
          <a href="#projects" className="hover:text-[#0f172a]">
            causes
          </a>
          <a href="" className="hover:text-[#0f172a]">
            Who we are
          </a>
          <a
            href="/Maina-and-Kids-Children-Foundation/girl-child#girl-child"
            className="hover:text-[#0f172a]"
          >
            girl child
          </a>
          <a
            href="mailto:mainaandkids@gmail.com"
            className="hover:text-[#0f172a]"
          >
            contact us
          </a>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h3 className="font-semibold">get involved</h3>
          <a
            href="https://forms.gle/9EgTPzU1tJ9EsDRD6"
            className="hover:text-[#0f172a]"
          >
            mentorship
          </a>
          <a
            href="mailto:mainaandkids@gmail.com"
            className="hover:text-[#0f172a]"
          >
            sponsorship
          </a>
          <a
            href="mailto:mainaandkids@gmail.com"
            className="hover:text-[#0f172a]"
          >
            partnership
          </a>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h3 className="font-semibold">donation</h3>
          <a
            href="mailto:mainaandkids@gmail.com"
            className="hover:text-[#0f172a]"
          >
            monthly
          </a>
          <a
            href="mailto:mainaandkids@gmail.com"
            className="hover:text-[#0f172a]"
          >
            yearly
          </a>
        </div>
      </div>
      {/* copyright and social links */}
      <div className="h-[80px] flex sm:flex-col justify-between md:items-center lg:items-center xl:items-center s:gap-2 sm:gap-2 border-t border-[#0f1729]">
        {/* footer image */}
        <div className="flex sm:flex-col md:items-center md:ml-10 lg:items-center xl:items-center s:gap-3 sm:gap-5 md:gap-16 lg:gap-20 xl:gap-20">
          {/* copyright */}
          <p className="md:text-sm md:whitespace-nowrap">
            Maina and kids children foundation &copy; {new Date().getFullYear()}
            . all rights reserved.
          </p>
          {/* social links */}
          <div className="flex text-xl gap-4 s:mb-4 sm:mb-4">
            <a
              href="https://youtube.com/@maina_and_kids"
              className="hover:text-[#0f172a]"
              title="Youtube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/MainaandkidsChildrenFoundation"
              className="hover:text-[#0f172a]"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/Maina_and_kids"
              className="hover:text-[#0f172a]"
              title="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/maina_and_kids"
              className="hover:text-[#0f172a]"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/mainaandkids"
              className="hover:text-[#0f172a]"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
