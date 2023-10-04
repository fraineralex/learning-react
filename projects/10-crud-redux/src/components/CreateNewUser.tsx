import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useUsersAction } from "../hooks/useUsersAction";
import { useState } from "react";

export function CreateNewUser() {
	const { addUser } = useUsersAction();
	const [result, setResult] = useState<'ok' | 'ko' | null>(null)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult(null)
		const form = event.target;
		const formData = new FormData(form as HTMLFormElement);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const gitHub = formData.get("gitHub") as string;

		if (!name || !email || !gitHub) return setResult('ko')

		addUser({ name, email, gitHub });
		setResult('ok')
		form.reset()
	};

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
					<span>
						{ result === 'ok' && <Badge color='green'>Saved successfully</Badge> }
						{ result === 'ko' && <Badge color='red'>Error saving the data</Badge> }
					</span>
				</div>
			</form>
		</Card>
	);
}
