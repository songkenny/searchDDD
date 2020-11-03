//const apoc = require('apoc');
const neo4j = require('neo4j-driver');
const password = require('./password.js')
const driver = new neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", password));

const session = driver.session();


const findWithin5 = () => {console.log('hiiii');
//return apoc.query(`CALL spatial.bbox('geom',{lon:-122,lat:35.0}, {lon:-120, lat:38.0})`).exec();
return session.run(`CALL spatial.bbox('geom',{lon:-122,lat:35.0}, {lon:-120, lat:38.0})`);
}

module.exports = {
  findWithin5,
}