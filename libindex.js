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
