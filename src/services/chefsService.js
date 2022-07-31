function getChefs(resolve, reject) {
    fetch("http://localhost:2001/chefs")
    .then(res => res.json())
    .then(resolve, reject)
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

export { getChefs, addChef };