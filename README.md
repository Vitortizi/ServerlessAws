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
```sh 
serverless remove
```

## To use the database

> remove the .spec extension from the db.spec.js file and update the db.js file data with the database information

## Tools used
- JEST
- SERVERLESS
- NODEJS
- AWS

