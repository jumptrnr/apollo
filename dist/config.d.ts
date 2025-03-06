import { C as ClientConfig } from './shared/apollo.ffd5ee9c.js';
import 'graphql-ws';
import '@apollo/client';
import 'nuxt/app';

declare const defineApolloClient: (config: ClientConfig) => ClientConfig;

export { ClientConfig, defineApolloClient };
