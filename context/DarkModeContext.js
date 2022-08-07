import React, { useEffect } from "react";

import { createContext, useReducer } from "react";
import DarkModeReducer from "./DarkModeReducer";

const INITIAL_STATE = {
	darkMode: JSON.parse(localStorage.getItem("darkMode")) || true,
};
export const DarkModeContext = createContext(INITIAL_STATE);
export const DarkModeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

	useEffect(() => {
		localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
	}, [state.darkMode]);

	return (
		<DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
			{children}
		</DarkModeContext.Provider>
	);
};
