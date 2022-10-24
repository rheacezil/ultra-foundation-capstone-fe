import React, { useEffect, useState } from "react";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as actionDonation from "../redux/actions/actionDonation";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export default function DataTable() {
  const [donations, setDonations] = useState([]);
  const { getAllDonations } = bindActionCreators(actionDonation, useDispatch());

  useEffect(() => {
    getAllDonations().then((response) => {
      setDonations(response.payload);
    });
  }, []);

  const renderDonations = () => {
    console.log(donations);
    return donations.map((donation) => (
      <>
        <tbody>
          <td className="m-1 text-center">{donation.firstName}</td>
          <td className="m-1 text-center">{donation.lastName}</td>
          <td className="m-1 text-center">{donation.email}</td>
          <td className="m-1 text-center">{donation.amount}</td>
        </tbody>
      </>
    ));
  };
  return (
    <section className="bg-light vh-100 pt-5">
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-50 h-50 pt-5 shadow p-3 mb-5 bg-body rounded">
          <table className="table table-bordered border-warning">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Amount</th>
              </tr>
            </thead>
            {renderDonations()}
          </table>
        </div>
      </div>
    </section>
  );
}
