import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#3f51b5",
			background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		},
		secondary: {
			main: "#f50057",
		},
	},
	typography: {
		fontWeightLight: 200,
		fontWeightRegular: 200,
		fontWeightMedium: 400,
		fontWeightBold: 500,
		fontSize: 10,
		fontFamily: "Poppins",
	},

	props: {
		MuiAppBar: {
			color: "inherit",
		},
		MuiButton: {
			size: "small",
		},
		MuiButtonGroup: {
			size: "small",
		},
		MuiCheckbox: {
			size: "small",
		},
		MuiFab: {
			size: "small",
		},
		MuiFormControl: {
			margin: "dense",
			size: "small",
		},
		MuiFormHelperText: {
			margin: "dense",
		},
		MuiIconButton: {
			size: "small",
		},
		MuiInputBase: {
			margin: "dense",
		},
		MuiInputLabel: {
			margin: "dense",
		},
		MuiRadio: {
			size: "small",
		},
		MuiSwitch: {
			size: "small",
		},
		MuiTextField: {
			margin: "dense",
			size: "small",
		},
		MuiTooltip: {
			arrow: true,
		},
	},
	overrides: {
		MuiAppBar: {
			colorInherit: {
				backgroundColor: "#689f38",
				color: "#fff",
			},
		},
		MuiButton: {
			root: {
				background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
				border: 0,
				borderRadius: 3,
				boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
				color: "white",
				height: 48,
				padding: "0 30px",
			},
		},
	},
});
export default theme;
