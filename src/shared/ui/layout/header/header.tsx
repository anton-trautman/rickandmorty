import { Box, Container, Grid, Toolbar } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import logo from "shared/assets/rick-and-morty-logo.png";
import Navigation from "shared/ui/layout/header/navigation";
import ThemeSwitcher from "shared/ui/layout/header/theme-switcher";

function Header() {
  return (
    <MuiAppBar position="sticky" color={"default"}>
      <Toolbar disableGutters={true}>
        <Container
          maxWidth={"lg"}
          sx={{
            p: 3,
          }}
        >
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
              }}
            >
              <img
                src={logo}
                alt={"logo"}
                height={"50px"}
                style={{
                  margin: "auto 0",
                }}
              />
            </Grid>

            <Grid item xs={"auto"}>
              <Box sx={{ flexGrow: 1 }}>
                <Navigation />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <ThemeSwitcher />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
}

export default Header;
