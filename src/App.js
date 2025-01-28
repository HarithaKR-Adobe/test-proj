import './App.css';
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";
import TemperatureController from "./components/TemperatureController";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { menu } from './menu';
import JavascriptExercises from './components/JavascriptExercises';

function App() {
  return (
    <Router>
      <div className="app">
        <ul className='menu'>
          {menu.map((item, index) => {
            return <li key={`menu_${index}`}><Link to={item.link}>{item.label}</Link></li>
          })}
        </ul>
        <div className='app-content'>
          <Routes>
            <Route exact path="/counter" element={
              <>
                <Greetings name="Haritha" />
                <Counter />
              </>
            }>
            </Route>
            <Route exact path="/temperature-controller" element={
              <TemperatureController />
            }>
            </Route>
            <Route exact path="/javascript-exercises" element={
              <JavascriptExercises />
            }></Route>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
