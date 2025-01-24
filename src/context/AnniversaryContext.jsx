/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AnniversaryContext = createContext();

export const AnniversaryProvider = ({ children }) => {
  // state of bottom informative string
  const [isTextShown] = useState(false);
  const [isPopUpShown, setIsPopUpShown] = useState(false);

  // useEffect(() => {
  //     setTimeout(() => {
  //         setIsPopUpShown(true);
  //     }, 2000);
  // }, []);

  const handlePopUpClose = () => {
    setIsPopUpShown(false);
  };
  return (
    <AnniversaryContext.Provider
      value={{ isPopUpShown, isTextShown, handlePopUpClose }}
    >
      {children}
    </AnniversaryContext.Provider>
  );
};
