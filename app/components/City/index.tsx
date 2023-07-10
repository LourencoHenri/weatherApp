import { Box, Typography, Card, Grid, Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactNode, useEffect, useState } from "react";

import DataCard from "../DataCard";
import ForecastCard from "../ForecastCard";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterIcon from "@mui/icons-material/Water";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompressIcon from "@mui/icons-material/Compress";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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
		pressure_mb: number;
		pressure_in: number;
		precip_mm: number;
		precip_in: number;
		humidity: number;
		feelslike_c: number;
		feelslike_f: number;
		vis_km: number;
		uv: number;
	};
	forecast: {
		forecastday: {
			0: {
				date: string;
				day: {
					maxtemp_c: number;
					mintemp_c: number;
					condition: {
						icon: ReactNode;
					};
					daily_chance_of_rain: string;
				};
			};
			1: {
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

	const isLoading = !data;

	const CityGrid = () => {
		return (
			<Grid container spacing={2} sx={{}}>
				{!isLoading ? (
					<>
						<Grid item xs={6}>
							<DataCard
								title="Sensação"
								icon={<ThermostatIcon sx={{ fontSize: 14 }} />}
							>
								<Typography
									variant="subtitle1"
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

						<Grid item xs={6}>
							<DataCard
								title="Precipitação"
								icon={<WaterDropIcon sx={{ fontSize: 14 }} />}
							>
								<Typography
									variant="subtitle1"
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

						<Grid item xs={6}>
							<DataCard title="Vento" icon={<AirIcon sx={{ fontSize: 14 }} />}>
								<Typography
									variant="subtitle1"
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

						<Grid item xs={6}>
							<DataCard
								title="Umidade"
								icon={<WaterIcon sx={{ fontSize: 14 }} />}
							>
								<Typography
									variant="subtitle1"
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

						<Grid item xs={6}>
							<DataCard
								title="Chuva"
								icon={<ThunderstormIcon sx={{ fontSize: 14 }} />}
								s
							>
								<Typography
									variant="subtitle1"
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										alignContent: "center",
										textAlign: "center",
										height: "100%",
									}}
								>
									{data?.forecast.forecastday[0].day.daily_chance_of_rain}%
								</Typography>
							</DataCard>
						</Grid>

						<Grid item xs={6}>
							<DataCard
								title="Índice UV"
								icon={<WbSunnyIcon sx={{ fontSize: 14 }} />}
							>
								<Typography
									variant="subtitle1"
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

						<Grid item xs={6}>
							<DataCard
								title="Visibilidade"
								icon={<VisibilityIcon sx={{ fontSize: 14 }} />}
							>
								<Typography
									variant="subtitle1"
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

						<Grid item xs={6}>
							<DataCard
								title="Pressão"
								icon={<CompressIcon sx={{ fontSize: 14 }} />}
							>
								<Typography
									variant="subtitle1"
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										alignContent: "center",
										textAlign: "center",
										height: "100%",
									}}
								>
									{data?.current.pressure_mb.toLocaleString()}hPa
								</Typography>
							</DataCard>
						</Grid>
					</>
				) : (
					<>
						<Grid item xs={6}>
							<Skeleton
								variant="rectangular"
								height={102}
								width={119}
								sx={{ borderRadius: "16px" }}
							/>
						</Grid>

						<Grid item xs={6}>
							<Skeleton
								variant="rectangular"
								height={102}
								width={119}
								sx={{ borderRadius: "16px" }}
							/>
						</Grid>

						<Grid item xs={6}>
							<Skeleton
								variant="rectangular"
								height={102}
								width={119}
								sx={{ borderRadius: "16px" }}
							/>
						</Grid>

						<Grid item xs={6}>
							<Skeleton
								variant="rectangular"
								height={102}
								width={119}
								sx={{ borderRadius: "16px" }}
							/>
						</Grid>

						<Grid item xs={6}>
							<Skeleton
								variant="rectangular"
								height={102}
								width={119}
								sx={{ borderRadius: "16px" }}
							/>
						</Grid>

						<Grid item xs={6}>
							<Skeleton
								variant="rectangular"
								height={102}
								width={119}
								sx={{ borderRadius: "16px" }}
							/>
						</Grid>

						<Grid item xs={6}>
							<Skeleton
								variant="rectangular"
								height={102}
								width={119}
								sx={{ borderRadius: "16px" }}
							/>
						</Grid>

						<Grid item xs={6}>
							<Skeleton
								variant="rectangular"
								height={102}
								width={119}
								sx={{ borderRadius: "16px" }}
							/>
						</Grid>
					</>
				)}
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
					maxWidth: "700px",
					gap: "2rem",
				}}
				elevation={20}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "60%",
						gap: "3rem",
					}}
				>
					{!isLoading ? (
						<>
							<Box sx={{}}>
								<Typography variant="h4">{data?.location.name}</Typography>
								<Typography variant="subtitle2" sx={{ color: grey[500] }}>
									{data?.location.region}, {`${""}`} {data?.location.country}
								</Typography>
								<Typography
									variant="h1"
									sx={{
										fontWeight: "1020",
										fontSize: "8rem",
									}}
								>
									{data?.current.temp_c?.toFixed(0)}º
								</Typography>
								<Typography variant="subtitle1" sx={{ mt: "-1rem" }}>
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
										<Typography variant="subtitle1">
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
										<Typography variant="subtitle1">
											{data?.forecast.forecastday[0].day.mintemp_c?.toFixed(0)}º
										</Typography>
									</Box>
								</Box>
							</Box>
						</>
					) : (
						<>
							<Box sx={{}}>
								<Skeleton
									variant="rectangular"
									width={362.4}
									height={269.337}
									sx={{ borderRadius: "16px" }}
								/>
							</Box>
						</>
					)}

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

				<Box
					sx={{
						width: "40%",
						display: "flex",
						alignItems: "center",
					}}
				>
					<CityGrid />
				</Box>
			</Card>
		</>
	);
}
