import { ReactNode, Suspense } from "react";
import Head from "next/head";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import theme from "../config/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";

const MuiProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default MuiProvider;
