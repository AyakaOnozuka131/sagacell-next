import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'sagacell',
    apiKey: process.env.API_KEY,
});