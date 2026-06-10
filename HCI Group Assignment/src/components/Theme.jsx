import {useState} from "react";

export default function changeTheme () {
    const [theme, setTheme] = useState("moon.png");

    const handleChange = () => {
        setTheme(theme == "moon.png" ? "sun.png" : "moon.png");
    };

    return (
        <button className="colorationButton" onClick={handleChange}>
            <img src={`src/assets/${theme}`} />
        </button>
    );
    
}
