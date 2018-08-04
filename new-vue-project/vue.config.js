module.exports = {
    devServer: {
      proxy: {
        "/carrots-admin-ajax/": {
            "target": "http://dev.admin.carrots.ptteng.com/",
            "secure": false,
            "pathRewrite": {
                  "^/carrots-admin-ajax/": ""
                 },
           "changeOrigin": true,
           "logLevel": "debug"
         }
      }
    },
    // parallel:true,
  
  };
  