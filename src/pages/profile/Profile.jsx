import React, { useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../firebase";
import { Outlet } from "react-router-dom";
import PageNotFound from "../../components/PageNotFound";
import { Helmet } from "react-helmet";

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
    return <PageNotFound />;
  }

  if (user === null) {
    return <div>Loading...</div>;
  }

  return user && (
    <div className=" relative h-full">
      <Helmet>
        <title>{`.(@${user.username} | Instagram`}</title>
      </Helmet>
      <div className=" max-w-[930px] min-h-[600px] w-full h-full mx-auto flex-col">
        <ProfileHeader user={user} />

        <Outlet />
      </div>
      <div className=" hidden mobileForm:block absolute bottom-0 w-full pt-8 ml">
       <Footer />
      </div>
      
    </div>
  );
}

export default Profile;
