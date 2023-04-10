import { Avatar, AvatarGroup, Badge, styled } from "@mui/material";
import { colorByStatus } from "shared/constants";
import { ResidentFieldsFragment } from "shared/api/fragments.generated";

function ResidentAvatarsBlock({
  residents,
}: {
  residents: (ResidentFieldsFragment | null)[];
}) {
  return (
    <AvatarGroup max={5}>
      {residents?.map((resident) => {
        const badgeColor =
          colorByStatus[
            resident?.status?.toLowerCase() as keyof typeof colorByStatus
          ] || colorByStatus.unknown;
        return (
          <StyledBadge
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
            badgeColor={badgeColor}
            key={resident?.id}
            max={10}
          >
            <Avatar src={`${resident?.image}`} alt={resident?.name || ""} />
          </StyledBadge>
        );
      })}
    </AvatarGroup>
  );
}

export default ResidentAvatarsBlock;

const StyledBadge = styled(Badge, {
  shouldForwardProp(propName: PropertyKey): boolean {
    return propName !== "badgeColor";
  },
})<{ badgeColor: string }>(({ theme, badgeColor }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: badgeColor,
    color: badgeColor,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
