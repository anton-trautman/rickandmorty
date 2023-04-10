import CharacterItemPage from "pages/character";
import CharactersPage from "pages/characters";
import LocationsPage from "pages/locations";
import { RouteObject, useRoutes, Navigate } from "react-router-dom";

import { Layout } from "shared/ui/layout";

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: "/characters/:characterId",
        element: <CharacterItemPage />,
      },
      {
        path: "/characters",
        element: <CharactersPage />,
      },
      {
        path: "/locations",
        element: <LocationsPage />,
      },
      {
        path: "/",
        element: <Navigate to={"/characters"} replace={true} />,
      },
    ],
  },
];

function AppRouter() {
  const element = useRoutes(routes);

  return <>{element}</>;
}

export default AppRouter;
