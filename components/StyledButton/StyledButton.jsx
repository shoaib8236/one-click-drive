"use client"; 

import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";



export const StyledButton = (props) => {
    const {
        children,
        onClick = () => {},
        className = "",
        loading = false,
        btnRef = null,
        ...rest
    } = props;
    const [coords, setCoords] = React.useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = React.useState(false);

    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 200);
        } else setIsRippling(false);
    }, [coords]);

    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);


    return (
        <button
            {...rest}
            ref={btnRef}
            className={`styled_button ${className} ${loading ? "loading" : ""}`}
            onClick={(e) => {
                const rect = e.target.getBoundingClientRect();
                setCoords({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
                onClick && onClick(e);
            }}
        >
            {isRippling ? (
                <span
                    className="ripple"
                    style={{
                        left: coords.x,
                        top: coords.y,
                    }}
                />
            ) : (
                ""
            )}
            <span className="content">{children}</span>
            {loading && <span className="btn_loader"><AiOutlineLoading3Quarters/></span>}
        </button>
    );
};

StyledButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    loading: PropTypes.bool,
    ref: PropTypes.object,
};
