import {useState} from "react";

export default function changeLogState () {
    const [logState, setLogState] = useState("Log In");

    const handleChange = () => {
        setLogState(logState == "Log In" ? "Log Out" : "Log In");
    };

    return (
        <button className="hbuttonin" onClick={handleChange}>
            <p>{logState}</p>
        </button>
    );
    
    
}
