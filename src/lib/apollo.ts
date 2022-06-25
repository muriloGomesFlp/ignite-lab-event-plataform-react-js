import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-us-west-2.graphcms.com/v2/cl4rn60nr1bue01z6bikc8dlf/master',
    cache: new InMemoryCache() //usa o cahe em memoria, mas pode ser usado no localStorage, localSession, redis
})