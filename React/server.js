const express = require("express");
const app = express();
const path = require('path')
const serveIndex = require('serve-index');

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://feature.kingdee.com:2024');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Content-Type', 'text/css;text/javascript;text/html;application/json;application/x-img');
    next()
});

app.use('/', express.static(path.join(__dirname, './src/web')));
app.use('/', serveIndex(path.join(__dirname, './src/web'), {'icons': true}));

app.listen(3001, () => { // 默认为localhost（本地主机）; 端口号3001
    console.log("CustomControl Static Server is Running!")
})