## Description

Based on Titanic: Prediction Competition we want to serve this on production to allow our clients to run predictions by themselves. With this application clients should be able to access both the ML model information and perform requests to make predictions about passengers.

## Trail of though

First of all, I had to create the project and divide it in 3 parts, the ML model, the backend and the frontend.

1. Basic project setup. I created the docker files and the docker compose along with other basic files that will fit both projects
2. I've added the backend folder that will contain both the python script and the node.js (nest) server
3. I developed the Python model and encapsulated it in a pickle file (which can be found in ./backend/python/titanic_model.pck). Having the instructions to create the model made this task really easy. Although I've created the python service just as a simple script (main.py) to execute from node, the ideal would be to have it as a separate microservice to handle requests, and obviously, improve the code as some things are hardcoded (i.e. model columns).
4. Once I had the python model, it was time to create the backend server. With Nest js was quite easy and I just had to add a couple of requests and validation rules. I divided the logic in model/prediction in the case in the future you want to add more model-related requests like 'get X parameter' or add more prediction requests like 'batch prediction'. I've left some functions commented on purpose
5. In the backend I've also created a pythonScript service to provide basic communication with the python script. I'd prefer to have it as a library.
6. To create the react app, I used the create-react-app utility to start a quick project. After that, I created a two-page app: one is the model information (currently accuracy) but could be scalable to add other info) The other is the prediction page, which consists of a simple form with no frontend validation (for simplicity) that allows the user to send a subject's information to predict if it will survive the Titanic or not.
7. The frontend part was a bit more challenging as lately, I've been using Vue.js and some concepts were a bit rusty but after a while it was easier. I could have used redux to persist some data (i.e. model accuracy) and created a tiny lib to communicate with the backend, but I decided to keep it simpler to not use a lot of time. I used both functional and class components and styled a bit the website.

After adding the basic project files I created [this pull request](https://github.com/pvidal96/titanic-prediction/pull/1/files) so it's easier to check the changes made in the project.

## Prequisites

- Docker installed
- Make installed (optional)

## Project setup

From the project root run:

```bash
$ make db
```

After the compilation is finished, you should be able to access the [web application](http://localhost:3000/) and the [API](http://localhost:4000/model/accuracy)

## Other container commands

```bash
# To remove the containers
$ make dd

# To start the containers
$ make du

# To stop the containers
$ make ds

# To enter the backend container
$ make deb

# To enter the frontend container
$ make def
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
