'use strict';

import { DoneFuncWithErrOrRes, FastifyPluginOptions } from 'fastify';
import { FastifyInstance } from 'fastify/types/instance';

const fp = require('fastify-plugin');
const fs = require('node:fs');
const path = require('path');
let appDir = path.resolve(path.dirname(__dirname), '../');
appDir = path.resolve(appDir, 'public');

function ensureDirectoryExistence(filePath: String[] = []) {
    filePath.reduce((pre: string, i) => {
        pre += i;
        let folder = path.resolve(appDir, pre);
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }
        return i + '/';
    }, '');
}

module.exports = fp(async function (
    fastify: FastifyInstance,
    opts: FastifyPluginOptions,
    done: () => void,
) {
    fastify.decorate(
        'upload',
        async function (
            file: { name: string; data: string },
            path_name: string = '',
        ): Promise<boolean> {
            try {
                if (!path_name) {
                    path_name =
                        'uploads/files/' +
                        parseInt((Math.random() * 100000).toString()) +
                        file.name;
                    ensureDirectoryExistence(['uploads', 'files']);
                } else {
                    let paths = path
                        .dirname(path.resolve(appDir, path_name))
                        ?.split(appDir)[1]
                        ?.split('\\');
                    paths?.shift();
                    ensureDirectoryExistence(paths);
                }
                path_name = path_name.replace(/^\/|\/$/g, '') + '/';
                path_name = path.resolve(appDir, path_name);
                await fs.writeFileSync(path_name, file.data);
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        },
    );
    done();
});

declare module 'fastify' {
    export interface FastifyInstance {
        upload(
            file: { name: string; data: string },
            path_name: string,
        ): Promise<boolean>;
    }
}
