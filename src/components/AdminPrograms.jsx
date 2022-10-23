import React, { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionProgram from "../redux/actions/actionProgram";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function AdminPrograms() {
  const [programName, setProgramName] = useState("");
  const [description, setDescription] = useState("");
  const [programTime, setProgramTime] = useState("");
  const [pointsToEarn, setPointsToEarn] = useState(null);
  const [duration, setDuration] = useState(null);
  const [location, setLocation] = useState("");

  const programList = useSelector((state) => state.programList);
  const { getAllPrograms, addProgram, deleteProgram } = bindActionCreators(
    actionProgram,
    useDispatch()
  );
  const [programDate, setProgramDate] = useState(dayjs("2022-01-01T21:11:54"));

  const handleChange = (programDate) => {
    setProgramDate(programDate);
  };

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
        programDate: programDate,
        programTime: programTime,
        programName: programName,
        description: description,
        location: location,
      };

      console.log(body);

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
          `https://capstone-ultra-foundation.herokuapp.com/program/${program.programId}/upload`,
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
            program.imageLink
              ? `https://capstone-ultra-foundation.herokuapp.com/program/${program.programId}/download`
              : "/images/empty.jpg"
          }
          alt={program.programName}
          {...getRootProps()}
          className="w-100 h-100"
        />
        <div className="card-body pb-5">
          <h5 className="card-title mb-1">{program?.programName}</h5>
          <p className="card-title mb-1 text-muted">{program?.description}</p>
          <div className="py-2">
            <EventOutlinedIcon color="warning" />
            <span> {program?.createdDate}</span>
          </div>
          <div className="py-2">
            <LocationOnIcon color="warning" />
            <span>{program?.location}</span>
          </div>

          <button
            className="btn btn-md bg-warning text-white "
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
              className="col-md-3 mb-4 mx-1"
              style={{ height: "500px", width: "400px" }}
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
      <div className="row  d-flex justify-content-center align-items-center">
        <div className=" w-50 h-50 pt-5 shadow mb-5 bg-body rounded d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formProgramDate" className="mb-3">
                {/* Volunteer Date */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={programDate}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Form.Group>

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

              {/* Program Time */}
              <Form.Group controlId="formProgramName" className="mb-3">
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Enter Program Time"
                  value={programTime}
                  onChange={(e) => setProgramTime(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* Program Location */}
              <Form.Group controlId="formProgramLocation" className="mb-3">
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Enter Program Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></Form.Control>
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
        </div>
        <div className="row justify-content-center w-100 h-100 pt-5">
          {renderPrograms()}
        </div>
      </div>
    </section>
  );
}
