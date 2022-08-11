import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6mnq91q0rnn01ul1cx3fpk9/master',
  cache: new InMemoryCache()
})