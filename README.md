# Serverless AWS and Postgress

## Installation

```sh
npm install -g serverless
```

## Project creation

```sh
serverless create --template aws-nodejs --path <name of your project>
```

## Assigning AWS User Settings

```sh
serverless config credentials -o --provider aws --key=<YOUR KEY> --secret=<YOUR SECRET KEY>
```

## Deployment

```sh
serverless deploy -v
```


## Invocation
```sh
serverless invoke -f hello -l
```

## Remove an AWS Application
> serverless remove

## Tools used
- JEST
- SERVERLESS
- NODEJS
- AWS

## To use the database

> create file 

- db.js

> add to file:

```sh
module.exports =  {
    database: '<database name>',
    host: '<host name>',
    port: '',
    user: '<database user name >',
    password: '<database user password >'
}
```