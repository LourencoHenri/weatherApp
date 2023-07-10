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
	Button,
} from "@mui/material";
import { useEffect, useState, useMemo, createContext, useContext } from "react";

import City from "./components/City/index";

import logo from "../app/assets/logo.svg";
import whiteLogo from "../app/assets/whiteLogo.svg";
import Image from "next/image";

import { ColorModeContext } from "./providers";

import Brightness4Icon from "@mui/icons-material/Brightness4";

import Brightness7Icon from "@mui/icons-material/Brightness7";

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

interface TabPanelProps {
	children?: React.ReactNode;
	index: string;
	value: string;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{value === index && <>{children}</>}
		</Box>
	);
}

function a11yProps(index: string) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
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

	const [selectedCities, setSelectedCities] = useState(["Santos"]);

	const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
		setCurrentCity(newValue);
	};

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleAddCity = (city: any) => {
		setAnchorEl(null);

		setSelectedCities([...selectedCities, city]);
	};

	const handleCloseModal = () => {
		setAnchorEl(null);
	};

	const { toggleColorMode, colorMode } = useContext(ColorModeContext);

	return (
		<>
			<AppBar
				sx={{
					backgroundColor: "background.default",
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
						{colorMode === "light" ? (
							<Image src={logo} alt="" width={112} height={48} priority />
						) : (
							<Image src={whiteLogo} alt="" width={112} height={48} priority />
						)}
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
						<Menu
							id="long-menu"
							MenuListProps={{
								"aria-labelledby": "long-button",
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleCloseModal}
							PaperProps={{
								style: {
									maxHeight: 48 * 4.5,
									width: "20ch",
								},
							}}
						>
							{availableCities.map((city) => (
								<MenuItem
									key={city}
									selected={city === "Pyxis"}
									onClick={() => handleAddCity(city)}
								>
									{city}
								</MenuItem>
							))}
						</Menu>
					</Box>
					<IconButton onClick={toggleColorMode}>
						{colorMode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				{selectedCities.map((city) => (
					<TabPanel key={city} index={city} value={currentCity}>
						<City key={city} city={city} />
					</TabPanel>
				))}
			</Box>
		</>
	);
}
