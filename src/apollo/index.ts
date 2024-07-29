import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import createUploadLink from "./upload"

const cache = new InMemoryCache()

const uploadLink = createUploadLink({
    uri: 'https://linkrides.uz/graphql/'
});

const httpLink = ApolloLink.from([uploadLink as any])

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

export {
    apolloProvider,
    apolloClient
}