import Theme from "components/Theme.jsx";
import UserLogState from "components/UserLogState.jsx";

export default function App () {
    return (
        <header class="headerspec">
            <img class="hederimg" src="../assets/logoLM.png"/>
            <Theme />
            <UserLogState class="fonts" class="headerbutton"/>
        </header>
    );
}
