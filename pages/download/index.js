import Link from "next/link";
export default function Download() {
	const brand = ["nokia", "samsung", "realme"];
	return (
		<>
			<div>Download by Brands</div>
			<div>
				{brand.map((brands, index) => {
					return (
						<Link key={index} href={`download/${brands}/`}>
							<h1 key={index}>
								{brands}
								<br />
							</h1>
						</Link>
					);
				})}
			</div>
			<Link href={`/`}>
				<a>
					◀️ Go Back
					<br />
				</a>
			</Link>
		</>
	);
}
