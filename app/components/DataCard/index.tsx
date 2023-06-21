import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

import { indigo, grey } from "@mui/material/colors";

export default function DataCard({ title, icon, data, children }: any) {
	return (
		<>
			<Card sx={{ borderRadius: 4 }}>
				<CardContent>
					<Typography
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "0.25rem",
							justifyContent: "center",
							color: grey[500],
						}}
					>
						{icon}
						{title}
					</Typography>
					<Box sx={{ height: "5rem" }}>{children}</Box>
				</CardContent>
			</Card>
		</>
	);
}
