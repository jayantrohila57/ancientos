import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "@mui/material/Link";
import Logo from "../../assets/img/ancientv2.png";
function Copyright() {
	return (
		<Typography variant="body2" sx={{ pl: 1 }} color="text.secondary">
			{"Copyright © "}
			<Link color="inherit" href="https://www.ancientrom.xyz/">
				AncientOS
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Footer() {
	return (
		<Box>
			<CssBaseline />

			<Box
				component="footer"
				sx={{
					py: 3,
					px: 2,
					mt: "auto",
				}}
			>
				<Container>
					<Typography variant="body2" sx={{ pl: 1 }} color="text.secondary">
						<Image src={Logo} priority alt={Logo} height="15" width="15" />
						{"  Ancient OS"}
					</Typography>
					<Typography variant="body2" sx={{ pl: 1 }} color="text.secondary">
						{"Design & Maintain By  "}
						<Link color="inherit" href="https://jayantRohila.dev/">
							Jayant Rohila
						</Link>
					</Typography>
					<Copyright />
				</Container>
			</Box>
		</Box>
	);
}
