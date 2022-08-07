import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#3f51b5",
		},
		secondary: {
			main: "#f50057",
		},
	},
	shape: {
		borderRadius: 5,
	},
	spacing: 10,
	props: {
		MuiAppBar: {
			color: "transparent",
		},
		MuiTooltip: {
			arrow: true,
		},
	},
	typography: {
		fontFamily: "Roboto",
		fontSize: 15,
		fontWeightLight: 200,
		fontWeightMedium: 600,
		fontWeightBold: 300,
		htmlFontSize: 15,
		button: {
			fontWeight: 800,
			lineHeight: 1.7,
			fontSize: "1.5em",
		},
	},
});
export default theme;
