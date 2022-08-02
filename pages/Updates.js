import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box, Typography } from "@mui/material";
import Heading from "../components/heading/Heading";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AndroidRoundedIcon from "@mui/icons-material/AndroidRounded";
import GoBack from "../components/goBack/GoBack";

import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));
const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={
			<ArrowForwardIosSharpIcon
				fontSize="large"
				sx={{
					p: 1,
					borderRadius: 5,
					boxShadow: 5,
					background: "linear-gradient(to left, #c14d6422, #4359c630)",
				}}
			/>
		}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor: "transparent",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(0),
	},
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
export default function Updates() {
	const update = [
		{
			build: "7.0",
			version: "Android 13",
			config: ["Coming Soon..."],
			date: "Soon",
		},
		{
			build: "6.7",
			version: "Andriod 12",
			config: [
				"Android 12",
				"January security",
				"Improve FPS Info",
				"Add Game Space from aosp krypton",
				"Add more custom icon theme pixel launcher",
			],
			date: "08-06-22",
		},
		{
			build: "6.3",
			version: "Android 12",
			config: ["1 logs", "1 logs", "1 logs"],
			date: "08-06-22",
		},
		{
			build: "5.7",
			version: "Android 11",
			config: ["1 logs", "1 logs", "1 logs"],
			date: "08-06-22",
		},
	];
	const [expanded, setExpanded] = React.useState("panel1");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		// style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }}
		<React.Fragment>
			<Box
				sx={{
					minHeight: "100vh",

					pb: 25,
					p: 1,
					dispay: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Heading pri="Change Logs" sub="These are all Builds versions" />

				<Timeline align="left">
					{update.map((data, index) => (
						<TimelineItem
							key={index}
							data-aos="fade-up"
							data-aos-duration="600"
						>
							<TimelineOppositeContent
								variant="h5"
								style={{ mt: 2, flex: 0.1 }}
							>
								{" "}
								{data.build}
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography variant="h5" color="text.secondary">
									{" "}
									<AndroidRoundedIcon /> {data.version}
								</Typography>

								<div>
									<Accordion
										sx={{
											mt: 2,
											mb: 1,
											borderRadius: 5,
											backgroundColor: "transparent",
											background:
												"linear-gradient(to left, #c14d6431, #4359c632)",
										}}
										expanded={expanded === `panel+${index}`}
										onChange={handleChange(`panel+${index}`)}
									>
										<AccordionSummary
											aria-controls="panel1d-content"
											id="panel1d-header"
										>
											<Typography sx={{ pl: 3 }}>Source Change Logs</Typography>
										</AccordionSummary>
										<AccordionDetails>
											{data.config.map((data) => data)}
										</AccordionDetails>
									</Accordion>
								</div>
								<Typography
									variant="caption"
									sx={{ m: 2 }}
									color="text.secondary"
								>
									Updated Date {data.date}
								</Typography>
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
				<GoBack props="/" />
			</Box>
		</React.Fragment>
	);
}
