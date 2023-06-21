import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

import { indigo, grey } from "@mui/material/colors";
import Brightness1Icon from "@mui/icons-material/Brightness1";

import moment from "moment";
import Image from "next/image";

export default function ForecastCard({ date, maxTemp, minTemp, icon }: any) {
	const weekDay = moment(date).format("ddd.");

	return (
		<>
			<Card sx={{ borderRadius: 4 }}>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignContent: "center",
						alignItems: "center",
						gap: "0.25rem",
					}}
				>
					<Typography>{weekDay}</Typography>
					{ icon ? <Image src={`https://${icon}`} alt="" width={64} height={64} /> : null }
					<Box sx={{ display: "flex", gap: "0.5rem" }}>
						<Typography variant="body2">{maxTemp?.toFixed(0)}º</Typography>
						<Typography variant="body2" sx={{ color: grey[500] }}>
							{minTemp?.toFixed(0)}º
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</>
	);
}
