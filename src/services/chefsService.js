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

// I could have copied the way it was written, but I wanted to do it my own way
async function removeChef(chefId){
    const apiUrl = 'http://localhost:2001/chefs/' + chefId;
    const requestMetadata = {
        method: 'DELETE'
    };
    try {
        const res = await fetch(apiUrl, requestMetadata);
        return await res.json();
    } catch (e) {
        console.error(e);
    }

}

async function updateChef(chief){
    const apiUrl = 'http://localhost:2001/chefs/' + chief.id;
    const requestMetadata = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chief)
    };
    console.log('test')
    try {
        const res = await fetch(apiUrl, requestMetadata);
        return await res.json();
    } catch (e) {
        console.error(e);
    }

}

export { getChefs, addChef, removeChef, updateChef };