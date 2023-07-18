"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { StyledButton } from "../StyledButton/StyledButton";
import PropTypes from "prop-types";
import { BiSearch } from "react-icons/bi";

const StyledSearch = (props) => {
  const {
    onChange = () => {},
    onClick = () => {},
    className = "",
    placeholder = "Search",
  } = props;


  const searchRef = useRef(null)
  
  const onFocus = useCallback(() => {
    searchRef.current.classList.add("styled_search_focused")
    }, [])

const onBlur = useCallback(() => {
    searchRef.current.classList.remove("styled_search_focused")
    }, [])



  return (
    <div ref={searchRef} className={`styled_search ${className}`}>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        className={`styled_search_input`}
      />
      <StyledButton className="x_small m_0">
        <BiSearch />
      </StyledButton>
    </div>
  );
};

export default StyledSearch;

StyledSearch.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    };
