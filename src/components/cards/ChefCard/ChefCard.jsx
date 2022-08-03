import React, {} from 'react';
import PropTypes from "prop-types";
import { deleteChef, updateChef } from"../../../services/chefsService";

/**
 * chef card component
 * @param {Object} chef
 * @param {string} chef.firstname
 * @param {string} chef.lastname
 * @param {string} chef.description
 * @param {string} chef.photo
 * @returns {JSX.Element}
 * @constructor
 */
function ChefCard({chef}) {

        // ontrie les chefs en focntin de leur nom



    return (<article className="card">
        <header>{chef.firstname} {chef.lastname}</header>
        <div className='card__container--image'>
            <img src={chef.photo} alt={chef.firstname}/>
            <div>{chef.description}</div>
        </div>

        <button onClick={deleteChef}>Supprimer</button>
        <button onClick={updateChef}>Modifier</button>

        
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