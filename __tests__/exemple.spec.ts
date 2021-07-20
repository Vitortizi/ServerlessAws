const db = require('../db_connect');

describe('Functions to get data from the users table:', () => {
    test('Get all users: ', () => {
        module.exports.getAllUser = (event, context, callback) => {
            context.callbackWaitsForEmptyEventLoop = false;

            db.getAll('users')
                .then(res => {
                    expect(res.length > 1).toBeFalsy()
                })
                .catch(e => {
                    expect(e).toBe('Error: Could not find Users')
                })
        };
    });

    test('Get a single user: ', () => {
        module.exports.getUser = (event, context, callback) => {
            context.callbackWaitsForEmptyEventLoop = false;

            db.getById('users', event.pathParameters.id)
                .then(res => {
                    expect(res).toEqual(1)
                })
                .catch(e => {
                    expect(e).toBe('Error: Could not find User')
                })
        };
    });

    test('Creating a User: ', () => {
        module.exports.createUser = (event, context, callback) => {
            context.callbackWaitsForEmptyEventLoop = false;
            const data = JSON.parse(event.body);
            db.insert('users', data)
                .then(res => {
                    expect(res).toBe('User Created')
                })
                .catch(e => {
                    expect(e).toBe('Error: Could not create User')
                })
        };
    });


    test('Update a User: ', () => {
        module.exports.updateUser = (event, context, callback) => {
            context.callbackWaitsForEmptyEventLoop = false;
            const data = JSON.parse(event.body);
            db.updateById('users', event.pathParameters.id, data)
                .then(res => {
                    expect(res).toBe('User Updated')
                })
                .catch(e => {
                    expect(e).toBe('Error: Could not update User')
                })
        };
    });

    test('Delete a User: ', () => {
        module.exports.deleteUser = (event, context, callback) => {
            context.callbackWaitsForEmptyEventLoop = false;
            db.deleteById('users', event.pathParameters.id)
                .then(res => {
                    expect(res).toBe('User Deleted')
                })
                .catch(e => {
                    expect(e).toBe('Error: Could not delete User')
                })
        };
    });
});
