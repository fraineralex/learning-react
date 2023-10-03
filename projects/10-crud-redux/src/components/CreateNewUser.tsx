import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUsersAction } from '../hooks/useUsersAction';

export function CreateNewUser() {
  const { addUser } = useUsersAction();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target;
    const formData = new FormData(form as HTMLFormElement);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const gitHub = formData.get("gitHub") as string;

    addUser({ name, email, gitHub });
  }

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>

			<form className='' onSubmit={handleSubmit}>
				<TextInput placeholder='Name' name="name" />
				<TextInput placeholder='Email' name="email" />
				<TextInput placeholder='GitHub username' name="gitHub" />

				<div>
					<Button type='submit' style={{ marginRight: "16px" }}>
						Create user
					</Button>
				</div>
			</form>
		</Card>
	);
}
