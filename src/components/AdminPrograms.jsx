import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionProgram from "../redux/actions/actionProgram";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export default function AdminPrograms() {
  const [programName, setProgramName] = useState("");
  const [description, setDescription] = useState("");
  const programList = useSelector((state) => state.programList);
  const { getAllPrograms, addProgram, deleteProgram } = bindActionCreators(
    actionProgram,
    useDispatch()
  );

  // Validation
  const [invalidProgramName, setInvalidProgramName] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);

  useEffect(() => {
    getAllPrograms();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkIfValid()) {
      const body = {
        programName: programName,
        description: description,
      };

      addProgram(body);
    }
  };

  const checkIfValid = () => {
    let isValid = true;

    // Check if ProgramName is valid
    if (programName.match("^$|^.*@.*..*$")) {
      setInvalidProgramName(true);
      isValid = false;
    } else {
      setInvalidProgramName(false);
    }

    // Check if description is valid
    if (description.match("^$|^.*@.*..*$")) {
      setInvalidDescription(true);
      isValid = false;
    } else {
      setInvalidDescription(false);
    }

    return isValid;
  };

  function MyDropzone(program) {
    // Callback function
    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      const formData = new FormData();
      formData.append("file", file);

      // Upload to s3
      axios
        .put(
          `https://ultra-foundation-capstone.herokuapp.com/program/${program.programId}/upload`,
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
            program.imageLink
              ? `https://ultra-foundation-capstone.herokuapp.com/program/${program.programId}/download`
              : "/images/empty-image.jpeg"
          }
          alt={program.programName}
          {...getRootProps()}
        />
        <div className="card-body">
          <h5 className="card-title mb-0">{program?.programName}</h5>
          <p className="card-title mb-0">{program?.description}</p>

          <button onClick={() => deleteProgram(program.programId)}>
            DELETE
          </button>
        </div>
      </div>
    );
  }

  const renderPrograms = () => {
    return (
      <>
        {programList.map((program) => (
          <React.Fragment key={program.programId}>
            <div
              className="col-md-3 mb-4"
              style={{ height: "300px", width: "250px" }}
            >
              <MyDropzone {...program} />
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
        {/* Program NAME */}
        <Form.Group controlId="formProgramName" className="w-50">
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Program Name"
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            isInvalid={invalidProgramName}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please input a valid Program name
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
            Please input a Program description
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
      <div className="row justify-content-center">{renderPrograms()}</div>
    </>
  );
}
