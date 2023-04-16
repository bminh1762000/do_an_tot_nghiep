import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/Header";
import { default as Spinners } from "./components/Spinner";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSessionStart } from "./redux/user/user.actions";

const HomePage = lazy(() => import("./pages/HomePage"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const LoginPage = lazy(() => import("./pages/Login"));
const SignUpPage = lazy(() => import("./pages/SignUp"));
const ContactPage = lazy(() => import("./pages/Contact"));
const AboutPage = lazy(() => import("./pages/About"));
const ProductPage = lazy(() => import("./pages/Product"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPassword"));

import "./App.scss";
import Footer from "./components/Footer";

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Spinners />}>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/contact" component={ContactPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/products" component={ProductPage} />
          <Route
            exact
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
          />
          <Route exact path="/sign-up" component={SignUpPage} />
          <Route exact path="/forgot-password" component={ForgotPasswordPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSessionStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
