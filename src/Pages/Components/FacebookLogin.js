import React, { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Logo from "../../img/FacebookLogo.svg";
import "../../App.css";

function FacebookLoginComponent() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    // Login failed
    if (response.status === "unknown") {
      alert("Login failed!");
      setLogin(false);
      return false;
    }
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  const logout = () => {
    setLogin(false);
    setData({});
    setPicture("");
  };

  return (
    <div className="facebookLogin">
      {!login && (
        <FacebookLogin
          appId="904110320835302"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,email,user_friends"
          callback={responseFacebook}
          render={(renderProps) => (
            <button className="button__facebook" onClick={renderProps.onClick}>
              <img src={Logo} alt="" />
              Continue with Facebook
            </button>
          )}
          icon="fa-facebook"
        />
      )}

      {login && (
        <div className="card">
          <div className="card-body">
            <img
              className="rounded"
              style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              src={picture}
              alt="Profile"
            />
            <p className="card-title">{data.name}</p>
            <a className="card-logout" href="/#" onClick={logout}>
              Log Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default FacebookLoginComponent;
