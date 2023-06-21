import { createTheme } from "@mui/material/styles";

import { grey, blue, indigo, lightBlue } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		background: {
			// default: "#0f0f0f",
			paper: grey[50],
		},
		// text: {
		// 	primary: "#fff",
		// 	secondary: "rgba(255, 255, 255, 0.7",
		// 	disabled: "rgba(255, 255, 255, 0.5)",
		// },
        primary: {
            main: blue[500],
            // light: blue[50],
        }
	},
});

export default theme;
