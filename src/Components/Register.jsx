import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const {
    user,
    setUser,
    createUser,
    updateUserProfile,
    SignInExistingUser,
    loading,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showpass, setShowpass] = useState(false);

  const handleShowpas = () => {
    SetshowPass(!showPass);
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user_name = form.user_name.value;
    const photo = form.photourl.value;
    const passLength = password.length;
    // console.log(email, passLength, user_name, photo);
  };

  return (
    <div>
      <div className="card bg-base-100  max-w-sm mx-auto mt-8 shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleOnsubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
              name="user_name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              required
              name="email"
            />
            <label className="label">Photo Url</label>
            <input
              type="text"
              className="input"
              placeholder="Email"
              name="photourl"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />

            <button className="btn btn-neutral mt-4 bg-[#414e61]">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
