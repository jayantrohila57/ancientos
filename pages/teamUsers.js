import React from "react";
import Members from "../components/Members";
function TeamUsers({ result }) {
	return (
		<>
			<div>Team Member </div>
			{result.map((member) => {
				return (
					<div key={member.id}>
						<Members member={member} />
					</div>
				);
			})}
		</>
	);
}

export default TeamUsers;

export async function getStaticProps() {
	const url = `https://jsonplaceholder.typicode.com/users`;
	const result = await fetch(url);
	console.log(result);
	return {
		props: {
			result: await result.json(),
		},
	};
}
