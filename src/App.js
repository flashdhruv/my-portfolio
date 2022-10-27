import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  useLocation,
  BrowserRouter
} from "react-router-dom";
import MainPage from './components/mainPage';
import Resume from './components/Resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='my-portfolio/' element={<MainPage/>} />
          <Route exact path="/Resume" element={<Resume />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
