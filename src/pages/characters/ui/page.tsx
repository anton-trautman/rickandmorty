import { useCharactersQuery } from "shared/api/characters.generated";
import ErrorScreen from "shared/ui/error-screen";
import CharactersList from "pages/characters/ui/characters-list";

const CharactersPage = () => {
  const { data, loading, error } = useCharactersQuery();

  if (error) {
    return <ErrorScreen {...error} />;
  }

  if (loading && !data?.characters?.results?.length) {
    return <>loading...</>;
  }

  return <CharactersList data={data} />;
};

export default CharactersPage;
