import MenusList from "./menus/menusList";
import MenusAdd from "./menus/menusAdd";

export default function Menus() {
    return (
        <>
            <div>
                <h1>Menus</h1>
                <MenusAdd/>
            </div>
            <MenusList/>
        </>
    );
}