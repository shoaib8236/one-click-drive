"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { BiChevronDown } from "react-icons/bi";

const Dropdown = (props) => {
  const {
    children,
    title = "Open me",
    btnClassName = "",
    contentClassName = "",
    className = "",
  } = props;

  const dropdownRef = useRef(null);
  const contentRef = useRef(null);

  const [open, setOpen] = useState(false);

  const onOpenDropdown = useCallback(() => {
    if (open) {
      contentRef.current.classList.add("exit_animation");
      let timer = setTimeout(() => {
        contentRef.current.classList.remove("exit_animation");
        setOpen(false);
      }, 200);
      return () => clearTimeout(timer);
    }
    setOpen(true);
  }, [open]);

  // on outside click of dropdownRef close dropdown

  useEffect(() => {
    const onClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (open) {
          contentRef.current.classList.add("exit_animation");
          let timer = setTimeout(() => {
            contentRef.current.classList.remove("exit_animation");
            setOpen(false);
          }, 200);

          return () => clearTimeout(timer);
        }
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  return (
    <div ref={dropdownRef} className={`dropdown_wrapper ${className}`}>
      <button
        onClick={onOpenDropdown}
        className={`dropdown_action ${btnClassName}`}>
        {title} <BiChevronDown className={`${open ? "rotate" : "normal"}`} />
      </button>

      {open && (
        <div
          ref={contentRef}
          className={`dropdown_content ${contentClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  btnClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  className: PropTypes.string,
};
