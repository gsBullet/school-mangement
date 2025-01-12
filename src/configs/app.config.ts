import { env } from 'process';
import { anyObject } from '../modules/common_types/object';

const protocol = env.SERVER_PROTOCOL || 'http';
// const host = env.SERVER_HOST || '127.0.0.1';
const host = env.SERVER_HOST || '0.0.0.0';
const port = env.SERVER_PORT || 5002;
const server_url = `${protocol}://${host}:${port}`;

export const app_config = {
    port,
    server_url,
    host,
} as anyObject;

export function config(key: string) {
    return app_config[key];
}
