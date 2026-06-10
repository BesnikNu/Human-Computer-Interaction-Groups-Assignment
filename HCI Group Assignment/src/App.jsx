import Theme from "components/Theme.jsx";
import UserLogState from "components/UserLogState.jsx";

export default function App () {
    return (
        <header class="headerspec">
            <img src="../assets/logoLM.png"/>
            <Theme />
            <UserLogState />
        </header>
    );
}
