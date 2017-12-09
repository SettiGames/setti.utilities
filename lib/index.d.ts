export function error(type: error.Generic | error.Client | error.Server | error.Database | error.Auth | error.Form, raw?: any): error.Definition

export namespace error {

    export interface Definition {
        status: StatusCode
        type: Type
        message: string
        input?: string
        raw?: any
    }

    export const enum StatusCode {
        ok = 200,
        badRequest = 400,
        unauthorized = 401,
        notFound = 404,
        toManyRequests = 429,
        internalServer = 500
    }

    export const enum Type {
        generic = 'generic',
        client = 'client',
        server = 'server',
        database = 'database',
        auth = 'auth',
        form = 'form'
    }

    const enum Generic {
        unknown = 'unknown',
        unauthorized = 'unauthorized',
        notFound = 'notFound'
    }
    
    const enum Client {
        missingHeader = 'missingClientHeader',
        missingToken = 'missingClientToken',
        missingType = 'missingClientType',
        invalidToken = 'invalidClientToken',
        invalidType = 'invalidClientType'
    }

    const enum Server {
        invalidSecret = 'invalidSocketSecret',
        noServers = 'noSocketServers',
        hubActionFailed = 'hubActionFailed'
    }

    const enum Database {
        mongo = 'mongo',
        redis = 'redis'
    }

    const enum Auth {
        invalidToken = 'invalidAuthToken',
        missingToken = 'missingAuthToken',
        missingUser = 'missingUser'
    }

    const enum Form {
        missingLogin = 'missingLogin',
        missingUsername = 'missingUsername',
        missingEmail = 'missingEmail',
        missingPassword = 'missingPassword',
        invalidLogin = 'invalidLogin',
        invalidUsername = 'invalidUsername',
        invalidEmail = 'invalidEmail',
        invalidPassword = 'invalidPassword',
        valueTaken = 'valueTaken'
    }

}



export namespace logger {

    export interface Configuration {
        appName: string
        file: string
        papertrailHost: string
        papertrailPort: number
    }

    export function configure(a: Configuration): void
    export const log: logger
    
}

export const log: logger

export declare class logger {
    error(a: any, b?: any): void
    warn(a: any, b?: any): void
    info(a: any, b?: any): void
    verbose(a: any, b?: any): void
    debug(a: any, b?: any): void
    silly(a: any, b?: any): void
}