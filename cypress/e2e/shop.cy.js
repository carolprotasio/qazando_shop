/// <reference types="cypress" />
describe('/shop - Shopping for products', () => {

  beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Ignora a exceção
    });
    
    cy.fixture('user').then(function (user) {
      this.user = user
    })
  })
  it('CT-001 adding a product to the cart', function () {
    const user = this.user.shopping
    cy.registerNewUser(user.name, user.email, user.password)
    cy.url().should('include', 'my-account')

    cy.get('#userLogged', { timeout: 1000 }).should('exist');
    cy.get('#userLogged').should('have.contain.text', user.name)    

    cy.addProductToCart()
    cy.get('.swal2-popup').should('contain.text', 'Success!')
    
    cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart > li')
     .should('have.length', 1);

  })
  it('CT-002 adding 3 products to the cart', function () {
    const user = this.user.shopping
    cy.registerNewUser(user.name, user.email, user.password)
    cy.url().should('include', 'my-account')

    cy.get('#userLogged', { timeout: 1000 }).should('exist');
    cy.get('#userLogged').should('have.contain.text', user.name)

    cy.addingThreeProducts()
    cy.get('.swal2-popup').should('contain.text', 'Success!')

    cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart > li')
     .should('have.length', 3);

  })


})