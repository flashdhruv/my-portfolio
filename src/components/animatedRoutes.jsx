import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import MainPage from './mainPage';
import Resume from './Resume';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
          <Route path='my-portfolio/' element={<MainPage/>} />
          <Route exact path="/Resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
    );
}

export default AnimatedRoutes;