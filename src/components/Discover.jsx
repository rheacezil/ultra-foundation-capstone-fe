import React from "react";
import { Container } from "react-bootstrap";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function Discover() {
  return (
    <section className="py-5 activities">
      <div className="discover mb-5 text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <Container>
          <div className="text-center">
            <h1 className="text-black py-2">What Ultra Foundation Does</h1>
            <div className="seperator mb-5"></div>
          </div>

          <div className="d-sm-flex pt-5 mt-3 align-items-center justify-content-center">
            <div className=" text-warning text-center w-50 d-none d-sm-block">
              <VolunteerActivismOutlinedIcon sx={{ fontSize: 280 }} />
            </div>
            <div className="dis-box">
              <h2 className="text-center fw-bold text-black mt-3 title">
                FUNDRAISERS
              </h2>
              <h4 className="text-center text-black px-5 pt-2 fw-light">
                Children deserve to grow up in an environment that fosters good
                health, quality education, and a supportive community. With the
                Ultra Foundation, we aim to combat these challenges for the kids
                in families affected by poverty. By raising resources through
                various fund-raising activities, Ultra Foundation aims to grow
                their network of sponsors and partners.
              </h4>
            </div>
          </div>

          <div className="d-sm-flex pt-5 align-items-center justify-content-center">
            <div className="dis-box">
              <h2 className="text-center fw-bold text-black text-black mt-3">
                VOLUNTEER PROGRAMS
              </h2>
              <h4 className="text-start text-black px-5 pt-2 fw-light">
                We are passionate individuals who make volunteerism a reality
                for our country. All of us have day jobs and volunteer for the
                organization to demonstrate that we can move this country if we
                come together and work together. Across every aspect of our
                work, we embody five values: Integrity, Professionalism, Change
                Leadership, Inclusivity, and Nationalist Identities.
              </h4>
            </div>
            <div className=" text-warning w-50 d-none d-sm-block text-center">
              <EmojiPeopleIcon sx={{ fontSize: 280 }} />
            </div>
          </div>

          <div className="d-sm-flex pt-5 align-items-center justify-content-center">
            <div className=" text-warning text-center w-50 d-none d-sm-block">
              <PeopleOutlinedIcon sx={{ fontSize: 280 }} />
            </div>
            <div className="dis-box">
              <h2 className="text-center fw-bold text-black text-black mt-3">
                COMMUNITY
              </h2>
              <h4 className="text-start text-black px-5 pt-2 fw-light">
                In order to continue and thrive, we have moved almost all of our
                activities into the digital space. Digital connectivity is now
                the key to bringing people together as technology advances every
                day. We will embark on a trend of data analytics and artificial
                intelligence that can lead to sustainable economic growth.
              </h4>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
