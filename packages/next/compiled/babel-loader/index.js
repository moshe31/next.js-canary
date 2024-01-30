module.exports=(()=>{"use strict";var e={0:e=>{const t=/^[^:]+: /;const n=e=>{if(e instanceof SyntaxError){e.name="SyntaxError";e.message=e.message.replace(t,"");e.hideStack=true}else if(e instanceof TypeError){e.name=null;e.message=e.message.replace(t,"");e.hideStack=true}return e};class LoaderError extends Error{constructor(e){super();const{name:t,message:o,codeFrame:i,hideStack:r}=n(e);this.name="BabelLoaderError";this.message=`${t?`${t}: `:""}${o}\n\n${i}\n`;this.hideStack=r;Error.captureStackTrace(this,this.constructor)}}e.exports=LoaderError},420:(e,t,n)=>{function asyncGeneratorStep(e,t,n,o,i,r,a){try{var s=e[r](a);var c=s.value}catch(e){n(e);return}if(s.done){t(c)}else{Promise.resolve(c).then(o,i)}}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var r=e.apply(t,n);function _next(e){asyncGeneratorStep(r,o,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(r,o,i,_next,_throw,"throw",e)}_next(undefined)})}}const o=n(747);const i=n(87);const r=n(622);const a=n(761);const s=n(417);const c=n(327);const l=n(844);const p=n(677);const u=n(850);let d=null;const f=p(o.readFile);const b=p(o.writeFile);const h=p(a.gunzip);const y=p(a.gzip);const m=p(c);const g=function(){var e=_asyncToGenerator(function*(e,t){const n=yield f(e+(t?".gz":""));const o=t?yield h(n):n;return JSON.parse(o.toString())});return function read(t,n){return e.apply(this,arguments)}}();const w=function(){var e=_asyncToGenerator(function*(e,t,n){const o=JSON.stringify(n);const i=t?yield y(o):o;return yield b(e+(t?".gz":""),i)});return function write(t,n,o){return e.apply(this,arguments)}}();const x=function(e,t,n){const o=s.createHash("md4");const i=JSON.stringify({source:e,options:n,identifier:t});o.update(i);return o.digest("hex")+".json"};const _=function(){var e=_asyncToGenerator(function*(e,t){const{source:n,options:o={},cacheIdentifier:a,cacheDirectory:s,cacheCompression:c}=t;const l=r.join(e,x(n,a,o));try{return yield g(l,c)}catch(e){}const p=typeof s!=="string"&&e!==i.tmpdir();try{yield m(e)}catch(e){if(p){return _(i.tmpdir(),t)}throw e}const d=yield u(n,o);try{yield w(l,c,d)}catch(e){if(p){return _(i.tmpdir(),t)}throw e}return d});return function handleCache(t,n){return e.apply(this,arguments)}}();e.exports=function(){var e=_asyncToGenerator(function*(e){let t;if(typeof e.cacheDirectory==="string"){t=e.cacheDirectory}else{if(d===null){d=l({name:"babel-loader"})||i.tmpdir()}t=d}return yield _(t,e)});return function(t){return e.apply(this,arguments)}}()},826:(e,t,n)=>{function asyncGeneratorStep(e,t,n,o,i,r,a){try{var s=e[r](a);var c=s.value}catch(e){n(e);return}if(s.done){t(c)}else{Promise.resolve(c).then(o,i)}}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var r=e.apply(t,n);function _next(e){asyncGeneratorStep(r,o,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(r,o,i,_next,_throw,"throw",e)}_next(undefined)})}}let o;try{o=n(195)}catch(e){if(e.code==="MODULE_NOT_FOUND"){e.message+="\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). "+"If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'."}throw e}if(/^6\./.test(o.version)){throw new Error("\n babel-loader@8 will not work with the '@babel/core@6' bridge package. "+"If you want to use Babel 6.x, install 'babel-loader@7'.")}const{version:i}=n(38);const r=n(420);const a=n(850);const s=n(159);const c=n(434);const{isAbsolute:l}=n(622);const p=n(710);const u=n(225);function subscribe(e,t,n){if(n[e]){n[e](t)}}e.exports=makeLoader();e.exports.custom=makeLoader;function makeLoader(e){const t=e?e(o):undefined;return function(e,n){const o=this.async();loader.call(this,e,n,t).then(e=>o(null,...e),e=>o(e))}}function loader(e,t,n){return _loader.apply(this,arguments)}function _loader(){_loader=_asyncToGenerator(function*(e,t,n){const d=this.resourcePath;let f=p.getOptions(this)||{};u(c,f,{name:"Babel loader"});if(f.customize!=null){if(typeof f.customize!=="string"){throw new Error("Customized loaders must be implemented as standalone modules.")}if(!l(f.customize)){throw new Error("Customized loaders must be passed as absolute paths, since "+"babel-loader has no way to know what they would be relative to.")}if(n){throw new Error("babel-loader's 'customize' option is not available when already "+"using a customized babel-loader wrapper.")}let e=require(f.customize);if(e.__esModule)e=e.default;if(typeof e!=="function"){throw new Error("Custom overrides must be functions.")}n=e(o)}let b;if(n&&n.customOptions){const o=yield n.customOptions.call(this,f,{source:e,map:t});b=o.custom;f=o.loader}if("forceEnv"in f){console.warn("The option `forceEnv` has been removed in favor of `envName` in Babel 7.")}if(typeof f.babelrc==="string"){console.warn("The option `babelrc` should not be set to a string anymore in the babel-loader config. "+"Please update your configuration and set `babelrc` to true or false.\n"+"If you want to specify a specific babel config file to inherit config from "+"please use the `extends` option.\nFor more information about this options see "+"https://babeljs.io/docs/core-packages/#options")}if(Object.prototype.hasOwnProperty.call(f,"sourceMap")&&!Object.prototype.hasOwnProperty.call(f,"sourceMaps")){f=Object.assign({},f,{sourceMaps:f.sourceMap});delete f.sourceMap}const h=Object.assign({},f,{filename:d,inputSourceMap:t||undefined,sourceMaps:f.sourceMaps===undefined?this.sourceMap:f.sourceMaps,sourceFileName:d});delete h.customize;delete h.cacheDirectory;delete h.cacheIdentifier;delete h.cacheCompression;delete h.metadataSubscribers;if(!o.loadPartialConfig){throw new Error(`babel-loader ^8.0.0-beta.3 requires @babel/core@7.0.0-beta.41, but `+`you appear to be using "${o.version}". Either update your `+`@babel/core version, or pin you babel-loader version to 8.0.0-beta.2`)}const y=o.loadPartialConfig(s(h,this.target));if(y){let o=y.options;if(n&&n.config){o=yield n.config.call(this,y,{source:e,map:t,customOptions:b})}if(o.sourceMaps==="inline"){o.sourceMaps=true}const{cacheDirectory:s=null,cacheIdentifier:c=JSON.stringify({options:o,"@babel/core":a.version,"@babel/loader":i}),cacheCompression:l=true,metadataSubscribers:p=[]}=f;let u;if(s){u=yield r({source:e,options:o,transform:a,cacheDirectory:s,cacheIdentifier:c,cacheCompression:l})}else{u=yield a(e,o)}if(typeof y.babelrc==="string"){this.addDependency(y.babelrc)}if(u){if(n&&n.result){u=yield n.result.call(this,u,{source:e,map:t,customOptions:b,config:y,options:o})}const{code:i,map:r,metadata:a}=u;p.forEach(e=>{subscribe(e,a,this)});return[i,r]}}return[e,t]});return _loader.apply(this,arguments)}},159:(e,t,n)=>{const o=n(195);e.exports=function injectCaller(e,t){if(!supportsCallerOption())return e;return Object.assign({},e,{caller:Object.assign({name:"babel-loader",target:t,supportsStaticESM:true,supportsDynamicImport:true,supportsTopLevelAwait:true},e.caller)})};let i=undefined;function supportsCallerOption(){if(i===undefined){try{o.loadPartialConfig({caller:undefined,babelrc:false,configFile:false});i=true}catch(e){i=false}}return i}},850:(e,t,n)=>{function asyncGeneratorStep(e,t,n,o,i,r,a){try{var s=e[r](a);var c=s.value}catch(e){n(e);return}if(s.done){t(c)}else{Promise.resolve(c).then(o,i)}}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var r=e.apply(t,n);function _next(e){asyncGeneratorStep(r,o,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(r,o,i,_next,_throw,"throw",e)}_next(undefined)})}}const o=n(195);const i=n(677);const r=n(0);const a=i(o.transform);e.exports=function(){var e=_asyncToGenerator(function*(e,t){let n;try{n=yield a(e,t)}catch(e){throw e.message&&e.codeFrame?new r(e):e}if(!n)return null;const{ast:o,code:i,map:s,metadata:c,sourceType:l}=n;if(s&&(!s.sourcesContent||!s.sourcesContent.length)){s.sourcesContent=[e]}return{ast:o,code:i,map:s,metadata:c,sourceType:l}});return function(t,n){return e.apply(this,arguments)}}();e.exports.version=o.version},677:e=>{const t=(e,t)=>(function(...n){const o=t.promiseModule;return new o((o,i)=>{if(t.multiArgs){n.push((...e)=>{if(t.errorFirst){if(e[0]){i(e)}else{e.shift();o(e)}}else{o(e)}})}else if(t.errorFirst){n.push((e,t)=>{if(e){i(e)}else{o(t)}})}else{n.push(o)}e.apply(this,n)})});e.exports=((e,n)=>{n=Object.assign({exclude:[/.+(Sync|Stream)$/],errorFirst:true,promiseModule:Promise},n);const o=typeof e;if(!(e!==null&&(o==="object"||o==="function"))){throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${e===null?"null":o}\``)}const i=e=>{const t=t=>typeof t==="string"?e===t:t.test(e);return n.include?n.include.some(t):!n.exclude.some(t)};let r;if(o==="function"){r=function(...o){return n.excludeMain?e(...o):t(e,n).apply(this,o)}}else{r=Object.create(Object.getPrototypeOf(e))}for(const o in e){const a=e[o];r[o]=typeof a==="function"&&i(o)?t(a,n):a}return r})},434:e=>{e.exports=JSON.parse('{"type":"object","properties":{"cacheDirectory":{"oneOf":[{"type":"boolean"},{"type":"string"}],"default":false},"cacheIdentifier":{"type":"string"},"cacheCompression":{"type":"boolean","default":true},"customize":{"type":"string","default":null}},"additionalProperties":true}')},38:e=>{e.exports=JSON.parse('{"name":"babel-loader","version":"8.1.0","description":"babel module loader for webpack","files":["lib"],"main":"lib/index.js","engines":{"node":">= 6.9"},"dependencies":{"find-cache-dir":"^2.1.0","loader-utils":"^1.4.0","mkdirp":"^0.5.3","pify":"^4.0.1","schema-utils":"^2.6.5"},"peerDependencies":{"@babel/core":"^7.0.0","webpack":">=2"},"devDependencies":{"@babel/cli":"^7.2.0","@babel/core":"^7.2.0","@babel/preset-env":"^7.2.0","ava":"^2.4.0","babel-eslint":"^10.0.1","babel-plugin-istanbul":"^5.1.0","babel-plugin-react-intl":"^4.1.19","cross-env":"^6.0.0","eslint":"^6.5.1","eslint-config-babel":"^9.0.0","eslint-config-prettier":"^6.3.0","eslint-plugin-flowtype":"^4.3.0","eslint-plugin-prettier":"^3.0.0","husky":"^3.0.7","lint-staged":"^9.4.1","nyc":"^14.1.1","prettier":"^1.15.3","react":"^16.0.0","react-intl":"^3.3.2","react-intl-webpack-plugin":"^0.3.0","rimraf":"^3.0.0","webpack":"^4.0.0"},"scripts":{"clean":"rimraf lib/","build":"babel src/ --out-dir lib/ --copy-files","format":"prettier --write --trailing-comma all \'src/**/*.js\' \'test/**/*.test.js\' \'test/helpers/*.js\' && prettier --write --trailing-comma es5 \'scripts/*.js\'","lint":"eslint src test","precommit":"lint-staged","prepublish":"yarn run clean && yarn run build","preversion":"yarn run test","test":"yarn run lint && cross-env BABEL_ENV=test yarn run build && yarn run test-only","test-only":"nyc ava"},"repository":{"type":"git","url":"https://github.com/babel/babel-loader.git"},"keywords":["webpack","loader","babel","es6","transpiler","module"],"author":"Luis Couto <hello@luiscouto.pt>","license":"MIT","bugs":{"url":"https://github.com/babel/babel-loader/issues"},"homepage":"https://github.com/babel/babel-loader","nyc":{"all":true,"include":["src/**/*.js"],"reporter":["text","json"],"sourceMap":false,"instrument":false},"ava":{"files":["test/**/*.test.js","!test/fixtures/**/*","!test/helpers/**/*"],"helpers":["**/helpers/**/*"],"sources":["src/**/*.js"]},"lint-staged":{"scripts/*.js":["prettier --trailing-comma es5 --write","git add"],"src/**/*.js":["prettier --trailing-comma all --write","git add"],"test/**/*.test.js":["prettier --trailing-comma all --write","git add"],"test/helpers/*.js":["prettier --trailing-comma all --write","git add"],"package.json":["node ./scripts/yarn-install.js","git add yarn.lock"]}}')},417:e=>{e.exports=require("crypto")},747:e=>{e.exports=require("fs")},710:e=>{e.exports=require("loader-utils")},195:e=>{e.exports=require("next/dist/compiled/babel/core")},844:e=>{e.exports=require("next/dist/compiled/find-cache-dir")},327:e=>{e.exports=require("next/dist/compiled/mkdirp")},225:e=>{e.exports=require("next/dist/compiled/schema-utils")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},761:e=>{e.exports=require("zlib")}};var t={};function __webpack_require__(n){if(t[n]){return t[n].exports}var o=t[n]={exports:{}};var i=true;try{e[n](o,o.exports,__webpack_require__);i=false}finally{if(i)delete t[n]}return o.exports}__webpack_require__.ab=__dirname+"/";return __webpack_require__(826)})();