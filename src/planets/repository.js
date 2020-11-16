'use strict';
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

const planetsTable = process.env.PLANETS_TABLE;

function save(planet) {
  return db.put({
    TableName: planetsTable,
    Item: planet,
  }).promise();
}

module.exports = Object.freeze({
  save,
})