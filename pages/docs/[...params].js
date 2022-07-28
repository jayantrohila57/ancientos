import { useRouter } from "next/router";
export default function doc() {
	const router = useRouter();
	const { params = [] } = router.query;
	console.log(params);

	return (
		<div>
			<h1>doc routs</h1>
			{params.length === 2 ? (
				<>
					<h1>Build:{params[0]}</h1>
					<h1>ChangeLog:{params[1]}</h1>
				</>
			) : (
				<h1>No Build Found</h1>
			)}
		</div>
	);
}
