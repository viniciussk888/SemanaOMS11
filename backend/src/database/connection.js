const knex = require('knex');
const configuration = require('../../knexfile');//importando configuraçao

const connection = knex(configuration.development);//pegando as conf de dev

module.exports = connection;