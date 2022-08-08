import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import darkScrollbar from "@mui/material/darkScrollbar";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import Appbar from "../components/appbar/Appbar";
import Footer from "../components/footer/Footer";
import { AuthContextProvider } from "../context/AuthContext";
import { grey, deepOrange } from "@mui/material/colors";
const clientSideEmotionCache = createEmotionCache();
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
// import theme from "../src/theme";

export default function MyApp(props) {
	const [mode, setMode] = React.useState("light");

	React.useEffect(() => {
		const GetDarkModeState = JSON.parse(localStorage.getItem("darkMode"));

		if (GetDarkModeState === null) {
			localStorage.setItem("darkMode", JSON.stringify(mode));
		}
	});
	React.useEffect(() => {
		const GetDarkModeState = JSON.parse(localStorage.getItem("darkMode"));
		setMode(GetDarkModeState);
	}, [mode]);

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				if (mode === "dark") {
					localStorage.setItem("darkMode", JSON.stringify("light"));
					const GetDarkModeState = JSON.parse(localStorage.getItem("darkMode"));
					setMode(GetDarkModeState);
				} else {
					localStorage.setItem("darkMode", JSON.stringify("dark"));
					const GetDarkModeState = JSON.parse(localStorage.getItem("darkMode"));
					setMode(GetDarkModeState);
				}
			},
		}),
		[mode]
	);
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === "light"
						? {
								primary: {
									main: "#ff6969",
									light: "#fdf6f04f",
									hover: "#FF9999",
								},
								background: {
									default: "#FDF6F0",
									paper: "#ff6969",
								},
								text: {
									primary: "#2d2d2d",
									secondary: "#FDF6F0",
								},
						  }
						: {
								primary: {
									main: "#ff6969",
									light: "#2b1a3434",
									hover: "#FF9999",
								},

								background: {
									default: "#1a1a1a",
									paper: "#ff6969",
								},

								text: {
									primary: "#ffffff",
									secondary: "#431c1c",
								},
						  }),
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
					fontFamily: "Google Sans",
					fontSize: 15,
					fontWeightLight: 400,
					fontWeightMedium: 400,
					fontWeightBold: 500,
					htmlFontSize: 20,
					button: {
						fontWeight: 800,
						lineHeight: 1.7,
						fontSize: "1.5em",
					},
				},
				components: {
					MuiCssBaseline: {
						styleOverrides: (themeParam) => ({
							body:
								themeParam.palette.mode === "dark"
									? darkScrollbar()
									: darkScrollbar(),
						}),
					},
				},
			}),
		[mode]
	);

	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<AuthContextProvider>
			<CacheProvider value={emotionCache}>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>
				<ColorModeContext.Provider value={colorMode}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<div
						// style={{
						// 	color: "#000",
						// 	backgroundColor: "#ffffff",
						// 	background: "linear-gradient(to left, #FDF6F0, #FDF6F0)",
						// }}
						// style={{
						// 	backgroundColor: "#1c1c322e",
						// 	background: "linear-gradient(to left, #ff003313, #002aff1a)",
						// }}
						>
							<Appbar data={colorMode.toggleColorMode} />
							<Component {...pageProps} />
							<Footer />
						</div>
					</ThemeProvider>
				</ColorModeContext.Provider>
			</CacheProvider>
		</AuthContextProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
