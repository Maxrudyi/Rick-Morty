import React, { useState } from "react";
import Logo from "../../img/FacebookLogo.svg";
import "../../App.css";
import { LoginSocialFacebook } from "reactjs-social-login";

function FacebookLoginComponent() {
  const [profile, setProfile] = useState(null);

  return (
    <div className="facebookLogin">
      {!profile ? (
        <LoginSocialFacebook
          appId="904110320835302"
          onResolve={(response) => {
            setProfile(response.data);
          }}
        >
          <button className="button__facebook">
            <img src={Logo} alt="" />
            Continue with Facebook
          </button>
        </LoginSocialFacebook>
      ) : (
        ""
      )}

      {profile ? (
        <div className="card">
          <div className="card-body">
            <img
              className="rounded"
              style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              src={profile.picture.data.url}
              alt="Profile"
            />
            <p className="card-title">{profile.name}</p>
            <a
              className="card-logout"
              href="/#"
              onClick={() => setProfile(false)}
            >
              Log Out
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FacebookLoginComponent;
