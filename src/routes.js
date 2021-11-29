const routes = require('express').Router();
const path = require('path');

// Controllers
const UserController = require('./controllers/UserController');
const WorldController = require('./controllers/WorldController');

routes.get('/user/get_all', UserController.getAll);
routes.get('/user/get/:id', UserController.get);
routes.post('/user/create', UserController.add);
routes.post('/user/login', UserController.login);

routes.get('/world/get_all', WorldController.getAll);
routes.get('/world/get/:id', WorldController.get);
routes.post('/world/create', WorldController.add);

routes.get('/game-tests/:id', WorldController.index);

module.exports = routes;