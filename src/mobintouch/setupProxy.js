const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/mail/intouch/contact',
    proxy({
      target: 'https://common.mobidays.co.kr',
      changeOrigin: true,
    })
  );
};