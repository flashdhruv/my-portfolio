import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import MainPage from './components/mainPage';
import Resume from './components/Resume';
import AnimatedRoutes from './components/animatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes/>
    </BrowserRouter>
  );
}

export default App;
