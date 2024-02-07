import "./assets/css/app.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import SideBar from './components/sidebar/sidebar';
import NavBar from "./components/navbar/navbar";

import ContentWrapper from "./components/contentWrapper/contentWrapper.js"

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <NavBar />
          <ContentWrapper />
        </div>
      </div>
    </div> 
  );
}

export default App;
