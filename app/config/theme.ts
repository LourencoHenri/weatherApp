import { createTheme } from "@mui/material/styles";

import { grey, blue, indigo, lightBlue } from "@mui/material/colors";

const theme = createTheme({
	// typography: {
	// 	fontFamily: ["Poppins"].join(","),
	// },
	palette: {
		background: {
			default: "#fff",
			// 0F0F0F
		},
		primary: {
			main: "#00A3FF",
		// 	dark: "#E09600",
		// 	light: "#FFC247",
		// 	contrastText: "#E6E6E6",
		},
		// secondary: {
		// 	main: "#0F0F0F",
		// 	dark: "#000000",
		// 	light: "#1F1F1F",
		// 	contrastText: "#E6E6E6",
		// },
	},
});

export default theme;
