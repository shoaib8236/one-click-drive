'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Dropdown from "../Dropdown/Dropdown";
import StyledSearch from "../StyledSearch/StyledSearch";
import { StyledButton } from "../StyledButton/StyledButton";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

  const menuRef = useRef(null)
  const linkRef = useRef(null)
  
  const onOpenMobileMenu = useCallback(() => {
    if (menuRef.current && linkRef.current) {
      if (menuRef.current.classList.contains("open_menu")) {
        menuRef.current.classList.remove("open_menu")
        linkRef.current.classList.remove("animate_links")
      } else {
        menuRef.current.classList.add("open_menu")
        linkRef.current.classList.add("animate_links")
      }
    }
  }, [menuRef, linkRef])

  return (
    <nav className="nav_wrapper">
      <div className="nav_content">
        <div className="logo">
          <Link href="/">
            <Image src="/main-logo.svg" alt="logo" width={200} height={50} />
          </Link>
        </div>
        <div ref={menuRef} className="links_container">
          <ul ref={linkRef}>
            <li>
              <Dropdown title="Rent a car">
                <div className="dropdown_links">
                  <Dropdown
                    contentClassName="position_right"
                    className="dropdown_items"
                    btnClassName="dark">
                    <div className="dropdown_links">
                      <Link href="/dubai"> Dubai </Link>
                      <Link href="/deep-sea-fishing"> Deep Sea Fishing </Link>
                      <Link href="/abu-dhabi"> Abu Dhabi </Link>
                    </div>
                  </Dropdown>
                  <Dropdown
                    contentClassName="position_right"
                    className="dropdown_items"
                    btnClassName="dark">
                    <div className="dropdown_links">
                      <Link href="/dubai"> Dubai </Link>
                      <Link href="/deep-sea-fishing"> Deep Sea Fishing </Link>
                      <Link href="/abu-dhabi"> Abu Dhabi </Link>
                    </div>
                  </Dropdown>
                </div>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="Car Brands">
                <div className="dropdown_links">
                  <Dropdown
                    contentClassName="position_right"
                    className="dropdown_items"
                    btnClassName="dark">
                    <div className="dropdown_links">
                      <Link href="/dubai"> Dubai </Link>
                      <Link href="/deep-sea-fishing"> Deep Sea Fishing </Link>
                      <Link href="/abu-dhabi"> Abu Dhabi </Link>
                    </div>
                  </Dropdown>
                  <Dropdown
                    contentClassName="position_right"
                    className="dropdown_items"
                    btnClassName="dark">
                    <div className="dropdown_links">
                      <Link href="/dubai"> Dubai </Link>
                      <Link href="/deep-sea-fishing"> Deep Sea Fishing </Link>
                      <Link href="/abu-dhabi"> Abu Dhabi </Link>
                    </div>
                  </Dropdown>
                </div>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="Car With Driver">
                <div className="dropdown_links">
                  <Dropdown
                    contentClassName="position_right"
                    className="dropdown_items"
                    btnClassName="dark">
                    <div className="dropdown_links">
                      <Link href="/dubai"> Dubai </Link>
                      <Link href="/deep-sea-fishing"> Deep Sea Fishing </Link>
                      <Link href="/abu-dhabi"> Abu Dhabi </Link>
                    </div>
                  </Dropdown>
                  <Dropdown
                    contentClassName="position_right"
                    className="dropdown_items"
                    btnClassName="dark">
                    <div className="dropdown_links">
                      <Link href="/dubai"> Dubai </Link>
                      <Link href="/deep-sea-fishing"> Deep Sea Fishing </Link>
                      <Link href="/abu-dhabi"> Abu Dhabi </Link>
                    </div>
                  </Dropdown>
                </div>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="Yacht Rentals">
                <div className="dropdown_links">
                  <Link href="/dubai"> Dubai </Link>
                  <Link href="/deep-sea-fishing"> Deep Sea Fishing </Link>
                  <Link href="/abu-dhabi"> Abu Dhabi </Link>
                </div>
              </Dropdown>
            </li>
          </ul>
          <div className="search_container">
            <StyledSearch />
          </div>
        </div>
        <div className="mobile_actions"> <StyledButton onClick={onOpenMobileMenu} className="nav_open_btn"><AiOutlineMenu /></StyledButton> </div>
      </div>
    </nav>
  );
};

export default Navbar;
