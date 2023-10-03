import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
