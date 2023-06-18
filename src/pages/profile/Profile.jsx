import React, { useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../firebase";
import { Outlet } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const { username } = useParams();

  useEffect(() => {
    getUser(username)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setUser(false);
      });
  }, []);

  if (user === false) {
    return <div>Profile not found!</div>;
  }

  if (user === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" max-w-[930px] w-full h-full mx-auto flex-col">
      <ProfileHeader user={user} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Profile;
