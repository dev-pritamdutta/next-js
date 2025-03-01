import React from "react";

export default function ServiceDetails({ params }) {
    const id = params.id;

  return (
    <div className="text-center">
      <h3>Service Details page</h3>
        <p>Service ID: {id}</p>
    </div>
  );
}
