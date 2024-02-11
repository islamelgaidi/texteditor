import React from 'react';
import './ErrorMessage.css';
const XErrorMessage = ({ message }) => {
    return (
        <div className="error-message">
            <p>{message}</p>
        </div>
    );
};

export default XErrorMessage;