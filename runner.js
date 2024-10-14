const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImFlYTI3ZjQzLWMxMzItNGY5Ni1iOGYwLTdkY2NlMTdiZWIxMC0xNzI4OTE0ODA3MzU2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMmQyNjE2NjEtMjhlMS00OWM4LTgwZWQtYjBhOTkxODQyY2U5IiwidHlwZSI6InQifQ.jebcrylOz5aTP3gz_csOOQO8dJtY3pKVRd1C8gljo88'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})