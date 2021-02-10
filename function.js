const { https } = require('firebase-functions');
const { default: next } = require('next');
const express = require('express');
const path = require('path');
var cors = require('cors')

const isDev = process.env.NODE_ENV !== 'production';
const app= express();
app.use(cors({
  origin: 'https://tecqify.com'
}));
const server = next({
  dev: isDev,
  //location of .next generated after running -> yarn build
  conf: { distDir: '.next' },
}).use(cors({
  origin: 'https://tecqify.com'
}));

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  return server.prepare().then(() => nextjsHandle(req, res));
});