import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((sectionId: string, path: string = location.pathname) => {
    if (location.pathname === path) {
      // If already on the target page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on a different page, navigate first, then scroll
      navigate(path);
      // Use a timeout to ensure navigation completes and component renders before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow page to render
    }
  }, [navigate, location.pathname]);

  return scrollToSection;
};