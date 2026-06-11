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
      <div className="containerstyle">
        <div>
          <select className="categorybuton fonts">
            <option selected>Category</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Horor</option>
            <option>Adventure</option>
            <option>Sci-Fi</option>
          </select>
        </div>
        <div className="moviemargin">
          <Movies movies={movies} start={0} end={7} h="Recent" />
          <Movies movies={movies} start={8} end={15} h="Featured" />
        </div>
      </div>
      </>
    );
}
