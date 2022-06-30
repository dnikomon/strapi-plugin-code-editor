export default ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('code-editor')
      .service('myService')
      .getWelcomeMessage();
  },
});
