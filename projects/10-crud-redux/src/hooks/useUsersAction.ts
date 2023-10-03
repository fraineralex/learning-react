import { UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUsersAction = () => {
	const dispatch = useAppDispatch();

  type AddUser = (user: { name: string; email: string; gitHub: string }) => void;

	const addUser:AddUser = ({ name, email, gitHub }) => {
		dispatch(addNewUser({ name, email, gitHub }));
	};

	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return { addUser, removeUser };
};
