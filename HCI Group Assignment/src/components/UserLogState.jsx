import usestate from "react";

function changeLogState () {
    const [logState, setLogState] = usestate("Log In");

    const handleChange = () => {
        setTheme(theme == "Log In" ? "Log Out" : "Log In");
    };

    return (
        <button onClick=(handleChange)>
            <p>${theme}</p>
        </button>
    );
    
    
}

export default UserLogState;
