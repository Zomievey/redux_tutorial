import React from "react";
import {useSelector} from "react-redux";
import theme from "../features/theme";

function Profile() {
    const user = useSelector((state) => state.user.value);
    const darkMode = useSelector((state) => state.theme.darkMode);
    const moon = "🌙";
    const sun = "☀️";
    return (
        <div>
            <h1>Profile Page {darkMode ? moon : sun}</h1>
            <p>User Name: {user.name}</p>
            <p>User Age: {user.age}</p>
            <p>User Email: {user.email}</p>
        </div>
    );
}

export default Profile;
