import { useState } from "react";

export default function useLocalStorage(key, initialValue) {

	if (typeof window === "undefined") { 
		return "I am on the server" 
	}

	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);

			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	const setValue = (value) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;

			setStoredValue(valueToStore);

			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.log(error);
		}
	};

	return [storedValue, setValue];
}