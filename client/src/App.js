import "./App.css";
import {
  BrowserRouter,
  Link,
  Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import ReactDOM from "react-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [flag, setFlag] = useState(true);

  const toggle = () => {
    if (flag) {
      return setFlag(false);
    }
    if (flag == false) {
      return setFlag(true);
    }
  };

  return (
    <BrowserRouter>
    <ScrollToTop/> 
      <div className="App">
        {/* <Home /> */}
        <div className="container">
          <div className="hambMenu">
            <GiHamburgerMenu id="hambMenuId" onClick={toggle} />{" "}
          </div>
          <Link
            className="container-item"
            style={{ display: flag ? "block" : "none" }}
            to="/"
          >
            HOME
          </Link>
          <Link
            className="container-item"
            style={{ display: flag ? "block" : "none" }}
            to="/About"
          >
            ABOUT
          </Link>
          <Link
            className="container-item"
            style={{ display: flag ? "block" : "none" }}
            to="/Portfolio"
          >
            PORTFOLIO
          </Link>
          <Link
            className="container-item"
            style={{ display: flag ? "block" : "none" }}
            to="/Blog"
          >
            BLOG
          </Link>
          <Link
            className="container-item"
            style={{ display: flag ? "block" : "none" }}
            to="/Contact"
          >
            CONTACT
          </Link>
        </div>
        <Switch>
          {/* <ScrollToTopComp/> */}
          {/* <Route exact path="/" render={() => <Home />} /> */}
          <Route exact path="/" render={() => <Home />} />

          <Route path="/About" render={() => <About />} />
          <Route path="/Portfolio" render={() => <Portfolio />} />
          <Route path="/Blog" render={() => <Blog />} />
          <Route path="/Contact" render={() => <Contact />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
