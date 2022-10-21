import React from "react";

export default function AvailableActFund() {
  return (
    <section id="popular" className="py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 col-lg-4 g-3 row">
            <h3 className="fs-5">Volunteer Programs</h3>
            {/* {renderPrograms()} */}
          </div>
          <div className="col-md-6 col-lg-4 g-3 row">
            <h3 className="fs-5">Fundraisers</h3>
            {/* {renderFundraiser()} */}
          </div>
          <div className="col-md-6 col-lg-4 g-3 row">
            <h3 className="fs-5">Donations</h3>
            {/* {renderDonation()} */}
          </div>
        </div>
      </div>
    </section>
  );
}
