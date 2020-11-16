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

async function findByName(name) {
  const dynamoResponse = await db.scan({
    TableName: planetsTable,
    FilterExpression: 'contains(#planet_name, :planet_name)',
    ExpressionAttributeNames:{
      "#planet_name": 'nombre'
    },
    ExpressionAttributeValues:{
      ":planet_name": name
    }
  }).promise();

  return dynamoResponse.Items;
}

module.exports = Object.freeze({
  save,
  findByName,
})