import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // on route change, scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
