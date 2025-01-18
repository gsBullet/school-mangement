import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { app_config } from './configs/app.config';
import path from 'path';

const fastify = Fastify({
    logger: true,
});

async function onFile(part: any) {
    if (part.file && part.filename) {
        const buffer = await part.toBuffer();
        part.value = {
            data: buffer,
            name: part.filename,
            ext: path.extname(part.filename),
        };
    }
}

// Registering plugins correctly with async handlers
fastify.register(fastifyCors, {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
});

fastify.register(require('@fastify/multipart'), {
    attachFieldsToBody: true,
    onFile, // Make sure this is using async/await
    limits: {
        fileSize: 6000000 * 10, // Limit file size to 60 MB
    },
});

// Start the server
fastify
    .listen({ port: app_config.port, host: app_config.host })
    .then(() => {
        console.log(
            `Server is running on http://${app_config.host}:${app_config.port}`,
        );
    })
    .catch((err) => {
        console.error(err);
    });
