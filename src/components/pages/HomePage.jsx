import React, { useEffect } from "react";
// import { Button } from "react-bootstrap";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollection } from "react-firebase-hooks/firestore";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import { auth, db } from "../../firebase";
// import * as actionUser from "../../redux/actions/actionUser";
import HeroHome from "../HeroHome";
import Activities from "../Activities";
import Footer from "../Footer";
import AvailableActFund from "../AvailableActFund";
import NavigationBar from "../NavigationBar";

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
      <NavigationBar />
      <HeroHome />
      <Activities />
      <AvailableActFund />
      <Footer />
    </>
  );
}
