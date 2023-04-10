import CharacterItem from "pages/character/ui/character-item";
import { useParams } from "react-router-dom";
import { useGetCharacterItemQuery } from "shared/api/characters.generated";

import ErrorScreen from "shared/ui/error-screen";

const CharacterItemPage = () => {
  const { characterId } = useParams<{ characterId: string }>();

  const { data, loading, error } = useGetCharacterItemQuery({
    variables: {
      characterId: characterId as string,
    },

    skip: !characterId,
  });

  if (error) {
    return <ErrorScreen {...error} />;
  }

  if (loading) {
    return <>loading...</>;
  }

  return <CharacterItem {...data?.character} />;
};

export default CharacterItemPage;
