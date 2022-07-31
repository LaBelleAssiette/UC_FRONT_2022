import React, {} from 'react';
import PropTypes from "prop-types";

/**
 * chef card component
 * @param {Object} chef
 * @param {string} chef.firstname
 * @param {string} chef.lastname
 * @param {string} chef.description
 * @returns {JSX.Element}
 * @constructor
 */
function ChefCard({chef}) {
    return (<article className="card">
        <header>{chef.firstname} {chef.lastname}</header>
        <div>{chef.description}</div>
    </article>);
}

ChefCard.propTypes = {
    chef: PropTypes.shape({
       firstname: PropTypes.string.isRequired,
       lastname: PropTypes.string.isRequired,
       description: PropTypes.string.isRequired
    }).isRequired
}

export default ChefCard;