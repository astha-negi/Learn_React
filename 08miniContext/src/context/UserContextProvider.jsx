import React from "react";
import UserContext from "./UserContext";   // Import the context object

// This component will wrap the entire app and provide user-related data
const UserContextProvider = ({ children }) => {

    // Create a state variable `user` and a function `setUser` to update it.
    const [user, setUser] = React.useState(null);

    return (
        // The Provider makes the `user` and `setUser` available to all components
        <UserContext.Provider value={{ user, setUser }}>
            
            {/* Render any child components inside this Provider */}
            {children}

        </UserContext.Provider>
    );
}

export default UserContextProvider;
