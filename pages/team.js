import React from "react";

function team({ result }) {
	return (
		<>
			<div>Team Member </div>
			{result.map((user) => {
				return <p key={user.id}>{user.name}</p>;
			})}
		</>
	);
}

export default team;

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
