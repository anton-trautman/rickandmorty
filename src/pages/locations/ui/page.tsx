import DisplayLocations from "pages/locations/ui/display-locations";
import { useGetLocationsQuery } from "shared/api/locations.generated";
import ErrorScreen from "shared/ui/error-screen";

export default function LocationsPage() {
  const { data, error, loading } = useGetLocationsQuery();

  if (error) {
    return <ErrorScreen {...error} />;
  }

  if (loading && !data?.locations?.results?.length) {
    return <>loading...</>;
  }

  return (
    <>
      <DisplayLocations {...{ data }} />
    </>
  );
}
