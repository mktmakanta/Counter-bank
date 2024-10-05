import React from "react";

export default function layout({ children }) {
  return (
    <>
      <div className="bg-red-600 text-white m-5 p-5 flex justify-between">
        {" "}
        <div>this layout is for tickets</div>
        <div>Nav</div>
      </div>
      {children}
    </>
  );
}
