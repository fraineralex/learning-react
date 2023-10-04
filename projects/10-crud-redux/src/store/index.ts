import { Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { UserWithId, rollbackUser } from "./users/slice";

const persistenceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
	};

const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
	const { type, payload } = action;
	console.log(type)
	const previousState = store.getState();
	next(action);

	if (type === "users/deleteUserById") {
		const userIdToRemove = payload;
		const userToRemove = previousState.user.find(
			(user:UserWithId) => user.id === userIdToRemove,
		);
		fetch(`https://jsonplaceholder.typicode.comkjbl j/users/${payload}`, {
			method: "DELETE",
		})
			.then((res) => {
				if (res.ok) toast.success(`User ${payload} deleted successfully`);
				throw new Error("Error deleting the user");
			})
			.catch((err) => {
				toast.error(`Error deleting the user ${userIdToRemove}`);
				if (userToRemove) store.dispatch(rollbackUser(userToRemove));
				console.log(err);
			});
	}
};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistenceLocalStorageMiddleware, syncWithDatabaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
