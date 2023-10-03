import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";

const persistenceLocalStorageMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistenceLocalStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
