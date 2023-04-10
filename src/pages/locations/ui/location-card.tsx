import {
  Avatar,
  AvatarGroup,
  Box,
  CardContent,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import {
  LocationExtraFieldsFragment,
  LocationFieldsFragment,
} from "shared/api/fragments.generated";
import ResidentAvatarsBlock from "shared/ui/resident-avatars-block";
import { StyledCard } from "shared/ui/styled";

type Props = LocationExtraFieldsFragment;

const LocationCard = forwardRef<any, Props>(
  ({ id, created, residents, name, type, dimension }, ref) => {
    return (
      <StyledCard variant={"outlined"} ref={ref}>
        <CardContent>
          <Box pb={2}>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
          </Box>
          <Typography variant={"caption"} component={"div"}>
            Residents:
          </Typography>
          {residents?.length ? (
            <ResidentAvatarsBlock residents={residents} />
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
        </CardContent>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={<Typography>Dimension: {dimension}</Typography>}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Type: {type}
                </Typography>
              </>
            }
          />
        </ListItem>
      </StyledCard>
    );
  }
);

export default LocationCard;
