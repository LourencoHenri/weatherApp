import {
	Box,
	Typography,
	Card,
	CardContent,
	Grid,
	Divider,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";

import DataCard from "../DataCard";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterIcon from "@mui/icons-material/Water";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompressIcon from "@mui/icons-material/Compress";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import Image from "next/image";

import Skeleton from "@mui/material/Skeleton";

import { indigo, grey } from "@mui/material/colors";
import ForecastCard from "../ForecastCard";

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
				day: {
					maxtemp_c: number;
					mintemp_c: number;
					condition: {
						icon: ReactNode;
					};
				};
			};
			1: {
				astro: {
					sunrise: string;
					sunset: string;
					moonrise: string;
					moonset: string;
					moon_phase: string;
				};
				date: string;
				day: {
					maxtemp_c: number;
					mintemp_c: number;
					condition: {
						icon: ReactNode;
					};
				};
			};
			2: {
				astro: {
					sunrise: string;
					sunset: string;
					moonrise: string;
					moonset: string;
					moon_phase: string;
				};
				date: string;
				day: {
					maxtemp_c: number;
					mintemp_c: number;
					condition: {
						icon: ReactNode;
					};
				};
			};
			3: {
				astro: {
					sunrise: string;
					sunset: string;
					moonrise: string;
					moonset: string;
					moon_phase: string;
				};
				date: string;
				day: {
					maxtemp_c: number;
					mintemp_c: number;
					condition: {
						icon: ReactNode;
					};
				};
			};
			4: {
				astro: {
					sunrise: string;
					sunset: string;
					moonrise: string;
					moonset: string;
					moon_phase: string;
				};
				date: string;
				day: {
					maxtemp_c: number;
					mintemp_c: number;
					condition: {
						icon: ReactNode;
					};
				};
			};
			5: {
				astro: {
					sunrise: string;
					sunset: string;
					moonrise: string;
					moonset: string;
					moon_phase: string;
				};
				date: string;
				day: {
					maxtemp_c: number;
					mintemp_c: number;
					condition: {
						icon: ReactNode;
					};
				};
			};
			6: {
				astro: {
					sunrise: string;
					sunset: string;
					moonrise: string;
					moonset: string;
					moon_phase: string;
				};
				date: string;
				day: {
					maxtemp_c: number;
					mintemp_c: number;
					condition: {
						icon: ReactNode;
					};
				};
			};
			7: {
				astro: {
					sunrise: string;
					sunset: string;
					moonrise: string;
					moonset: string;
					moon_phase: string;
				};
				date: string;
				day: {
					maxtemp_c: number;
					mintemp_c: number;
					condition: {
						icon: ReactNode;
					};
				};
			};
		};
	};
}

const apiKey = "5ea97e97d61e4bdb94f10159232006";

