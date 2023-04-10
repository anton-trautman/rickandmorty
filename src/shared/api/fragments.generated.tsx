import * as Types from "../../types";

import { gql } from "@apollo/client";
export type CharacterFieldsFragment = {
  __typename?: "Character";
  created?: string | null;
  species?: string | null;
  id?: string | null;
  image?: string | null;
  gender?: string | null;
  name?: string | null;
  status?: string | null;
};

export type LocationFieldsFragment = {
  __typename?: "Location";
  name?: string | null;
  created?: string | null;
  dimension?: string | null;
  id?: string | null;
  type?: string | null;
};

export type LocationExtraFieldsFragment = {
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
};

export type EpisodeFieldsFragment = {
  __typename?: "Episode";
  id?: string | null;
  episode?: string | null;
  name?: string | null;
};

export type ResidentFieldsFragment = {
  __typename?: "Character";
  id?: string | null;
  status?: string | null;
  name?: string | null;
  image?: string | null;
};

export type CharacterExtraFieldsFragment = {
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
};

export const LocationFieldsFragmentDoc = gql`
  fragment LocationFields on Location {
    name
    created
    dimension
    id
    type
  }
`;
export const ResidentFieldsFragmentDoc = gql`
  fragment ResidentFields on Character {
    id
    status
    name
    image
  }
`;
export const LocationExtraFieldsFragmentDoc = gql`
  fragment LocationExtraFields on Location {
    ...LocationFields
    residents {
      ...ResidentFields
    }
  }
`;
export const EpisodeFieldsFragmentDoc = gql`
  fragment EpisodeFields on Episode {
    id
    episode
    name
  }
`;
export const CharacterFieldsFragmentDoc = gql`
  fragment CharacterFields on Character {
    created
    species
    id
    image
    gender
    name
    status
  }
`;
export const CharacterExtraFieldsFragmentDoc = gql`
  fragment CharacterExtraFields on Character {
    ...CharacterFields
    origin {
      ...LocationFields
      residents {
        ...ResidentFields
      }
    }
  }
`;
