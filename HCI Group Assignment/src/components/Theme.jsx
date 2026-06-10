import use state from "react";

function changeTheme () {
    const [theme, setTheme] = usestate("moon");

    const handleChange = () => {
        setTheme(theme == "moon" ? "sun" : "moon");
    };

    return (
        <button onClick=(handleChange)>
            <img src="..assets/${theme}.png"/>
        </button>
    );
    
}

export default Theme;
