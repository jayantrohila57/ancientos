import React from "react";
import { Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AndroidRoundedIcon from "@mui/icons-material/AndroidRounded";

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
export default function AccordionBox({ logs }) {
	const [expanded, setExpanded] = React.useState("panel1");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	const styles = {
		dispay: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
	};
	return (
		<Box sx={styles}>
			<Timeline>
				{logs.map((data, index) => (
					<TimelineItem key={index} data-aos="fade-up" data-aos-duration="600">
						<TimelineOppositeContent
							variant="body2"
							style={{
								// fontSize: 20,
								mt: 2,
								flex: 0.1,
							}}
						>
							{" "}
							{data.build}
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Typography variant="body2" color="text.secondary">
								{" "}
								<AndroidRoundedIcon
									sx={{
										pt: 1.5,
									}}
								/>{" "}
								{data.version}
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
										<Typography
											variant="overline"
											style={{
												display: "block",
												whiteSpace: "pre-wrap",
												margin: "1em 0",
											}}
										>
											{data.config.map((data) => data + "\n")}
										</Typography>
									</AccordionDetails>
								</Accordion>
							</div>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Box>
	);
}
