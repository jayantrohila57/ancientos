import { useRouter } from "next/router";
import Link from "next/link";
export default function Device() {
	const router = useRouter();
	const brandId = router.query.brandId;
	const deviceId = router.query.deviceId;
	return (
		<div>
			<h1>
				Brand: {brandId}
				<br />
				device: {deviceId}
			</h1>
			<Link href={`/download/${brandId}`}>
				<a>
					◀️ Go Back
					<br />
				</a>
			</Link>
		</div>
	);
}
