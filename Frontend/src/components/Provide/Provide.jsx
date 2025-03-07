import React from "react";
import ProvideCard from "./ProvideCard";
import "./Provide.css";

const Provide = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px auto" }}>
        What we Offer ?{" "}
      </h1>
      <p style={{ textAlign: "center", margin: "20px auto", padding: "10px" }}>
        Avaintern offers a comprehensive e-learning program, along with a
        freelancing opportunity.
      </p>
      <ProvideCard />
    </>
  );
};

export default Provide;
