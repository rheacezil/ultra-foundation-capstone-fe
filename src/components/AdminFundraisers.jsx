import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionFundraisers from "../redux/actions/actionFundraiser";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export default function AdminFundraisers() {
  const [fundraiserName, setFundraiserName] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [amountGenerated, setAmountGenerated] = useState("");

  const fundraiserList = useSelector((state) => state.fundraiserList);
  const { getAllFundraisers, addFundraiser, deleteFundraiser } =
    bindActionCreators(actionFundraisers, useDispatch());

  // Validation
  const [invalidFundraiserName, setInvalidFundraiserName] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);
  const [invalidTargetAmount, setInvalidTargetAmount] = useState(false);
  const [invalidAmountGenerated, setInvalidAmountGenerated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkIfValid()) {
      const body = {
        fundraiserName: fundraiserName,
        description: description,
        targetAmount: targetAmount,
        amountGenerated: amountGenerated,
      };

      addFundraiser(body);
    }
  };

  const checkIfValid = () => {
    let isValid = true;

    // Check if valid
    if (fundraiserName.match("^$|^.*@.*..*$")) {
      setInvalidFundraiserName(true);
      isValid = false;
    } else {
      setInvalidFundraiserName(false);
    }

    // Check if description is valid
    if (description.match("^$|^.*@.*..*$")) {
      setInvalidDescription(true);
      isValid = false;
    } else {
      setInvalidDescription(false);
    }

    // Check if valid
    if (targetAmount.match("^$|^.*@.*..*$")) {
      setInvalidTargetAmount(true);
      isValid = false;
    } else {
      setInvalidTargetAmount(false);
    }
    // Check if valid
    if (amountGenerated.match("^$|^.*@.*..*$")) {
      setInvalidAmountGenerated(true);
      isValid = false;
    } else {
      setInvalidAmountGenerated(false);
    }

    return isValid;
  };

  function MyDropzone(fundraiser) {
    // Callback function
    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      const formData = new FormData();
      formData.append("file", file);

      // Upload to s3
      axios
        .put(
          `https://capstone-ultra-foundation.herokuapp.com/fundraiser/${fundraiser.fundraiserId}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          console.log("file uploaded successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    // React Dropzone
    const { getRootProps } = useDropzone({ onDrop });

    // Return statement

    return (
      <div className="card h-100 text-center shadow mb-3 bg-body rounded">
        <img
          src={
            fundraiser.imageLink
              ? `https://capstone-ultra-foundation.herokuapp.com/fundraiser/${fundraiser.fundraiserId}/download`
              : "/images/empty.jpg"
          }
          className="w-100 h-100"
          alt={fundraiser.fundraiserName}
          {...getRootProps()}
        />
        <div className="card-body">
          <h3 className="card-title mb-1">{fundraiser?.fundraiserName}</h3>

          <p className="card-title text-start text-muted mb-1">
            {fundraiser?.description}
          </p>
          <button
            className="btn btn-md px-5 bg-warning text-center text-white "
            onClick={() => deleteFundraiser(fundraiser.fundraiserId)}
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }
  const renderFundraisers = () => {
    return (
      <>
        {fundraiserList.map((fundraiser) => (
          <React.Fragment key={fundraiser.fundraiserId}>
            <div
              className="col-md-3 mb-4 mx-1"
              style={{ height: "500px", width: "490px" }}
            >
              <MyDropzone {...fundraiser} />
            </div>
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <section className="bg-light pt-5">
      <div className="d-flex justify-content-center align-items-center">
        <div className="row w-50 h-50 pt-5 shadow mb-5 bg-body rounded">
          <div className="col-md-6">
            <Form onSubmit={handleSubmit}>
              {/* fundraiser NAME */}
              <Form.Group controlId="formfundraiserName" className=" mb-3">
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Enter fundraise Name"
                  value={fundraiserName}
                  onChange={(e) => setFundraiserName(e.target.value)}
                  isInvalid={invalidFundraiserName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please input a fundraise name
                </Form.Control.Feedback>
              </Form.Group>

              {/* fundraiser target amount */}
              <Form.Group controlId="formTargetAmount" className="mb-3">
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Target Amount"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  isInvalid={invalidTargetAmount}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  amount must be a number
                </Form.Control.Feedback>
              </Form.Group>

              {/* fundraiser amount generated */}
              <Form.Group controlId="formAmountGenerate" className="mb-3">
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Amount Generate"
                  value={amountGenerated}
                  onChange={(e) => setAmountGenerated(e.target.value)}
                  isInvalid={invalidAmountGenerated}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  amount must be a number
                </Form.Control.Feedback>
              </Form.Group>

              {/* DESCRIPTION */}
              <Form.Group className="mb-3 " controlId="formDescription">
                <Form.Control
                  as="textarea"
                  placeholder="Enter Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  isInvalid={invalidDescription}
                />
                <Form.Control.Feedback type="invalid">
                  Please input a fundraiser description
                </Form.Control.Feedback>
              </Form.Group>

              <div className="col-12 d-flex flex-wrap justify-content-center py-2">
                <button
                  className="btn btn-lg px-5 bg-warning text-center text-white "
                  onClick={handleSubmit}
                >
                  Upload
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center w-100 h-100 pt-5">
        {renderFundraisers()}
      </div>
    </section>
  );
}
