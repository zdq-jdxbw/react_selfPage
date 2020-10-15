'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
  router.post('/default/login', controller.default.home.login);
  router.post('/default/getInfoByKey/:id', controller.default.home.login);
};
