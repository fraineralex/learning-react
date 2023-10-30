import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Frainer Encarnación",
		email: "frainer@gmail.com",
		github: "fraineralex",
	},
	{
		id: "2",
		name: "Jeison de los Santos",
		email: "jeison@gmail.com",
		github: "jeisondls",
	},
	{
		id: "3",
		name: "Ralph Severino",
		email: "ralpseverino@gmail.com",
		github: "rseverinop",
	},
	{
		id: "4",
		name: "Samantha Ming",
		email: "samanthaming@gmail.com",
		github: "samanthaming",
	}
];

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
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
			const id = crypto.randomUUID()
			state.push({ id, ...action.payload })
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
			if (!isUserAlreadyDefined) {
				state.push(action.payload)
			}
		}
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;
