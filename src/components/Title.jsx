import React from "react";

export default function Title(props) {
  return (
    <div className="section-title">
      <h2>{props.title || "Section Title"}</h2>
      <div className="underline"></div>
    </div>
  );
}
