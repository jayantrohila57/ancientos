import LogoInfo from "../components/logoInfo/LogoInfo";
import LinkHeading from "../components/heading/LinkHeading";
import Heading from "../components/heading/Heading";
import Features from "../components/features/Features";
import IntroDetails from "../components/features/IntroDetails";
import Head from "next/head";
export default function Home() {
	const patreon = {
		primary: "Want Early Build access ?",
		secondary: "Those who want early build access, join us on patreon.",
		link: "/Donation",
	};
	const download = {
		primary: "Download Latest Builds",
		secondary: "Get the latest Builds For Your Devices",
		link: "/download",
	};
	const account = {
		primary: "Connect Your Account",
		secondary: "Login or Signup for Your new account",
		link: "/account",
	};
	const logs = {
		primary: "Check Builds Latest Updates",
		secondary: "All Latest Builds Change Logs are here",
		link: "/Updates",
	};
	const obj = {
		primary: "Apply for Mantainer Ship",
		secondary: "Join and grow the community of AncientOS.",
		link: "/maintainer",
	};
	const donation = {
		primary: "Donate to AncientOS",
		secondary: "Do consider donating on Paypal or join us on Patreon",
		link: "/Donation",
	};
	const screenshot = {
		primary: "Screenshots are here",
		secondary: "Check out All the exciting visual changes in the UI",
		link: "/Screenshot",
	};
	const screenshotDonate = {
		primary: "Donate Screenshot",
		secondary: "Let's Share what we discover",
		link: "/Screenshot/Donate-Screenshot",
	};
	const team = {
		primary: "Meet Our Devs & Designers",
		secondary: "Leading Members of the Ancient community.",
		link: "/Team",
	};
	return (
		<>
			<Head>
				<title>AncientOS</title>
				<meta
					name="description"
					content="A Custom rom based on AOSP (Android Open Source Porject) CrafetedWithLove. With the Aim To Provide Performance, Security and Stability, with Multiple Customisation option. So that every User can customise thier phone as per their taste."
				></meta>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9834213327105017"
					crossOrigin="anonymous"
				></script>
			</Head>
			<LogoInfo />
			<IntroDetails />
			<Heading pri="Features" sub="Let's see Our Rom features." />
			<Features />
			<Heading pri="Download Builds" sub="Download AOSP Roms" />
			<LinkHeading props={download} />
			<LinkHeading props={patreon} />
			<Heading pri="Screen Shots" sub="See All changes in New UI" />
			<LinkHeading props={screenshot} />
			{/* <LinkHeading props={screenshotDonate} /> */}
			<Heading pri="Build AncientOS" sub="Build AncientOS for your Device" />
			<LinkHeading props={obj} />
			<Heading pri="Get AncientOS Account" sub="Register Account" />
			<LinkHeading props={account} />
			<Heading pri="Change Logs" sub="Builds versions" />
			<LinkHeading props={logs} />
			<Heading pri=" Ancient Team" sub="Meet Our Team" />
			<LinkHeading props={team} />
			<Heading pri="Consider Donation" sub="Let's Contribute to AncientOS" />
			<LinkHeading props={donation} />
		</>
	);
}
