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
      <div className="card h-100 text-center w-100 p-1 shadow mb-5 bg-body rounded">
        <img
          src={
            program.imageLink
              ? `https://ultra-foundation-capstone.herokuapp.com/program/${program.programId}/download`
              : "/images/empty.jpg"
          }
          alt={program.programName}
          {...getRootProps()}
          className="img-fluid h-100 w-100 border border-warning"
        />
        <div className="card-body">
          <h5 className="card-title mb-1">{program?.programName}</h5>
          <p className="card-title mb-1 text-muted">{program?.description}</p>

          <button
            className="btn btn-md bg-warning text-center text-white "
            onClick={() => deleteProgram(program.programId)}
          >
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
    <section className="bg-light pt-5">
      <div className="d-flex justify-content-center align-items-center bg-donate">
        <div className="row w-50 h-50 pt-5 shadow p-3 mb-5 bg-body rounded">
          <div className="col-md-6">
            <Form onSubmit={handleSubmit}>
              {/* Program NAME */}
              <Form.Group controlId="formProgramName" className="mb-3">
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

              <div className="d-flex flex-wrap justify-content-center">
                <button
                  className="btn btn-lg px-5 bg-warning text-center text-white mb-3 "
                  onClick={handleSubmit}
                >
                  Upload
                </button>
              </div>
            </Form>
          </div>

          <hr />
          <div className="row justify-content-center">{renderPrograms()}</div>
        </div>
      </div>
    </section>
  );
}
