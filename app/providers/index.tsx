"use client";

import { ReactNode, useEffect } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { useMemo, createContext, useState } from "react";

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
	colorMode: "light",
});

type ColorModeProps = "light" | "dark";

const MuiProvider = ({ children }: { children: ReactNode }) => {
	const [colorMode, setColorMode] = useState<ColorModeProps>("light");

	useEffect(() => {
		const storedColorMode = localStorage.getItem("weatherAppColorMode");
		if (storedColorMode) {
			setColorMode(storedColorMode as ColorModeProps);
		}
	});

	const currentColor = colorMode === "light" ? "dark" : "light";

	const toggleColorMode = () => {
		localStorage.setItem("weatherAppColorMode", currentColor);

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
