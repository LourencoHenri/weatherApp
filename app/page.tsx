"use client";

import { Box, Typography, Card, CardContent, Grid, AppBar, Toolbar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuIcon from '@mui/icons-material/Menu';
import MuiProvider from "./providers";
import City from "./components/City/index";

interface DataProps {
	location: {
		name: string;
		region: string;
		country: string;
		localtime_epoch: number;
		localtime: string;
	};
	current: {
		temp_c: number;
		temp_f: number;
		condition: {
			text: string;
			icon: string;
			code: number;
		};
		wind_mph: number;
		wind_kph: number;
		wind_degree: number;
		wind_dir: string;
		pressure_mb: number;
		pressure_in: number;
		precip_mm: number;
		precip_in: number;
		humidity: number;
		cloud: number;
		feelslike_c: number;
		feelslike_f: number;
		vis_km: number;
		vis_miles: number;
		uv: number;
		gust_mph: number;
		gust_kph: number;
	};
	forecast: {
		forecastday: {
			0: {
				astro: {
					sunrise: string;
					sunset: string;
					moonrise: string;
					moonset: string;
					moon_phase: string;
				};
				date: string;
			};
		};
	};
}

const apiKey = "5ea97e97d61e4bdb94f10159232006";

async function getData() {
	const res = await fetch(
		`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=-23.95407,-46.327&days=8&lang=pt`
		// `http://api.weatherapi.com/v1/forecast.json?key=5ea97e97d61e4bdb94f10159232006&&q=-23.95407,-46.327&days=8&lang=pt`

	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default function Home() {
	const [data, setData] = useState<DataProps>();

	useEffect(() => {
		getData().then(setData);
	}, []);

	console.log(data);

	return (
		<MuiProvider>
			<AppBar sx={{ }} >
				<Toolbar>
					<IconButton>
						<MenuIcon/>
					</IconButton>

				</Toolbar>
			</AppBar>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<City data={data} />
			</Box>
		</MuiProvider>
	);
}
