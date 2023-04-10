import * as Types from "../../types";

import { gql } from "@apollo/client";
import {
  LocationExtraFieldsFragmentDoc,
  LocationFieldsFragmentDoc,
  ResidentFieldsFragmentDoc,
} from "./fragments.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetLocationsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetLocationsQuery = {
  __typename?: "Query";
  locations?: {
    __typename?: "Locations";
    results?: Array<{
      __typename?: "Location";
      name?: string | null;
      created?: string | null;
      dimension?: string | null;
      id?: string | null;
      type?: string | null;
      residents: Array<{
        __typename?: "Character";
        id?: string | null;
        status?: string | null;
        name?: string | null;
        image?: string | null;
      } | null>;
    } | null> | null;
  } | null;
};

export const GetLocationsDocument = gql`
  query GetLocations {
    locations {
      results {
        ...LocationExtraFields
      }
    }
  }
  ${LocationExtraFieldsFragmentDoc}
  ${LocationFieldsFragmentDoc}
  ${ResidentFieldsFragmentDoc}
`;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLocationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options
  );
}
export function useGetLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options
  );
}
export type GetLocationsQueryHookResult = ReturnType<
  typeof useGetLocationsQuery
>;
export type GetLocationsLazyQueryHookResult = ReturnType<
  typeof useGetLocationsLazyQuery
>;
export type GetLocationsQueryResult = Apollo.QueryResult<
  GetLocationsQuery,
  GetLocationsQueryVariables
>;
