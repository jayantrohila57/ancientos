import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Home Page</h1>
			<Link href={"/download"}>
				<a>Download</a>
			</Link>
		</div>
	);
}