async function getData(city: any) {
	const res = await fetch(
		`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=8&lang=pt`
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default function City({ city }: any) {
	const [data, setData] = useState<DataProps>();

	useEffect(() => {
		getData(city).then(setData);
	}, []);

	const [currentCity, setCurrentCity] = useState("Santos");

	const [cities, setCities] = useState(["Santos"]);

	const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
		setCurrentCity(newValue);
	};

	const isLoading = !data;

	const emptyArray = [...Array(10)].map((_, index) => {
		return {
			valor: index + 1,
		};
	});

	const CityGrid = () => {
		return (
			<Grid container spacing={2}>
				<Grid item xs={6} sx={{}}>
					<DataCard
						title="Sensação"
						icon={<ThermostatIcon sx={{ fontSize: 16 }} />}
					>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
								textAlign: "center",
								height: "100%",
							}}
						>
							{data?.current.feelslike_c?.toFixed(0)}º
						</Typography>
					</DataCard>
				</Grid>

				<Grid item xs={6} sx={{}}>
					<DataCard
						title="Precipitação"
						icon={<WaterDropIcon sx={{ fontSize: 16 }} />}
					>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
								textAlign: "center",
								height: "100%",
							}}
						>
							{data?.current.precip_mm}mm
						</Typography>
					</DataCard>
				</Grid>

				<Grid item xs={6} sx={{}}>
					<DataCard title="Vento" icon={<AirIcon sx={{ fontSize: 16 }} />}>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
								textAlign: "center",
								height: "100%",
							}}
						>
							{data?.current.wind_kph}km/h
						</Typography>
					</DataCard>
				</Grid>

				<Grid item xs={6} sx={{}}>
					<DataCard title="Umidade" icon={<WaterIcon sx={{ fontSize: 16 }} />}>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
								textAlign: "center",
								height: "100%",
							}}
						>
							{data?.current.humidity}%
						</Typography>
					</DataCard>
				</Grid>

				<Grid item xs={6} sx={{}}>
					<DataCard
						title="Nascer do sol"
						icon={<WbTwilightIcon sx={{ fontSize: 16 }} />}
					>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
								textAlign: "center",
								height: "100%",
							}}
						>
							{data?.forecast.forecastday[0].astro.sunset}
						</Typography>
					</DataCard>
				</Grid>

				<Grid item xs={6} sx={{}}>
					<DataCard
						title="Índice UV"
						icon={<WbSunnyIcon sx={{ fontSize: 16 }} />}
					>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
								textAlign: "center",
								height: "100%",
							}}
						>
							{data?.current.uv}
						</Typography>
					</DataCard>
				</Grid>

				<Grid item xs={6} sx={{}}>
					<DataCard
						title="Visibilidade"
						icon={<VisibilityIcon sx={{ fontSize: 16 }} />}
					>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
								textAlign: "center",
								height: "100%",
							}}
						>
							{data?.current.vis_km}km
						</Typography>
					</DataCard>
				</Grid>

				<Grid item xs={6} sx={{}}>
					<DataCard
						title="Pressão"
						icon={<CompressIcon sx={{ fontSize: 16 }} />}
					>
						<Typography
							variant="h6"
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
								textAlign: "center",
								height: "100%",
							}}
						>
							{data?.current.pressure_mb}hPa
						</Typography>
					</DataCard>
				</Grid>
			</Grid>
		);
	};

	return (
		<>
			<Card
				hidden={true}
				sx={{
					display: "flex",
					textAlign: "center",
					justifyContent: "space-between",
					marginTop: "8rem",
					padding: "2rem",
					borderRadius: 4,
				}}
				elevation={20}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "75%",
						gap: "3rem",
					}}
				>
					<Box sx={{}}>
						<Typography variant="h4">{data?.location.name}</Typography>
						<Typography variant="subtitle2" sx={{ color: grey[500] }}>
							{data?.location.region}, {`${""}`} {data?.location.country}
						</Typography>
						<Typography
							variant="h1"
							sx={{
								fontWeight: "600",
								fontSize: "8rem",
							}}
						>
							{data?.current.temp_c?.toFixed(0)}º
						</Typography>
						<Typography variant="h6" sx={{ mt: "-1rem" }}>
							{data?.current.condition.text}
						</Typography>
						<Box
							sx={{
								display: "flex",
								gap: "2rem",
								justifyContent: "center",
								mt: "1rem",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "0.25rem",
								}}
							>
								<Typography variant="h6">
									{data?.forecast.forecastday[0].day.maxtemp_c?.toFixed(0)}º
								</Typography>
								<ArrowUpwardIcon sx={{ fontSize: "1.25rem" }} />
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									color: grey[500],
									gap: "0.25rem",
								}}
							>
								<ArrowDownwardIcon sx={{ fontSize: "1.25rem" }} />
								<Typography variant="h6">
									{data?.forecast.forecastday[0].day.mintemp_c?.toFixed(0)}º
								</Typography>
							</Box>
						</Box>
					</Box>

					<Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
						<ForecastCard
							date={data?.forecast.forecastday[1]?.date}
							maxTemp={data?.forecast.forecastday[1]?.day.maxtemp_c}
							minTemp={data?.forecast.forecastday[1]?.day.mintemp_c}
							icon={data?.forecast.forecastday[1]?.day.condition.icon}
							isLoading={isLoading}
						/>
						<ForecastCard
							date={data?.forecast.forecastday[2]?.date}
							maxTemp={data?.forecast.forecastday[2]?.day.maxtemp_c}
							minTemp={data?.forecast.forecastday[2]?.day.mintemp_c}
							icon={data?.forecast.forecastday[2]?.day.condition.icon}
							isLoading={isLoading}
						/>
					</Box>
				</Box>

				<Box sx={{ width: "25%" }}>
					<CityGrid />
				</Box>
			</Card>
		</>
	);
}
