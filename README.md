## Description

Titanic prediction backend repository.

## Prequisites

- Make installed
- Docker installed

## Project setup

From the project root run:

```bash
$ make db
```

## Compile and run the project

```bash
# development
$ make du

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

TODO

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Python model usage

Every single command in this section must be executed inside the backend container.

- To train the model execute the following:

```bash
# Where the 2nd argument is the model path
$ python ./python/main.py train "./python/titanic_model.pck"
```

- To get predictions from an existing model execute:

```bash
# Where the 2nd argument is the model path
# and the 3rd argument is the prediction subject
$ python ./python/main.py predict "./python/titanic_model.pck" '{"age": 22, "siblingsSpouse": 0, "parents": 2, "fare": 7.25, "sex": "male", "embarked": "Q", "class": 1}'
```
