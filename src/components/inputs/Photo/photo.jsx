import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * textarea component
 * @param {string} name
 * @param {string} label
 * @param {string} placeholder
 * @param {string} value
 * @returns {JSX.Element}
 * @constructor
 */
function Photo({name, label, placeholder, value}) {
    const [inputValue, setInputValue] = useState(value);

    return (<div>
            <label>{label}</label>
            <input
                type="file"
                name={name}
                placeholder={placeholder}   
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
    </div>
    );
}

Photo.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
}

export default Photo;