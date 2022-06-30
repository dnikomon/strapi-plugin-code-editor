"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    index(ctx) {
        ctx.body = strapi
            .plugin('code-editor')
            .service('myService')
            .getWelcomeMessage();
    },
});
