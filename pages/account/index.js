import { useRouter } from "next/router";
export default function Account() {
	const router = useRouter();
	const accountId = router.query.accountId;
	return <div>Account{accountId}</div>;
}
