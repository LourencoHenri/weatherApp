import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

import { indigo, grey } from "@mui/material/colors";

import Skeleton from "@mui/material/Skeleton";

export default function DataCard({
	title,
	icon,
	data,
	children,
	isLoading,
}: any) {
	return (
		<>
			<Card sx={{ borderRadius: 4 }} elevation={3}>
				<CardContent sx={{}}>
					<Typography
						variant="subtitle2"
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "0.25rem",
							justifyContent: "center",
						}}
					>
						{icon}
						{title}
					</Typography>
					<Box sx={{ paddingTop: "8px", paddingBottom: "4px" }}>{children}</Box>
				</CardContent>
			</Card>
		</>
	);
}
