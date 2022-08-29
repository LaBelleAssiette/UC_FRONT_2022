import React, {useState, useEffect} from 'react';
import Text from "../components/inputs/Text/Text";
import Textarea from "../components/inputs/Textarea/Textarea";
import Button from "../components/inputs/Button/Button";
import ChefCardList from "../components/lists/ChefCardList/ChefCardList";
import {addChef, getChefs, removeChef, updateChef} from "../services/chefsService";

/**
 * Content for chef page /chefs
 * @returns {JSX.Element}
 * @constructor
 */
function ChefsPage() {
    const [isHideForm, setIsHideForm] = useState(true);
    const [isHideEditForm, setIsHideEditForm] = useState(true);
    const [editingChef, setEditingChef] = useState({});
    const [chefs, setChefs] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    /**********************************
     * Promise callback for chefslist
     **********************************/
    function resolveChefsList(result) {
        setIsLoaded(true);
        setChefs(result);
    }

    function rejectChefsList(error) {
        setIsLoaded(true);
        setError(error);
    }

    /**********************************
     * Promise callback for addChef *
     **********************************/
    function resolveChefAdd(chef) {
        setChefs([...chefs, chef]);
    }

    function rejectChefAdd(error) {
        console.error(error)
    }


    function getChiefs() {
        getChefs(resolveChefsList.bind({setIsLoaded, setChefs}), rejectChefsList.bind({setIsLoaded, setError}))
    }

    useEffect(() => {
        getChiefs();
    }, [])

    function toggleForm() {
        setIsHideForm(!isHideForm);
    }

    /**
     * submit form button
     * @param {event} event
     */
    function submit(event) {
        event.preventDefault();
        const form = event.target.form;
        addChef({
            firstname: form.elements["firstname"].value,
            lastname: form.elements["lastname"].value,
            description: form.elements["description"].value,
            imageUrl: form.elements["imageUrl"].value,
        }, resolveChefAdd.bind({setChefs, chefs}), rejectChefAdd)
    }

    // I think that without a good refacto (context, better components, etc.) this should do the job
    async function deleteChef(chefId) {
        await removeChef(chefId);
        getChiefs();
    }

    async function editChef(chef) {
        await setEditingChef(chef)
        setIsHideEditForm(false);
    }

    async function submitEdit(event) {
        event.preventDefault();
        const form = event.target.form;
        try {
            await updateChef({
                id: form.elements["id"].value,
                firstname: form.elements["firstname"].value,
                lastname: form.elements["lastname"].value,
                description: form.elements["description"].value,
                imageUrl: form.elements["imageUrl"].value,
            });
            getChiefs();
        } catch (e) {
            console.error(e)
        }
    }

    return (<div>
        <ChefCardList chefs={chefs} deleteChef={deleteChef} editChef={editChef}/>
        {error && (<div>Erreur : {error.message}</div>)}
        {!isLoaded && (<div>Chargement...</div>)}
        {!isHideEditForm && (
            <section>
                <hr/>
                <form className={`chef-form`}>
                    <input type="hidden" name="id" value={editingChef._id}/>
                    <Text name={'firstname'} label={'Firstname'} placeholder={"Chef Firstname"}
                          value={editingChef.firstname}/>
                    <Text name={'lastname'} label={'Lastname'} placeholder={"Chef Lastname"}
                          value={editingChef.lastname}/>
                    <Text name={'imageUrl'} label={'Image URL'} placeholder={"http://ww..."}
                          value={editingChef.imageUrl}/>
                    <Textarea name={'description'} label={'Chef description'}
                              placeholder={'Introduce chef in few words'} value={editingChef.description}/>
                    <Button onClick={submitEdit}>Update chef</Button>
                </form>
                <button onClick={() => setIsHideEditForm(true)}>Close edit form</button>
                <hr/>
            </section>
        )}

        <Button onClick={() => toggleForm()}>+ New chef</Button>
        <form className={`card chef-form ${isHideForm ? 'hidden' : ''}`}>
            <Text name={'firstname'} label={'Firstname'} placeholder={"Chef Firstname"} value={''}/>
            <Text name={'lastname'} label={'Lastname'} placeholder={"Chef Lastname"} value={''}/>
            <Text name={'imageUrl'} label={'Image URL'} placeholder={"http://ww..."} value={''}/>
            <Textarea name={'description'} label={'Chef description'} placeholder={'Introduce chef in few words'}
                      value={''}/>
            <Button onClick={submit}>Add chef</Button>
        </form>
    </div>);
}

export default ChefsPage;