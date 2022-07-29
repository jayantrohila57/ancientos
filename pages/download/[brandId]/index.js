import { useRouter } from "next/router";
import Link from "next/link";
export default function Brand() {
	const router = useRouter();
	const brandId = router.query.brandId;
	const handler = () => {
		router.push("/download");
	};

	const devices = ["6.1plus", "7.1", "5.3"];
	return (
		<>
			<div>Download by Model</div>

			<button onClick={handler}>Brands</button>
			<div>
				{devices.map((device, index) => {
					return (
						<Link key={index} href={`${brandId}/${device}`}>
							<h1 key={index}>
								{device}
								<br />
							</h1>
						</Link>
					);
				})}
			</div>
			<Link href={`/download`}>
				<a>
					◀️ Go Back
					<br />
				</a>
			</Link>
		</>
	);
}
