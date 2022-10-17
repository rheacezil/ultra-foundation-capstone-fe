import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { async } from "@firebase/util";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
const MySwal = withReactContent(Swal);

const Show = () => {
  const [userLists, setUserLists] = useState([]);

  const dataCollection = collection(db, "users");

  const getUsersData = async () => {
    const data = await getDocs(dataCollection);
    console.log(data.docs);
    setUserLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(userLists);
  };

  const deleteData = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsersData();
  };

  const confirmDelete = (id) => {
    MySwal.fire({
      title: "Want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <section className="donate-bg vh-100">
        <div className="container donate">
          <div className="row">
            <div className="col">
              <div className="d-grid gap-2">
                <Link to="/create" className="btn btn-secondary mt-2 mb-2">
                  Add member
                </Link>
              </div>
              <table className="table table-warning table-hover">
                <thead>
                  <tr>
                    <th>Donate</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userLists.map((userList) => (
                    <tr key={userList.id}>
                      <td>{userList.input}</td>
                      <td>{userList.firstName}</td>
                      <td>{userList.lastName}</td>
                      <td>{userList.email}</td>
                      <td>{userList.address}</td>
                      <td>{userList.phoneNumber}</td>
                      <td>
                        <Link
                          to={`/edit/${userList.id}`}
                          className="btn btn-success"
                        >
                          <FontAwesomeIcon icon={faPencil} />
                        </Link>
                        <button
                          onClick={() => {
                            confirmDelete(userList.id);
                          }}
                          className="btn btn-danger"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Show;
