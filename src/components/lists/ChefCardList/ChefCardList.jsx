import React, {} from 'react';
import ChefCard from "../../cards/ChefCard/ChefCard";
import PropTypes from "prop-types";

/**
 * chef card list component
 * @param {Array<chef>} chefs
 * @param {function} deleteChief
 * @returns {JSX.Element}
 * @constructor
 */
function ChefCardList({chefs, deleteChef, editChef}) {
    return (<section className="card-list">
        {chefs.map((chef, key) => (
            <ChefCard chef={chef} key={key} deleteChef={deleteChef} editChef={editChef}/>
        ))}
    </section>);
}

ChefCardList.propTypes = {
    chefs: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ChefCardList;