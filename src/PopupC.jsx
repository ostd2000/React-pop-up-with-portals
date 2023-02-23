import React from "react";
import ReactDom from "react-dom";

const PopupC = ({ children, id, isOpen, overlayOpt }) => {
    if (!isOpen) return null;

    const overlayStyles = {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,

        backgroundColor: "rgba(0, 0, 0, .7)",

        zIndex: 1000,

        // Add aditional styling.
        ...overlayOpt,
    };

    const popupStyles = {
        position: "fixed",

        // Centring
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",

        zIndex: "1000",
    };

    return ReactDom.createPortal(
        <>
            <div style={overlayStyles} />
            <div style={popupStyles}>{children}</div>
        </>,

        document.getElementById(id)
    );
};

export default PopupC;
