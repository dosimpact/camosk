import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import AdPage from "./views/AdPage/AdPage";

import LandingPage from "./views/LandingPage/LandingPage.js";
import Test from "./views/Test/Test";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";

import PostPage from "./views/PostPage/PostPage";
import BlogPage from "./views/BlogPage/BlogPage";
import CreateBlogPage from "./views/BlogPage/Section.js/CreatePage";

// CAMOSK View
import BusStop from "./views/CamoskView/BusStop"
import Elevator from "./views/CamoskView/Elevator"
import Restaurant from "./views/CamoskView/Restaurant"
import Road from "./views/CamoskView/Road"

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div>
        <Switch>
          {/* Default Page */}
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={Auth(LandingPage, null)}
          />
          {/* Test Page */}
          <Route
            exact
            path={process.env.PUBLIC_URL + "/test"}
            component={Auth(Test, null)}
          />
          {/* 4Route Page 1. 승강기 2. 매장 광고 및 주문 3. 길거리(지하철/도로)  4. BUS STOP */}
          <Route
            exact
            path={process.env.PUBLIC_URL + "/camosk01"}
            component={Auth(BusStop, null)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/camosk02"}
            component={Auth(Elevator, null)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/camosk03"}
            component={Auth(Restaurant, null)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/camosk04"}
            component={Auth(Road, null)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/adpage"}
            component={Auth(AdPage, null)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/login"}
            component={Auth(LoginPage, false)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/register"}
            component={Auth(RegisterPage, false)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/blog"}
            component={Auth(BlogPage, null)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/blog/create"}
            component={Auth(CreateBlogPage, null)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/blog/post/:postId"}
            component={Auth(PostPage, null)}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
