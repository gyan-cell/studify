"use client";

import { AiOutlineBars } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";
import React, { useState } from "react";
import "../../styles/navbar.css";
import Link from "next/link";

const NavElements = () => {
  const [navActive, setnavActive] = useState<boolean | string>(false);
  return (
    <div className="navElements">
      <div
        className="mobSwitcherButton"
        onClick={() => {
          setnavActive(!navActive);
        }}
      >
        {navActive ? <HiOutlineX /> : <AiOutlineBars />}
      </div>
      <div className={navActive ? "ul active" : "ul"}>
        <ul>
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Login</Link>
          </li>
          <li>
            <Link href={"#"}>Signup</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavElements;
