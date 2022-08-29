import Button from "../../components/inputs/Button/Button";
import Text from "../../components/inputs/Text/Text";
import {useEffect, useState} from "react";
import {getChefs} from "../../services/chefsService";
import {addMenu} from "../../services/menusService";

export default function MenusAdd({updateList}) {
    const [dialogOpened, setDialogOpened] = useState(false);
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        getChefs((result) => {
            setChefs(result);
        }, (error) => {
            console.log(error);
        })
    }, [])

    function openDialog() {
        setDialogOpened(true);
    }
    function closeDialog() {
        setDialogOpened(false);
    }

    async function submitMenu(event) {
        event.preventDefault();
        const form = event.target.form;
        const formData = new FormData(form);
        const menu = {};
        formData.forEach((value, key) => {
            menu[key] = value;
        });
        await addMenu(menu);
        updateList();
        closeDialog();
    }

    return (
        <>
            <Button onClick={openDialog}>Add menu</Button>
            <dialog role="dialog" open={dialogOpened}>
                <h2>Add menu</h2>
                <button onClick={closeDialog}>X</button>
                <form>
                    <Text name={'title'} label={'Title'} placeholder={"Menu title"} value={''}/>
                    <select name={'chef'}>
                        <option value={null}>Select chef</option>
                        {chefs.map((chef, key) => (
                            <option value={chef._id} key={key}>{chef.firstname} {chef.lastname}</option>
                        ))}
                    </select>
                    <Text name={'starter'} label={'Starter'} placeholder={"Stater"} value={''}/>
                    <Text name={'plate'} label={'Plate'} placeholder={"Plate"} value={''}/>
                    <Text name={'dessert'} label={'Dessert'} placeholder={"Dessert"} value={''}/>
                    <Button onClick={submitMenu}>Add menu</Button>
                </form>
            </dialog>
        </>
    );
}