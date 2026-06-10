import Theme from "./components/Theme";
import UserLogState from "./components/UserLogState.jsx";
import logo from "./assets/logoLM.png";

export default function App () {
    return (
        <header className="headerspec">
            <img className="hederimg" src={logo}/>
            <div className="headerbutton">
                <Theme />
                <UserLogState className="fonts" className="headerbutton"/>
            </div>
        </header>
    );
}
