import React from "react";
import Tab from "@mui/material/Tab";
import AllVolunteerProg from "./AllVolunteerProg";
import Fundaraisers from "./Fundraisers";
import { Tabs } from "react-bootstrap";

export default function AvailableActFund() {
  return (
    <section className=" d-flex justify-content-center">
      <div className="p-3">
        <Tabs
          defaultActiveKey="home"
          id="justify-tab-example"
          className="mb-3 center"
        >
          <Tab eventKey="home" title="Volunteer Your Time">
            <AllVolunteerProg />
          </Tab>
          <Tab eventKey="profile" title="Fundraisers">
            <Fundaraisers />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}
