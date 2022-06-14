import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconProps } from "@mui/material";

export const BasicPage = ({
  title,
  icon,
}: {
  title: string;
  icon: SvgIconProps;
}) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </Box>
    </Container>
  );
};
