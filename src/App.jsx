import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Header from "./components/header/Header";
import RouteList from "./router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Header />
        <RouteList />
      </div>
    </BrowserRouter>
  );
};

export default App;
