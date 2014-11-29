'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/things', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/things')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array).and.have.lengthOf(3);
        res.body[0].name.should.equal('CMS');
        done();
      });
  });
});

describe('GET /api/things/dev', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/things/CMS')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.name.should.equal('CMS');
        done();
      });
  });
});
