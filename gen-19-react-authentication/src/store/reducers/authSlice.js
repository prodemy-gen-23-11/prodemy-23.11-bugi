import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    token: "",
    user: {
        id: "",
        email: "",
        name: "",
        role: ""
    }
};

function getStoredAuthState() {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user");

    if (token) {
        // axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        return {
            token,
            user: JSON.parse(userString),
        };
    };

    return { ...initialState };
}

const authSlice = createSlice({
    name: "auth",
    initialState: getStoredAuthState(),
    reducers: {
        setTokenAction(state, action) {
            console.log("tokenAction run");
            console.log("State token before: ");
            console.log(state.token);

            const token = action.payload;
            state.token = token;

            console.log("State token after: ");
            console.log(state.token);

            localStorage.setItem("token", token);
            // axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        },
        setUserAction(state, action) {
            console.log("userAction run");

            const { id, email, name, role } = action.payload;

            console.log(id);
            console.log("Action: ");
            console.log(action);
            console.log("Action payload: ");
            console.log(action.payload);
            console.log("State: ");
            console.log(state);
            console.log("State token: ");
            console.log(state.token);
            console.log("State user: ");
            console.log(state.user);
            console.log(state.user.role);

            state.user.id = id;
            state.user.email = email;
            state.user.name = name;
            state.user.role = role;

            localStorage.setItem("user", JSON.stringify({ id, email, name, role }));
        },
        resetAuthAction() {
            console.log("resetAuth run");

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            // delete axios.defaults.headers.common["Authorization"];
            return { ...initialState };
        }
    }
});

export const { setTokenAction, setUserAction, resetAuthAction } = authSlice.actions;

export default authSlice.reducer;

