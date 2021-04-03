const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();
//LOGIN
routes.post('/sessions', SessionController.create)
//ONGS ROUTES
routes.get('/ongs', OngController.list)
routes.post('/ongs', OngController.create)
//INCIDENT ROUTES
routes.get('/incidents', IncidentController.list)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.destroy)
//Profile
routes.get('/profile', ProfileController.index)

module.exports = routes;