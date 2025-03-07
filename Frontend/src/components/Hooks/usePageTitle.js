import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pageName = location.pathname.split("/").pop(); // Get the last part of the path
    const formattedPageName = pageName
      ? pageName.replace(/-/g, " ") // Replace hyphens with spaces
      : "Home"; // Default to "Home" if no path

    document.title = `Online Education Platform: ${formattedPageName}`;
  }, [location]);
};

export default usePageTitle;
