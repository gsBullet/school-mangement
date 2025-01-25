'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/admission-candidate-test-submission';
    const controllerInstance = controller(fastify);

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(`${prefix}/:id`, controllerInstance.find)
        .post(`${prefix}/store`, controllerInstance.store)
        .post(`${prefix}/written`, controllerInstance.written)
        .post(`${prefix}/written-mark`, controllerInstance.written_mark)

        // .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/result`, controllerInstance.result)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import)
        .post(`${prefix}/file-upload`, controllerInstance.file_upload);
};
