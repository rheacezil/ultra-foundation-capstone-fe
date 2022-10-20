import React, { useEffect } from "react";
// import { Button } from "react-bootstrap";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollection } from "react-firebase-hooks/firestore";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import { auth, db } from "../../firebase";
// import * as actionUser from "../../redux/actions/actionUser";
import NavbarHome from "../NavbarHome";
import HeroHome from "../HeroHome";
import Activities from "../Activities";
import Discover from "../Discover";
import Footer from "../Footer";

export default function Homepage() {
  // const [user] = useAuthState(auth);
  // const [userList] = useCollection(db.collection("users"));
  // const activeUser = useSelector((state) => state.activeUser);
  // const { loginUser } = bindActionCreators(actionUser, useDispatch());

  // useEffect(() => {
  //   if (user) {
  //     loginUser({ email: user.email });
  //   } else if (userList?.docs.length !== 0) {
  //     userList?.docs.forEach((doc) => {
  //       if (doc.data().email === activeUser.email) {
  //         loginUser({ id: doc.id, email: doc.data().email });
  //       }
  //     });
  //   }
  // }, [user, userList, activeUser.email]);

  return (
    <>
      <NavbarHome />
      <HeroHome />
      <Activities />
      <Discover />
      <Footer />
    </>
  );
}
