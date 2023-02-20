import { AuthContext } from "../contexts/AuthContext"
import React from "react";


export const UseAuth = () => {
    const context = React.useContext(AuthContext);
    return context
};