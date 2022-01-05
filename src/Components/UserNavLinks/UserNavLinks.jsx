import React, { useState } from "react";
import "./UserNavLinks.css";

export default function UserNavLinks() {
  const [defaultLink, updateDefaultLink] = useState("StoreInfo");
  return (
    <>
      <div className="link-container">
        <a
          href="#"
          className={
            defaultLink === "StoreInfo" ? "link-clicked" : "default-link"
          }
          onClick={(e) => {
            updateDefaultLink("StoreInfo")
          }}
          aria-label='Store Info'
        >
          User/Store Info
        </a>
        <a
          href="#"
          className={defaultLink === "Selling" ? "link-clicked" : "default-link"}
          onClick={(e) => {
            updateDefaultLink("Selling")
          }}
          aria-label='Items Selling '
        >
          Currently selling
        </a>
        <a
          href="#"
          className={
            defaultLink === "Searching" ? "link-clicked" : "default-link"
          }
          onClick={(e) => {
            updateDefaultLink("Searching")
          }}
          id='search'
          aria-label='Search'
        >
          Currently Searching for
        </a>
      </div>
    </>
  );
}
