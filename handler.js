'use strict';

const db = require('./db_connect');

module.exports.getAllUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getAll('users')
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: res.length > 0 ? JSON.stringify(res) : 'No users have been registered'
      })
    })
    .catch(e => {
      callback(null, {
        statusCode: e.statusCode || 500,
        body: 'Error: Could not find Users: ' + e
      })
    })
};

module.exports.getUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getById('users', event.pathParameters.id)
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      callback(null, {
        statusCode: e.statusCode || 500,
        body: "Error: Could not find User: " + e
      })
    })
};

module.exports.createUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  db.insert('users', data)
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: "User Created! " + res
      })
    })
    .catch(e => {
      callback(null, {
        statusCode: e.statusCode || 500,
        body: "Error: Could not create User " + e
      })
    })
};

module.exports.updateUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  db.updateById('users', event.pathParameters.id, data)
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: "User Updated! " + res
      })
    })
    .catch(e => {
      callback(null, {
        statusCode: e.statusCode || 500,
        body: "Error: Could not update User " + e
      })
    })
};

module.exports.deleteUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  db.deleteById('users', event.pathParameters.id)
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: "User Deleted!"
      })
    })
    .catch(e => {
      callback(null, {
        statusCode: e.statusCode || 500,
        body: "Error: Could not delete User " + e
      })
    })
};

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
