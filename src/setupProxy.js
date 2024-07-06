const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_BASE_URL}`, //타겟이 되는 api url
      changeOrigin: true, // 서버 구성에 따른 호스트 헤더 변경 여부 설정
      pathRewrite: {
        '^/proxy': '',
      },
    }),
  );
  app.use(
    '/admin',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_BASE_URL}`, //타겟이 되는 api url
      changeOrigin: true, // 서버 구성에 따른 호스트 헤더 변경 여부 설정
      pathRewrite: {
        '^/admin': '/api/admin',
      },
    }),
  );
  app.use(
    '/user',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_BASE_URL}`, //타겟이 되는 api url
      changeOrigin: true, // 서버 구성에 따른 호스트 헤더 변경 여부 설정
      pathRewrite: {
        '^/user': '/api',
      },
    }),
  );
};
