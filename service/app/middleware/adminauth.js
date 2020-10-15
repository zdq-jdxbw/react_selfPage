'use strict';

const options = () => {
  return async function adminauth(ctx, next) {
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = { body: '请先登录' };
    }
  };
};

module.exports = options;
