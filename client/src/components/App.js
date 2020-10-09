import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import AdPage from "./views/AdPage/AdPage";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";

import PostPage from "./views/PostPage/PostPage";
import BlogPage from "./views/BlogPage/BlogPage";
import CreateBlogPage from "./views/BlogPage/Section.js/CreatePage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={Auth(LandingPage, null)}
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
