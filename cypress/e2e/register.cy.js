/// <reference types="cypress" />
describe('/register - Register user', () => {

  beforeEach(function(){
    cy.fixture('user').then(function (user) {
      this.user = user
    })
  })
  it('CT-001 register a new user succesfully', function () {
   const user = this.user.create
    cy.registerNewUser(user.name, user.email, user.password)
    cy.url().should('include', 'my-account')

    cy.get('#userLogged', { timeout: 1000 }).should('exist');
    cy.get('#userLogged').should('have.contain.text', user.name)
  })
  it('CT-002 empty name field', function () {
   const user = this.user.empty_name
    cy.registerEmptyName(user.email, user.password)
    cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
    
  })
  it('CT-003 empty email field', function () {
   const user = this.user.empty_email
    cy.registerEmptyEmail(user.name, user.password)    
   
  })
  it('CT-004 empty password field', function () {
   const user = this.user.empty_pass
    cy.registerEmptyPass(user.name, user.email)    
   
  })
  it('CT-005 all empty field', function () {
   const user = this.user.empty_field
    cy.registerAllEmptyField()    
   
  })

})