import React, {} from 'react';
import PropTypes from "prop-types";
import {removeChef} from "../../../services/chefsService"; // Adding an alias such as "@" could be great

/**
 * chef card component
 * @param {Object} chef
 * @param {function} deleteChef
 * @param {string} chef.firstname
 * @param {string} chef.lastname
 * @param {string} chef.description
 * @param {string} chef.imageUrl
 * @returns {JSX.Element}
 * @constructor
 */
function ChefCard({chef, deleteChef, editChef}) {
    return (<article className="card">
        <header>{chef.firstname} {chef.lastname}</header>
        <img src={chef.imageUrl} alt={`${chef.firstname} ${chef.lastname}`}/>
        <div>{chef.description}</div>
        <div>
            <button onClick={() => deleteChef(chef._id)}>Delete</button>
            <button onClick={() => editChef(chef)}>Edit</button>
        </div>
    </article>);
}

ChefCard.propTypes = {
    chef: PropTypes.shape({
       firstname: PropTypes.string.isRequired,
       lastname: PropTypes.string.isRequired,
       description: PropTypes.string.isRequired,
    }).isRequired
}

export default ChefCard;