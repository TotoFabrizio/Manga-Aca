import "./assets/css/app.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import SideBar from './components/sidebar/sidebar';
import NavBar from "./components/navbar/navbar";

import Login from "./components/login/login.js";
import ContentWrapper from "./components/contentWrapper/contentWrapper.js"

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <Switch>
        <Route path="/login" exact={true} component={Login}/>
        <Route path="/" exact={true}>
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <NavBar />
                <ContentWrapper />
            </div>
          </div>
        </Route>
      </Switch>
    </div> 
  );
}

export default App;
