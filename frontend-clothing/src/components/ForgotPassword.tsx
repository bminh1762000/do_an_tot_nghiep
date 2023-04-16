import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="">
      <h3 className="text-center mb-3">Reset Your Password</h3>
      <p className="text-center mt-2 mb-3">
        We will send you an email to reset your password
      </p>
      <form action="" className="d-flex flex-column gap-15">
        <input type="email" name="email" placeholder="Email" />

        <div>
          <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
            <button className="button border-0" type="submit">
              Submit
            </button>
            <Link to="/login">Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
