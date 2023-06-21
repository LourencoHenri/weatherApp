import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { useEffect, useState } from "react";

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

import Image from "next/image";

import { indigo, grey } from "@mui/material/colors";
import ForecastCard from "../ForecastCard";

export default function City({ data }: any) {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					align: "center",
					justifyContent: "center",
					textAlign: "center",
					alignContent: "center",
					marginTop: "10rem",
					marginBottom: "6rem",
				}}
			>
				<Typography variant="h4">{data?.location.name}</Typography>
				<Typography variant="h1" sx={{ fontWeight: "600", fontSize: "8rem", mt: "-1rem" }} >
					{data?.current.temp_c?.toFixed(0)}º
				</Typography>
				<Typography variant="h5" sx={{ mt: "-1rem" }} >{data?.current.condition.text}</Typography>
				<Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
					<Typography variant="h5">
						{data?.forecast.forecastday[0].day.maxtemp_c?.toFixed(0)}º
					</Typography>
					<Typography variant="h5" sx={{ color: grey[500] }}>
						{data?.forecast.forecastday[0].day.mintemp_c?.toFixed(0)}º
					</Typography>
				</Box>
			</Box>

			<Box sx={{ display: "flex", gap: "1rem" }}>
				<ForecastCard
					date={data?.forecast.forecastday[1].date}
					maxTemp={data?.forecast.forecastday[1].day.maxtemp_c}
					minTemp={data?.forecast.forecastday[1].day.mintemp_c}
					icon={data?.forecast.forecastday[1].day.condition.icon}
				/>
				<ForecastCard
					date={data?.forecast.forecastday[2].date}
					maxTemp={data?.forecast.forecastday[2].day.maxtemp_c}
					minTemp={data?.forecast.forecastday[2].day.mintemp_c}
					icon={data?.forecast.forecastday[2].day.condition.icon}
				/>
				<ForecastCard
					date={data?.forecast.forecastday[3].date}
					maxTemp={data?.forecast.forecastday[3].day.maxtemp_c}
					minTemp={data?.forecast.forecastday[3].day.mintemp_c}
					icon={data?.forecast.forecastday[3].day.condition.icon}
				/>
				<ForecastCard
					date={data?.forecast.forecastday[4].date}
					maxTemp={data?.forecast.forecastday[4].day.maxtemp_c}
					minTemp={data?.forecast.forecastday[4].day.mintemp_c}
					icon={data?.forecast.forecastday[4].day.condition.icon}
				/>
				<ForecastCard
					date={data?.forecast.forecastday[5].date}
					maxTemp={data?.forecast.forecastday[5].day.maxtemp_c}
					minTemp={data?.forecast.forecastday[5].day.mintemp_c}
					icon={data?.forecast.forecastday[5].day.condition.icon}
				/>
				<ForecastCard
					date={data?.forecast.forecastday[6].date}
					maxTemp={data?.forecast.forecastday[6].day.maxtemp_c}
					minTemp={data?.forecast.forecastday[6].day.mintemp_c}
					icon={data?.forecast.forecastday[6].day.condition.icon}
				/>
				<ForecastCard
					date={data?.forecast.forecastday[7].date}
					maxTemp={data?.forecast.forecastday[7].day.maxtemp_c}
					minTemp={data?.forecast.forecastday[7].day.mintemp_c}
					icon={data?.forecast.forecastday[7].day.condition.icon}
				/>
			</Box>

			<Box sx={{ width: "60%", mt: "3rem", mb: "6rem" }}>
				<Grid container spacing={3} columns={9}>
					<Grid item xs={3} sx={{}}>
						<DataCard
							title="Sensação"
							icon={<ThermostatIcon sx={{ fontSize: 16 }} />}
						>
							<Typography
								variant="h5"
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									alignContent: "center",
									textAlign: "center",
									height: "100%",
								}}
							>
								{(data?.current.feelslike_c)?.toFixed(0)}ºC
							</Typography>
						</DataCard>
					</Grid>

					<Grid item xs={3} sx={{}}>
						<DataCard
							title="Precipitação"
							icon={<WaterDropIcon sx={{ fontSize: 16 }} />}
						>
							<Typography
								variant="h5"
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

					<Grid item xs={3} sx={{}}>
						<DataCard title="Vento" icon={<AirIcon sx={{ fontSize: 16 }} />}>
							<Typography
								variant="h5"
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

					<Grid item xs={3} sx={{}}>
						<DataCard
							title="Umidade"
							icon={<WaterIcon sx={{ fontSize: 16 }} />}
						>
							<Typography
								variant="h5"
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

					<Grid item xs={3} sx={{}}>
						<DataCard
							title="Nascer do sol"
							icon={<WbTwilightIcon sx={{ fontSize: 16 }} />}
						>
							<Typography
								variant="h5"
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									alignContent: "center",
									textAlign: "center",
									height: "100%",
								}}
							>
								{data?.forecast.forecastday[0].astro.sunrise}
								{/* {data?.forecast.forecastday[0].astro.sunset} */}
							</Typography>
						</DataCard>
					</Grid>

					<Grid item xs={3} sx={{}}>
						<DataCard
							title="Índice UV"
							icon={<WbSunnyIcon sx={{ fontSize: 16 }} />}
						>
							<Typography
								variant="h5"
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

					<Grid item xs={3} sx={{}}>
						<DataCard
							title="Visibilidade"
							icon={<VisibilityIcon sx={{ fontSize: 16 }} />}
						>
							<Typography
								variant="h5"
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

					<Grid item xs={3} sx={{}}>
						<DataCard
							title="Pressão"
							icon={<CompressIcon sx={{ fontSize: 16 }} />}
						>
							<Typography
								variant="h5"
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

					<Grid item xs={3} sx={{}}>
						<DataCard
							title="Nascer da lua"
							icon={<DarkModeIcon sx={{ fontSize: 16 }} />}
						>
							<Typography
								variant="h5"
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									alignContent: "center",
									textAlign: "center",
									height: "100%",
								}}
							>
								{data?.forecast.forecastday[0].astro.moonrise}
								{/* {data?.forecast.forecastday[0].astro.moonset} */}
							</Typography>
						</DataCard>
					</Grid>

					{/* <Grid item xs={3} sx={{}}>
						<DataCard
							title="Fase da lua"
							icon={<DarkModeIcon sx={{ fontSize: 16 }} />}
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
								{data?.forecast.forecastday[0].astro.moon_phase}
							</Typography>
						</DataCard>
					</Grid> */}

				</Grid>
			</Box>
		</>
	);
}
