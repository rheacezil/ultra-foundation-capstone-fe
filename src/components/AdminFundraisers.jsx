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

  useEffect(() => {
    getAllFundraisers();
  }, []);

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
          `https://ultra-foundation-capstone.herokuapp.com/fundraiser/${fundraiser.fundraiserId}/upload`,
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
      <div className="card h-100 text-center p-4">
        <img
          src={
            fundraiser.imageLink
              ? `https://ultra-foundation-capstone.herokuapp.com/fundraiser/${fundraiser.fundraiserId}/download`
              : "/images/empty-image.jpeg"
          }
          alt={fundraiser.fundraiserName}
          {...getRootProps()}
        />
        <div className="card-body">
          <h5 className="card-title mb-0">{fundraiser?.fundraiserName}</h5>
          <p className="card-title mb-0">{fundraiser?.description}</p>

          <button onClick={() => deleteFundraiser(fundraiser.fundraiserId)}>
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
              className="col-md-3 mb-4"
              style={{ height: "300px", width: "250px" }}
            >
              <MyDropzone {...fundraiser} />
            </div>
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <>
      <hr />
      <Form onSubmit={handleSubmit} className="row">
        {/* fundraiser NAME */}
        <Form.Group controlId="formfundraiserName" className="w-50">
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

        {/* DESCRIPTION */}
        <Form.Group className="mb-3" controlId="formDescription">
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

        {/* fundraiser target amount */}
        <Form.Group controlId="formTargetAmount" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter fundraise amount"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            isInvalid={invalidTargetAmount}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            amount must be a number
          </Form.Control.Feedback>
        </Form.Group>

        {/* fundraiser amount generated */}
        <Form.Group controlId="formAmountGener" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter fundraise amount"
            value={amountGenerated}
            onChange={(e) => setAmountGenerated(e.target.value)}
            isInvalid={invalidAmountGenerated}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            amount must be a number
          </Form.Control.Feedback>
        </Form.Group>

        <div className="col-12 d-flex flex-wrap justify-content-center">
          <button
            className="bg-primary text-center text-white w-50"
            onClick={handleSubmit}
          >
            Upload
          </button>
        </div>
      </Form>
      <hr />
      <div className="row justify-content-center">{renderFundraisers()}</div>
    </>
  );
}
