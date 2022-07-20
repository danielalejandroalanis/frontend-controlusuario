// Proxy for API calls
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        ["/users/create"],
        createProxyMiddleware({
          target: "http://localhost:3333",
          changeOrigin: true,
        })
      );
      app.use(
        ["/users/list"],
        createProxyMiddleware({
          target: "http://localhost:3333",
          changeOrigin: true,
        })
      );
}