import { Slide } from "@mui/material";
import LocationCard from "pages/locations/ui/location-card";
import { FC } from "react";
import { TransitionGroup } from "react-transition-group";
import { GetLocationsQueryResult } from "shared/api/locations.generated";
import { StyledGridAutoFill } from "shared/ui/styled";

type Props = Pick<GetLocationsQueryResult, "data">;

const DisplayLocations: FC<Props> = ({ data }) => {
  return (
    <TransitionGroup>
      <StyledGridAutoFill>
        {data?.locations?.results?.map((item, index) => {
          if (!item?.id) {
            return null;
          }

          return (
            <Slide
              direction="up"
              appear={true}
              in={true}
              timeout={index * 108}
              mountOnEnter
              unmountOnExit
              key={item?.id}
            >
              <LocationCard {...item} />
            </Slide>
          );
        })}
      </StyledGridAutoFill>
    </TransitionGroup>
  );
};

export default DisplayLocations;
