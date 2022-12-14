import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionFundraiser from "../redux/actions/actionFundraiser";
import { renderLoading } from "../loaders";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";
import DonateButtonModal from "./DonateButtonModal";

export default function Fundaraisers() {
  const [fundraisers, setFundraisers] = useState([]);
  const { getAllFundraisers } = bindActionCreators(
    actionFundraiser,
    useDispatch()
  );

  useEffect(() => {
    getAllFundraisers().then((response) => {
      setFundraisers(response ? response.payload : []);
    });
  }, []);

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 9000);
  // }, []);

  const renderFundraisers = () => {
    return fundraisers.map((fundraisers) => (
      <div
        className="col-sm-12 col-lg-4 card position-relative mx-1 my-3 px-1"
        key={fundraisers.fundraiserId}
      >
        <img
          src={
            fundraisers.imageLink
              ? `https://capstone-ultra-foundation.herokuapp.com/fundraiser/${fundraisers.fundraiserId}/download`
              : "/images/empty.jpg"
          }
          className="fundraiser-img img-fluid pt-3"
          alt={fundraisers.fundraiserName}
        />

        <span className="position-absolute d-flex align-items-center justify-content-center text-dark fs-4">
          <DonateButtonModal />
        </span>
        <div className="card-body">
          <h4 className="card-title">{fundraisers.fundraiserName}</h4>
          <p className="card-text pb-5 text-muted">
            {fundraisers.description.substring(0, 100)}
          </p>
          <div className="amount position-absolute d-flex w-100 pb-3">
            <div className="w-50">
              <FontAwesomeIcon icon={faBullseye} className="text-warning" />{" "}
              Goal:
              {"  " + fundraisers.targetAmount}
            </div>
            <div className="w-50">
              <FontAwesomeIcon
                icon={faArrowUpRightDots}
                className="text-warning"
              />{" "}
              Raised:
              {"  " + fundraisers.amountGenerated}
            </div>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <>
      <section id="fundraisers" className="py-5">
        <Container>
          <div className="title  text-center pt-5">
            <h2 className="position-relative">Current Fundraisers</h2>
            <span className="d-inline-block title-border"></span>
          </div>
          <div className="row pt-4 ">
            {/* {loading ? renderLoading() : renderFundraisers()} */}
            {renderFundraisers()}
          </div>
        </Container>
      </section>
    </>
  );
}
