import * as Types from "../../types";

import { gql } from "@apollo/client";
import {
  CharacterFieldsFragmentDoc,
  CharacterExtraFieldsFragmentDoc,
  LocationFieldsFragmentDoc,
  ResidentFieldsFragmentDoc,
} from "./fragments.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type CharactersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type CharactersQuery = {
  __typename?: "Query";
  characters?: {
    __typename?: "Characters";
    results?: Array<{
      __typename?: "Character";
      created?: string | null;
      species?: string | null;
      id?: string | null;
      image?: string | null;
      gender?: string | null;
      name?: string | null;
      status?: string | null;
    } | null> | null;
  } | null;
};

export type GetCharacterItemQueryVariables = Types.Exact<{
  characterId: Types.Scalars["ID"];
}>;

export type GetCharacterItemQuery = {
  __typename?: "Query";
  character?: {
    __typename?: "Character";
    created?: string | null;
    species?: string | null;
    id?: string | null;
    image?: string | null;
    gender?: string | null;
    name?: string | null;
    status?: string | null;
    origin?: {
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
    } | null;
  } | null;
};

export const CharactersDocument = gql`
  query Characters {
    characters {
      results {
        ...CharacterFields
      }
    }
  }
  ${CharacterFieldsFragmentDoc}
`;

/**
 * __useCharactersQuery__
 *
 * To run a query within a React component, call `useCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CharactersQuery,
    CharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CharactersQuery, CharactersQueryVariables>(
    CharactersDocument,
    options
  );
}
export function useCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CharactersQuery,
    CharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CharactersQuery, CharactersQueryVariables>(
    CharactersDocument,
    options
  );
}
export type CharactersQueryHookResult = ReturnType<typeof useCharactersQuery>;
export type CharactersLazyQueryHookResult = ReturnType<
  typeof useCharactersLazyQuery
>;
export type CharactersQueryResult = Apollo.QueryResult<
  CharactersQuery,
  CharactersQueryVariables
>;
export const GetCharacterItemDocument = gql`
  query GetCharacterItem($characterId: ID!) {
    character(id: $characterId) {
      ...CharacterExtraFields
    }
  }
  ${CharacterExtraFieldsFragmentDoc}
  ${CharacterFieldsFragmentDoc}
  ${LocationFieldsFragmentDoc}
  ${ResidentFieldsFragmentDoc}
`;

/**
 * __useGetCharacterItemQuery__
 *
 * To run a query within a React component, call `useGetCharacterItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterItemQuery({
 *   variables: {
 *      characterId: // value for 'characterId'
 *   },
 * });
 */
export function useGetCharacterItemQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCharacterItemQuery,
    GetCharacterItemQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCharacterItemQuery, GetCharacterItemQueryVariables>(
    GetCharacterItemDocument,
    options
  );
}
export function useGetCharacterItemLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharacterItemQuery,
    GetCharacterItemQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCharacterItemQuery,
    GetCharacterItemQueryVariables
  >(GetCharacterItemDocument, options);
}
export type GetCharacterItemQueryHookResult = ReturnType<
  typeof useGetCharacterItemQuery
>;
export type GetCharacterItemLazyQueryHookResult = ReturnType<
  typeof useGetCharacterItemLazyQuery
>;
export type GetCharacterItemQueryResult = Apollo.QueryResult<
  GetCharacterItemQuery,
  GetCharacterItemQueryVariables
>;
