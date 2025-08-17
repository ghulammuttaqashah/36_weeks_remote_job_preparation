





import { Card, CardContent, Typography } from "@mui/material";

export default function MyCard() {
  return (
    <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          MUI Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple card using Material UI.
        </Typography>
      </CardContent>
    </Card>
  );
}



