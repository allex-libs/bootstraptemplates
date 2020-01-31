(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
ALLEX.execSuite.libRegistry.register('allex_bootstraptemplateslib', require('./libindex')(ALLEX, ALLEX.execSuite.libRegistry.get('allex_templateslitelib'), ALLEX.execSuite.libRegistry.get('allex_htmltemplateslib')));

},{"./libindex":2}],2:[function(require,module,exports){
function createLib (execilb, templatelib, htmltlib) {
  'use strict';

  var i = templatelib.inherit,
    o = templatelib.override;

  var colanymarkup = i(htmltlib.div,
    {
      prereplacements: [{
        CLASS: 'col-md-SIZE CLASS'
      }]
    }
  );

  var col1markup = i(colanymarkup,
    {
      prereplacements: [{
        SIZE: 1
      }]
    }
  );

  var col3markup = i(colanymarkup,
    {
      prereplacements: [{
        SIZE: 3
      }]
    }
  );

  var col6markup = i(colanymarkup,
    {
      prereplacements: [{
        SIZE: 6
      }]
    }
  );

  var col9markup = i(colanymarkup,
    {
      prereplacements: [{
        SIZE: 9
      }]
    }
  );

  var col12markup = i(colanymarkup,
    {
      prereplacements: [{
        SIZE: 12
      }]
    }
  );


  return {
    col1: col1markup,
    col3: col3markup,
    col6: col6markup,
    col9: col9markup,
    col12: col12markup,
  };
}

module.exports = createLib;

},{}]},{},[1]);
