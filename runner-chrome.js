

const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImFlYTI3ZjQzLWMxMzItNGY5Ni1iOGYwLTdkY2NlMTdiZWIxMC0xNzI4OTE4MDEyNzk1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiM2M1MmFlZmQtMDE1Ni00NWNhLWIxMTYtMDRiMTZkZWVhMDkyIiwidHlwZSI6InQifQ.WePJaf-KDo9SS9eueBxjyyt7fsZq2rYsrEfDR3Cg4q8'

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