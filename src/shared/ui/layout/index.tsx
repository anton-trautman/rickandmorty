import { Box, Container, Paper, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./header";

export const Layout = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Box sx={{ flexGrow: 1 }}>
        <Container
          maxWidth={"lg"}
          sx={{
            p: 3,
          }}
        >
          <Outlet />
        </Container>
      </Box>
      <footer>
        <Paper elevation={0}>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "flex-end",
              p: 2,
              display: "flex",
            }}
          >
            <Typography variant={"caption"}>
              all rights reserved © {new Date().getFullYear()}
            </Typography>
          </Box>
        </Paper>
      </footer>
    </Box>
  );
};
