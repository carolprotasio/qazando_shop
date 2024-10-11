/// <reference types="cypress" />
describe('/shop - Shopping for products', () => {

  beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })
  it('CT-001 adding a product to the cart', function () {
    cy.addProductToCart()
    cy.get('.swal2-popup').should('contain.text', 'Success!')

    cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart > li')
      .should('have.length', 1);

  })
  it('CT-002 adding 3 diferrents products to the cart', function () {
    cy.addingThreeProducts()
    cy.get('.swal2-popup').should('contain.text', 'Success!')

    cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart > li')
      .should('have.length', 3);

  })


})