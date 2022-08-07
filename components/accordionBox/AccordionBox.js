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
		expandIcon={<ArrowForwardIosSharpIcon fontSize="small" />}
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
	borderTop: "1px solid #00000035",
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
							variant="h5"
							style={{
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
							<Typography variant="h5" color="text.primary">
								<AndroidRoundedIcon /> {data.version}
							</Typography>

							<div>
								<Accordion
									sx={{
										mt: 2,
										mb: 2,
										borderRadius: 5,
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
											variant="caption"
											style={{
												display: "block",
												whiteSpace: "pre-wrap",
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
