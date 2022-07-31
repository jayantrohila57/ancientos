import React, { useEffect, useState, createContext, useContext } from "react";

import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
export const AuthContext = createContext(null);
export const useAuth = () => {
	useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loding, setLoading] = useState(true);
	console.log("Firebase:" + user);
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					uid: user.id,
					email: user.email,
					displayName: user.displayName,
				});
			} else {
				setUser(null);
			}
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logout = async () => {
		setUser(null);
		await signOut(auth);
	};
	return (
		<AuthContext.Provider value={{ user, login, logout, signup }}>
			{loding ? null : children}
		</AuthContext.Provider>
	);
};
