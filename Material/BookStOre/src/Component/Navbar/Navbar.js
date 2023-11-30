import React from "react";
import { BsCartCheck } from "react-icons/bs";
import { GiAbstract050 } from "react-icons/gi";
import Style from "./Navbar.module.css";
export default function Navbar() {
  return (
    <>
      <div className={Style.main}>
        <ul
          className="nav nav-pills  w-50 nav-fill gap-1 p-1  bg-light rounded-3 shadow-sm"
          id="pillNav2"
          role="tablist"
          style={{
            bsNavLinkColor: "var(bs-dark)",
            bsNavPillsLinkActiveColor: "var(bs-dark)",
            bsNavPillsLinkActiveBg: "var(bs-dark)",
          }}
        >
          <li className="nav-item " role="presentation">
            <GiAbstract050 className={Style.icons} />
          </li>
          <li className="nav-item" role="presentation  ">
            <button
              className=" nav-link rounded-1 active bs-dark"
              id="home-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-1"
              id="profile-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Books
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-1"
              id="contact-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              About Author
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-1"
              id="contact-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Blog
            </button>
          </li> <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-1"
              id="contact-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <div>
              <BsCartCheck className={Style.icon} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
