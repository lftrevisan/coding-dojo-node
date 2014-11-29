/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  res.json([
  {
  name : 'CMS',
  description : 'Content Management System'
  }, {
  name : 'ACS',
  description : 'Access Control System'
  }, {
  name : 'CW',
  description : 'Client Wizard'
  }
  ]);
};

// Get a single thing
exports.show = function(req, res) {
  if (req.params.id === 'CMS') {
    return res.json({
      name : 'CMS',
      description : 'Content Management System'
    });
  } else {
    return res.send(500, 'Invalid thing');
  }
};