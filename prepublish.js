'use strict'; 
const rollup = require('ember-rollup/src/prebuild'); 
const addonPath = __dirname; 
 
rollup.preBuild(addonPath).then(() => {
  setTimeout(() => {
    console.log('active requests', process._getActiveRequests());
    console.log('handlers', process._getActiveHandles());
  }, 1000);
});