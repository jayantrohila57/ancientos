import Link from "next/link";
export default function Download() {
	const devices = ["nokia", "samsung", "realme"];
	const brand = (item) => {
		return (
			<Link href={`download/${item}/`}>
				<a key={item.length}>
					{item}
					<br />
				</a>
			</Link>
		);
	};
	return (
		<>
			<div>Download by Brands</div>
			<div>{devices.map(brand)}</div>
			<Link href={`/`}>
				<a>
					◀️ Go Back
					<br />
				</a>
			</Link>
		</>
	);
}
