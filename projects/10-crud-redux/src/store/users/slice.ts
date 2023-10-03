import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Frainer Encarnación",
		email: "peterdoe@gmail.com",
		gitHub: "fraineralex",
	},
	{
		id: "2",
		name: "Miguel Angel Duran",
		email: "miguel@gmail.com",
		gitHub: "midudev",
	},
	{
		id: "3",
		name: "Marcos Doe",
		email: "Marcos@gmail.com",
		gitHub: "marcos",
	},
];

export interface User {
	name: string;
	email: string;
	gitHub: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, {id, ...action.payload}]
    },
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById } = usersSlice.actions;
