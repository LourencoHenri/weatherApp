"use client";

import {
	Box,
	Typography,
	Card,
	CardContent,
	Grid,
	AppBar,
	Toolbar,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuIcon from "@mui/icons-material/Menu";
import MuiProvider from "./providers";
import City from "./components/City/index";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import theme from "../app/config/theme";

import logo from "../app/assets/logo.svg";
import Image from "next/image";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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

export default function Home() {
	const availableCities = [
		"Hong Kong",
		"Bangkok",
		"London",
		"Paris",
		"Dubai",
		"New York",
		"Istanbul",
		"Tokyo",
		"Antalya",
		"Taipei",
		"Prague",
		"Miami",
		"Amsterdam",
		"Seoul",
		"Barcelona",
		"Madrid",
		"Milan",
		"Vienna",
		"Dublin",
		"Moscow",
		"Vancouver",
		"Sydney",
		"Lisbon",
		"Munich",
		"Budapest",
		"Frankfurt",
		"Buenos Aires",
		"Santiago",
		"Rio de Janeiro",
		"São Paulo",
		"Belo Horizonte",
		"Rio Branco",
		"Maceió",
		"Macapá",
		"Manaus",
		"Salvador",
		"Fortaleza",
		"Brasília",
		"Vitória",
		"Goiânia",
		"São Luís",
		"Cuiabá",
		"Campo Grande",
		"Belém",
		"João Pessoa",
		"Curitiba",
		"Recife",
		"Teresina",
		"Rio de Janeiro",
		"Natal",
		"Porto Alegre",
		"Porto Velho",
		"Boa Vista",
		"Florianópolis",
		"Aracaju",
		"Palmas",
	];

	const [currentCity, setCurrentCity] = useState("Santos");

	const [cities, setCities] = useState(["Santos"]);

	const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
		setCurrentCity(newValue);
	};

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleAddCity = (city: any) => {
		console.log("Adicionar cidade");
		setAnchorEl(null);

		setCities([...cities, city]);
	};

	return (
		<MuiProvider>
			<AppBar
				sx={{
					backgroundColor: theme.palette.background.default,
					opacity: 0.97,
				}}
			>
				<Toolbar
					sx={{
						display: "flex",

						justifyContent: "space-between",
						a: {
							color: "red",
						},
					}}
				>
					<Box>
						<Image src={logo} alt="" width={112} height={48} />
					</Box>
					<Box
						sx={{
							width: "50rem",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "2rem",
						}}
					>
						<Tabs value={currentCity} onChange={handleTabChange} centered>
							{cities.map((a) => (
								<Tab key={a} value={a} label={a} sx={{}} />
							))}
						</Tabs>
						<IconButton
							onClick={handleClick}
							aria-label="more"
							id="long-button"
						>
							<AddCircleOutlineIcon />

							<Menu
								id="long-menu"
								MenuListProps={{
									"aria-labelledby": "long-button",
								}}
								anchorEl={anchorEl}
								open={open}
								onClose={() => setAnchorEl(null)}
							>
								{availableCities.map((city) => (
									<MenuItem key={city} onClick={() => handleAddCity(city)}>
										{city}
									</MenuItem>
								))}
							</Menu>
						</IconButton>
					</Box>
					<IconButton>
						<MenuIcon />
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
				{cities.map((city) => (
					<City key={city} city={city} />
				))}
			</Box>
		</MuiProvider>
	);
}
