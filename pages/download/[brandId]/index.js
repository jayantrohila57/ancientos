import { useRouter } from "next/router";
import Link from "next/link";
export default function Brand() {
	const router = useRouter();
	const brandId = router.query.brandId;
	const handler = () => {
		router.push("/download");
	};

	const devices = ["6.1plus", "7.1", "5.3"];
	const Model = (item) => {
		return (
			<Link href={`${brandId}/${item}`}>
				<a key={item.length}>
					{item}
					<br />
				</a>
			</Link>
		);
	};
	return (
		<>
			<div>Download by Model</div>
			<div>{devices.map(Model)}</div>

			<button onClick={handler}>Brands</button>
			<Link href={`/download`}>
				<a>
					◀️ Go Back
					<br />
				</a>
			</Link>
		</>
	);
}
