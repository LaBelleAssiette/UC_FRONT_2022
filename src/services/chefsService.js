

function getChefs(resolve, reject) {
    console.log('getChefs');
    fetch("http://localhost:2001/chefs")
    .then(res => res.json())
    .then(resolve, reject);
}


function addChef(chef, resolve, reject){
    const recipeUrl = 'http://localhost:2001/chefs';
    const postBody = chef;

    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    };

    fetch(recipeUrl, requestMetadata)
        .then(res => { const json = res.json(); return json})
        .then(resolve, reject);
}

function deleteChef(id, resolve, reject){
    const recipeUrl = 'http://localhost:2001/chefs/' + id;
    const requestMetadata = {
        method: 'DELETE'
    };  
    fetch(recipeUrl, requestMetadata)
        .then(res => { const json = res.json(); return json})
        .then(resolve, reject);
}

// fonction pour modifier un chef
function updateChef(chef, resolve, reject){
    const recipeUrl = 'http://localhost:2001/chefs/' + chef.id;
    const requestMetadata = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chef)
    };
    fetch(recipeUrl, requestMetadata)
        .then(res => { const json = res.json(); return json})
        .then(resolve, reject);
}



export { getChefs, addChef, deleteChef, updateChef };