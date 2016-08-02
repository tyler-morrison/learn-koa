'use strict';
/**
 * External Dependencies - Server
 */
const koa = require('koa'),
  // To test the app, we need to expose it using `module.exports`
  app = module.exports = koa(),
  routes = require('koa-route'),
  parse = require('co-body');

/**
 * External Dependencies - Database
 */
const monk = require('monk'),
  wrap = require('co-monk'),
  db = monk('localhost/apiUsers'),
  users = wrap(db.get('users'));

app.use(routes.post('/user', addUser));

app.listen(3000);
console.log('The app is listening on Port 3000');

function* addUser() {
  let userFromRequest = yield parse(this);

  let insertedUser = yield users.insert(userFromRequest);

  this.set('location', '/user/' + insertedser._id);
  this.status = 200;
}
