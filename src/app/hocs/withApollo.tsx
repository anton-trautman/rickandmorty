import { ApolloClient, ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { StrictTypedTypePolicies } from "apollo-helpers";
import { FC } from "react";

const typePolicies: StrictTypedTypePolicies = {};

/**
 * Setup cache.
 */
const cache = new InMemoryCache({ typePolicies });

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache,
});

const withApollo = <P extends object>(Component: FC<P>): FC<P> => {
  return function WithApollo(props) {
    return (
      <ApolloProvider client={client}>
        <Component {...props} />
      </ApolloProvider>
    );
  };
};

export default withApollo;
