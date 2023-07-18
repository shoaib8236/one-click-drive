import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import StyledSearch from "../StyledSearch/StyledSearch";

const Navbar = () => {
  return (
    <nav className="nav_wrapper">
      <div className="nav_content">
        <div className="logo">
          <Link href="/">
            <Image src="/main-logo.svg" alt="logo" width={200} height={50} />
          </Link>
        </div>
        <div className="links_container">
          <ul>
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
        </div>
        <div className="search_container">
            <StyledSearch/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
