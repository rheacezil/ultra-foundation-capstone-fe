import React from "react";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DataTable() {
  return (
    <section className="bg-light vh-100 pt-5">
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-50 h-50 pt-5 shadow p-3 mb-5 bg-body rounded">
          <table className="table table-bordered border-warning">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Company</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>
                <button className="btn btn-success text-dark mx-1">
                  <FontAwesomeIcon icon={faPencil} />
                </button>

                <button className="btn btn-danger text-dark mx-1">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
