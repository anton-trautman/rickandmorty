import { FC } from "react";
import { Slide } from "@mui/material";
import { CharactersQueryResult } from "shared/api/characters.generated";
import CharacterCard from "pages/characters/ui/card";
import { TransitionGroup } from "react-transition-group";
import { StyledGridAutoFill } from "shared/ui/styled";

type Props = Pick<CharactersQueryResult, "data">;

const CharactersList: FC<Props> = ({ data }) => {
  return (
    <TransitionGroup>
      <StyledGridAutoFill>
        {data?.characters?.results?.map((character, index) => (
          <Slide
            direction="up"
            appear={true}
            in={true}
            timeout={index * 108}
            mountOnEnter
            unmountOnExit
            key={character?.id}
          >
            <CharacterCard {...character} />
          </Slide>
        ))}
      </StyledGridAutoFill>
    </TransitionGroup>
  );
};

export default CharactersList;
