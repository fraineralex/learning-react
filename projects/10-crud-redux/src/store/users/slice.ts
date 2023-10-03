import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	gitHub: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
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

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default userSlice.reducer;
