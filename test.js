'use strict';

const app = require('./app'),
  request = require('supertest').agent(app.listen());

describe('Simple User HTTP CRUD API', () => {
  let a_user = {
    name: 'Tyler',
    age: 28,
    height: 72,
    occupation: 'developer'
  };

  it('adds new users', (done) => {
    request
      .post('/user')
      .send(a_user)
      .expect('location', /^\/user\/[0-9a-fA-F]{24}$/)
      .expect(200, done)
  });
});
