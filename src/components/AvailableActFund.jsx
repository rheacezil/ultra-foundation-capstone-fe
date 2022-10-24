import React from "react";
// import Tab from "@mui/material/Tab";
import AllVolunteerProg from "./AllVolunteerProg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Fundaraisers from "./Fundraisers";

export default function AvailableActFund() {
  return (
    // <section className=" d-flex justify-content-center">
    //   <div className="p-3">
    //     <Tabs
    //       defaultActiveKey="home"
    //       id="justify-tab-example"
    //       className="mb-3 center"
    //     >
    //       <Tab eventKey="home" title="Volunteer Your Time">
    //         <AllVolunteerProg />
    //       </Tab>
    //       <Tab eventKey="profile" title="Fundraisers">
    //         <Fundaraisers />
    //       </Tab>
    //     </Tabs>
    //   </div>
    // </section>
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-12">
          <Tabs
            defaultActiveKey="programs"
            id="justify-tab-example"
            className="mb-3 d-flex justify-content-center align-items-center f-size"
          >
            <Tab eventKey="programs" title="Programs">
              <AllVolunteerProg />
            </Tab>
            <Tab eventKey="Fundraisers" title="Fundraisers">
              <Fundaraisers />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
