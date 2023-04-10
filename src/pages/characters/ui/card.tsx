import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import { CharacterFieldsFragment } from "shared/api/fragments.generated";
import { colorByStatus } from "shared/constants";
import { StyledCard } from "shared/ui/styled";

type Props = CharacterFieldsFragment;

const CharacterCard = forwardRef<any, Props>(
  ({ image, status, id, name, species, gender }, ref) => {
    const navigate = useNavigate();

    return (
      <StyledCard ref={ref}>
        <CardActionArea
          onClick={() => navigate(`/characters/${id}`)}
          sx={{ flexGrow: 1 }}
        >
          {image && (
            <CardMedia
              component="img"
              sx={{
                height: 200,
                objectPosition: "50% 10%",
              }}
              image={image}
              alt={name || ""}
            />
          )}
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              position={"relative"}
              maxWidth={"90%"}
            >
              {name}
              <StatusDot
                {...{
                  statusColor:
                    colorByStatus[status?.toLocaleLowerCase() as string],
                }}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Species: {species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gender: {gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Status: {status}
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    );
  }
);

export default CharacterCard;

const StatusDot = styled("span")<{ statusColor: string }>(
  ({ statusColor }) => ({
    width: "8px",
    height: "8px",
    backgroundColor: statusColor,
    color: statusColor,
    "&::after": {
      boxShadow: `0 0 0 2px ${statusColor}`,
      backgroundColor: statusColor,
      color: statusColor,
      position: "absolute",
      top: "12px",
      right: "0",
      width: "8px",
      height: "8px",
      zIndex: 10,
      borderRadius: "50%",
      border: "1px solid " + statusColor,
      content: '""',
    },
  })
);
