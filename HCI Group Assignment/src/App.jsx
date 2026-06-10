import Theme from "./components/Theme";
import UserLogState from "./components/UserLogState.jsx";
import logo from "./assets/logoLM.png";
import Movies from "./components/Movies.jsx";
import movies from "../src/movies.js";

export default function App () {
    return (
      <>
        <header className="headerspec">
          <img className="hederimg" src={logo} />
          <div className="headerbutton flex">
            <div className="logbtnmargin">
              <Theme />
            </div>
            <div className="loginbtn">
              <UserLogState className="fonts" className="headerbutton" />
            </div>
          </div>
          
        </header>
        <div>
          <Movies movies={movies} />
          <Movies movies={movies} />
        </div>
      </>
    );
}