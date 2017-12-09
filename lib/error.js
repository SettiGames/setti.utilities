module.exports = function(key, raw) {
    var response = {};
    var error;

    if (errors[key]) {
        error = errors[key];
    }
    else {
        error = errors.generic;
    }

    if (error.status) response.status = error.status;
    if (error.type) response.type = error.type;
    if (error.message) response.message = error.message;
    if (error.input) response.input = error.input;
    if (raw) response.raw = raw;

    return {
        status: error.status || 200,
        response: {
            error: response
        }
    };

};



const errors = {
    
    unknown: {
        status: 200,
        type: 'generic',
        message: 'An unknown error has occured'
    },

    unauthorized: {
        status: 401,
        type: 'generic',
        message: 'This user is not authorized to do that action'
    },

    notFound: {
        status: 404,
        type: 'generic',
        message: 'Not found'
    },



    // Client
    
    missingClientHeader: {
        status: 400,
        type: 'client',
        message: 'Missing client header'
    },

    missingClientToken: {
        status: 400,
        type: 'client',
        message: 'Missing client token'
    },

    missingClientType: {
        status: 400,
        type: 'client',
        message: 'Missing client type'
    },

    invalidClientToken: {
        status: 401,
        type: 'client',
        message: 'Invalid client token'
    },

    invalidClientType: {
        status: 401,
        type: 'client',
        message: 'Invalid client type'
    },



    // Server

    invalidSocketSecret: {
        status: 401,
        type: 'server',
        message: 'Invalid socket secret.'
    },

    noSocketServers: {
        status: 200,
        type: 'server',
        message: 'No socket servers available'
    },

    hubActionFailed: {
        status: 500,
        type: 'server',
        message: 'Hub action failed.'
    },



    // Database

    mongo: {
        status: 500,
        type: 'database',
        message: 'Error reading/writing to mongo database.'
    },

    redis: {
        status: 500,
        type: 'database',
        message: 'Error reading/writing to redis data store.'
    },



    // Auth

    missingAuthToken: {
        status: 400,
        type: 'auth',
        message: 'Missing auth token.'
    },

    invalidAuthToken: {
        status: 401,
        type: 'auth',
        message: 'Invalid auth token.'
    },

    missingUser: {
        status: 401,
        type: 'auth',
        message: 'User no longer exists.'
    },



    // Form

    missingLogin: {
        status: 200,
        type: 'form',
        message: 'Please enter a username or email address.',
        input: 'login'
    },

    missingUsername: {
        status: 200,
        type: 'form',
        message: 'Please enter a username.',
        input: 'username'
    },

    missingEmail: {
        status: 200,
        type: 'form',
        message: 'Please enter an email address.',
        input: 'email'
    },

    missingPassword: {
        status: 200,
        type: 'form',
        message: 'Please enter a password.',
        input: 'password'
    },

    invalidLogin: {
        status: 200,
        type: 'form',
        message: 'Incorrect Username/Email or Password',
        input: 'login'
    },

    invalidUsername: {
        status: 200,
        type: 'form',
        message: 'Username should be between 2 and 15 characters.',
        input: 'username'
    },

    invalidEmail: {
        status: 200,
        type: 'form',
        message: 'Please enter a valid email address.',
        input: 'email'
    },

    invalidPassword: {
        status: 200,
        type: 'form',
        message: 'Passwords must be longer than 6 characters.',
        input: 'password'
    },

    valueTaken: {
        status: 200,
        type: 'form',
        message: 'Value is taken.'
    }
    
};