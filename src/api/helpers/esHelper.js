const _ = require('lodash');
const { esConfig } = require('../../config/vars');
const esService = require('../services/esService');

exports.insertEmployees = async (employees) => {
  let bodyObject = _.pick(employees, [
    'firstName',
    'lastName',
    'designation',
    'salary',
    'dateOfJoining',
    'address',
    'gender',
    'age',
    'maritalStatus',
  ]);
  let body = {
    id: employees._id.toHexString(),
    indexName: esConfig.indexName,
    body: bodyObject
  }
  return await esService.indexDocument(body);
}

exports.listEmployees = async ({ term, page = 1, perPage = 10 }) => {
  let query;
  const offset = page;
  const limit = perPage;
  if (!term) {
    query = {
      "query": {
        "match_all": {}
      }
    }
  }
  else {
    query = {
      "query": {
        "multi_match": {
          "query": term,
          "type": "phrase_prefix",
          "fields": ["firstName", "lastName", 'age', 'salary', 'gender', 'designation', 'maritalStatus', 'dateOfJoining', 'address']
        }
      }
    }
  }
  const options = {
    indexName: esConfig.indexName,
    body: {
      size: limit,
      from: limit * (offset - 1),
      query: query.query,
    },
  };
  let { hits } = await esService.search(options);
  let { count } = await esService.countDocuments(query);
  let data = await prepareObject(hits.hits);
  console.log(data)
  return { count, data }
}

async function prepareObject(result) {
  return await result.map(obj => obj._source)
}