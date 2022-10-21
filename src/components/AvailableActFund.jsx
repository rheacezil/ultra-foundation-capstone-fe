import { Divider } from "@mui/material";
import React, { useEffect } from "react";

export default function AvailableActFund() {
  //     const [activeFilter, setActiveFilter] = useState();
  //     const [programs, setPrograms] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);

  //     getAllPrograms().then((response) => {
  //       setTimeout(() => {
  //         const allPrograms = response.payload.filter(
  //           (programs) => programs.type === "regular"
  //         );

  //         if (activeFilter !== "ALL") {
  //           setPrograms(
  //             allPrograms.filter((programs) => programs.filter === activeFilter)
  //           );
  //           setLoading(false);
  //         } else {
  //           setPrograms(allPrograms);
  //           setLoading(false);
  //         }
  //       }, 1000);
  //     });
  //   }, [activeFilter]);

  // const renderCollectionList = () => {
  //   return products.map((item) => (
  //     <div className="col-md-6 col-lg-4 col-xl-3 p-2 new" key={item.programId}>
  //       <div className="collection-img position-relative">
  //         <Link to={`/product/${item.programId}`}>
  //           <img
  //             src={item.imageLink ? item.imageLink : "/images/empty-image.jpeg"}
  //             alt={item.programName}
  //             className="w-100"
  //           />
  //         </Link>

  //         <span className="bg-primary position-absolute d-flex align-items-center justify-content-center text-white">
  //           sale
  //         </span>
  //       </div>
  //       <div className="text-center">
  //         <p className="text-capitalize my-1">{item.productName}</p>
  //         <span className="fw-bold">{item.price}</span>
  //       </div>
  //     </div>
  //   ));
  // };

  return (
    <>
      <Divider />
      <section className="row d-flex justify-content-center align-items-center">
        <div className="d-flex flex-wrap mt-5 justify-content-center">
          <button
            className="btn m-2 bt-fs"
            onClick={() => setActiveFilter("volunteer")}
          >
            Volunteer Programs
          </button>
          <button
            className="btn m-2 bt-fs"
            onClick={() => setActiveFilter("fund")}
          >
            Fundraisers
          </button>
        </div>
        <div className="seperator-two"></div>
      </section>
    </>
  );
}
