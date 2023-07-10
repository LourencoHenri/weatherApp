import "./globals.css";
import { Inter } from "next/font/google";
import MuiProvider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Weather App",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<MuiProvider>
			<html lang="en">
				<head>
					<link rel="icon" type="image/svg+xml" href="/whiteLogo.svg" />
				</head>
				<body className={inter.className}>{children}</body>
			</html>
		</MuiProvider>
	);
}
