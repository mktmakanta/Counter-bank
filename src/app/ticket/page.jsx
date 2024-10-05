import Link from "next/link";
import React from "react";

export default function Ticket() {
  return (
    <>
      <h2>Ticket</h2>
      <Link
        href="/"
        className=" text-white bg-red-500 px-4 py-2 rounded-sm m-4"
      >
        Go to Home{" "}
      </Link>
    </>
  );
}
