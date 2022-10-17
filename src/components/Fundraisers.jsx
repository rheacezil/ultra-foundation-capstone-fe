import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fundraisers } from "../enums";
// import { renderLoading } from "../loaders";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faBullseye,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";

export default function Fundaraisers() {
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }, []);
  const renderFundRaisers = () => {
    return fundraisers.map((item) => (
      <div
        className="col-md-6 col-lg-4 card position-relative border-0 my-3"
        key={item.id}
      >
        <img src={item.image} className="pt-3" alt={item.title} />
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
            style={{ width: `${item.progress}` }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {item.progress}
          </div>
        </div>
        <div className="card-body px-0">
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text mt-3 text-muted">{item.body}</p>
          <div className="d-flex pb-3">
            <div className="w-50">
              <FontAwesomeIcon icon={faBullseye} className="text-warning" />{" "}
              Goal:
              {"  " + item.goal}
            </div>
            <div className="w-50">
              <FontAwesomeIcon
                icon={faArrowUpRightDots}
                className="text-warning"
              />{" "}
              Raised:
              {"  " + item.raised}
            </div>
          </div>
          <Link to="/" className="btn btn-outline-dark">
            Read more
          </Link>
        </div>
      </div >
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