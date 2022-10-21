import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionFundraisers from "../redux/actions/actionFundraiser";
// import { renderLoading } from "../loaders";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faBullseye,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";

export default function Fundaraisers() {
  const [fundraiser, setFundraisers] = useState([]);
  const { getAllFundraisers } = bindActionCreators(
    actionFundraisers,
    useDispatch()
  );

  useEffect(() => {
    getAllFundraisers().then((response) => {
      setFundraisers(response ? response.payload : []);
    });
  }, []);
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }, []);
  const renderFundRaisers = () => {
    return fundraiser.map((fundraiser) => (
      <div
        className="col-md-6 col-lg-4 card position-relative border-0 my-3"
        key={fundraiser.fundraiserId}
      >
        <img
          src={
            fundraiser.imageLink
              ? `https://ultra-foundation-capstone.herokuapp.com/fundraiser/${fundraiser.fundraiserId}/download`
              : "/images/empty.jpg"
          }
          className="pt-3"
          alt={fundraiser.fundraiserName}
        />
        <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
          <Link to="/donate" className="btn btn-warning">
            <FontAwesomeIcon icon={faPlus} className="mx-1" />
            Donate Now
          </Link>
        </span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning text-dark justify-content-center"
            role="progressbar"
            aria-label="Warning striped example"
            // style={{ width: `${item.progress}` }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {fundraiser.progress}
          </div>
        </div>
        <div className="card-body px-0">
          <h4 className="card-title">{fundraiser.fundraiserName}</h4>
          <p className="card-text mt-3 text-muted">{fundraiser.description}</p>
          <div className="d-flex pb-3">
            <div className="w-50">
              <FontAwesomeIcon icon={faBullseye} className="text-warning" />{" "}
              Goal:
              {"  " + fundraiser.targetAmount}
            </div>
            <div className="w-50">
              <FontAwesomeIcon
                icon={faArrowUpRightDots}
                className="text-warning"
              />{" "}
              Raised:
              {"  " + fundraiser.amountGenerated}
            </div>
          </div>
          <Link to="/" className="btn btn-outline-dark">
            Read more
          </Link>
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
          <div className="row pt-4">
            {/* {loading ? renderLoading() : renderFundRaisers()} */}
            {renderFundRaisers()}
          </div>
        </Container>
      </section>
    </>
  );
}
