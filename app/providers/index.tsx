"use client";

import { ReactNode } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { useMemo, createContext, useState } from "react";

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
	colorMode: "light",
});

const MuiProvider = ({ children }: { children: ReactNode }) => {
	const [colorMode, setColorMode] = useState<"light" | "dark">("light");

	const toggleColorMode = () => {
		setColorMode((prevColorMode) =>
			prevColorMode === "light" ? "dark" : "light"
		);
	};

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: colorMode,
					primary: {
						main: "#0F0F0F",
						light: "#00A3FF",
					},
				},
			}),
		[colorMode]
	);

	return (
		<ColorModeContext.Provider value={{ toggleColorMode, colorMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default MuiProvider;
