/// <reference types="cypress" />
describe('/login - Login', () => {

  beforeEach(function(){
    cy.fixture('user').then(function (user) {
      this.user = user
    })
  })
  it('CT-001 login succesfully with a register user ', function () {
   const user = this.user.create
    cy.registerNewUser(user.name, user.email, user.password)
    cy.url().should('include', 'my-account')
    cy.userLogin(user.email, user.password)     

    cy.get('#userLogged', { timeout: 1000 }).should('exist');
    cy.get('#userLogged').should('have.contain.text', user.email)
  })
  it('CT-002 login with empty email field', function () {
   const user = this.user.create
   cy.registerNewUser(user.name, user.email, user.password)
   cy.url().should('include', 'my-account')  

   cy.loginEmptyEmail(user.password)
   cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
   
  })
  it('CT-003 login with empty password field', function () {
    const user = this.user.create
    cy.registerNewUser(user.name, user.email, user.password)
    cy.url().should('include', 'my-account')  
 
    cy.loginEmptyPass(user.email)
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')   
   
  })
  it('CT-004 login with all empty field', function () {
    const user = this.user.create
    cy.registerNewUser(user.name, user.email, user.password)
    cy.url().should('include', 'my-account') 
    
    cy.loginEmptyField()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')   
  })

})