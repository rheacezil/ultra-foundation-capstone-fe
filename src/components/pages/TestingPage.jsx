import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionFundraisers from "../../redux/actions/actionFundraiser";

export default function TestingPage() {
  const [name, setName] = useState("");

  return (
    <>
      <Button onClick={setName("Angela")} />
      <h1>{name}</h1>
    </>
  );
}
