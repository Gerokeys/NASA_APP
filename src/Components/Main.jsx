import React from "react";

export default function Main(props) {
  const { data } = props;
  return (
    <div className="img-container">
      <img src={data.hdurl} alt={data.title || "bg-img"} className="bg-img" />
    </div>
  );
}
