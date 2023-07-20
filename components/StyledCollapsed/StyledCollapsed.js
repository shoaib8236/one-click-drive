'use client'

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const StyledButton = dynamic(() =>
    import("../StyledButton/StyledButton").then((module) => module.StyledButton)
);

const StyledCollapsed = (props) => {
    const { itemShow = 8, data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 33, 4, 5, 543] } =
        props;
    const [items, setItems] = useState([]);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        // Only update the state if both 'itemShow' and 'data' props have valid values
        if (data.length > 0 && itemShow > 0 && !expanded) {
            // keep just 'itemShow' number of items from 'data' and delete others
            const trimmedData = data.slice(0, itemShow);

            // Check if 'trimmedData' is different from the current 'items' state
            if (!areArraysEqual(trimmedData, items)) {
                setItems(trimmedData);
            }
        }
    }, [itemShow, data, items, expanded]); // Add 'items' to the dependency array to prevent unnecessary updates

    // Helper function to compare two arrays for equality
    const areArraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };

    const onExpand = () => {
        setExpanded(!expanded);
        if (!expanded) {
            // Expand: show all items
            setItems(data);
        } else {
            // Collapse: show limited items based on 'itemShow' prop
            setItems(data.slice(0, itemShow));
        }
    };

    return (
        <div className={"styled_collapse"}>
            {items.map((item) => (
                <div className={"item_tags"} key={Math.random()}>Item: {item}</div>
            ))}
            {itemShow >= data.length - 1 ? <></> :
                <div className={'expand_btn_wrapper'}>
                <StyledButton className={"small"} onClick={onExpand}>
                    {expanded ? "Less" : "More"}
                </StyledButton>
            </div>}
        </div>
    );
};

StyledCollapsed.propTypes = {
    itemShow: PropTypes.number,
    data: PropTypes.array,
};

export default StyledCollapsed;
