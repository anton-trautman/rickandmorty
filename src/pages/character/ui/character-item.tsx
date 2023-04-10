import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  AvatarGroup,
  Box,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CharacterExtraFieldsFragment } from "shared/api/fragments.generated";
import BiotechIcon from "@mui/icons-material/Biotech";
import TransgenderIcon from "@mui/icons-material/Transgender";
import LanguageIcon from "@mui/icons-material/Language";
import BadgeIcon from "@mui/icons-material/Badge";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import ResidentAvatarsBlock from "shared/ui/resident-avatars-block";
function CharacterItem({
  name,
  image,
  species,
  status,
  gender,
  origin,
}: CharacterExtraFieldsFragment) {
  const [open, setOpen] = useState(false);

  const isOriginUnknown = origin?.name === "unknown";

  const handleClick = () => {
    if (isOriginUnknown) {
      return;
    }
    setOpen(!open);
  };

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={4}>
          {image && (
            <img
              src={image}
              alt={name || ""}
              style={{
                height: 500,
                objectFit: "cover",
                width: "100%",
                objectPosition: "50% 0",
              }}
            />
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="article"
            aria-labelledby="nested-list-subheader"
          >
            <ListItem>
              <ListItemIcon>
                <BadgeIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography variant={"h5"}>Name: </Typography>{" "}
                    <Typography variant="h3" ml={2}>
                      {name}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TransgenderIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant={"h5"}>Gender: {gender}</Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BiotechIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant={"h5"}>Species: {species}</Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TroubleshootIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant={"h5"}>Status: {status}</Typography>
                }
              />
            </ListItem>
            <ListItemButton onClick={handleClick} disabled={isOriginUnknown}>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant={"h5"}>Origin: {origin?.name}</Typography>
                }
              />

              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem sx={{ pl: 6 }}>
                  <ListItemText
                    primary={
                      <Typography variant={"subtitle1"}>
                        Type: {origin?.type}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{ pl: 6 }}>
                  <ListItemText
                    primary={
                      <Typography variant={"subtitle1"}>
                        Dimension: {origin?.dimension}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{ pl: 6 }}>
                  <ListItemText
                    primary={
                      <>
                        <Typography variant={"subtitle1"}>
                          Residents:
                        </Typography>
                        {origin?.residents?.length ? (
                          <ResidentAvatarsBlock
                            {...{ residents: origin.residents }}
                          />
                        ) : (
                          <Typography
                            sx={{
                              justifyContent: "flex-end",
                              display: "flex",
                            }}
                          >
                            none
                          </Typography>
                        )}
                      </>
                    }
                  />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
      </Grid>
    </>
  );
}

export default CharacterItem;
