/// <reference types="cypress" />
describe('/wishlist functionallity', () => {

  beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Ignora a exceção
    })
  })
  it('CT-001 adding a product to a whishing list', function () {
    cy.addProductToWishlist()

    cy.get('#swal2-title').should('contain.text', 'Success')
    cy.get('.swal2-confirm').click({ force: true })
    cy.get('#offcanvas-wishlish > div.offcanvas-wishlist-wrapper > ul.offcanvas-wishlist > li')
      .should('have.length', 1)
  })
  it('CT-002 adding 3 diferrents products to wishing list', function () {
    cy.threeProductsToWishlist()

    cy.get('#offcanvas-wishlish > div.offcanvas-wishlist-wrapper > ul.offcanvas-wishlist > li')
      .should('have.length', 3)
  })
  it('CT-003 adding a product to a whishing list and then to the cart', function () {
    cy.addProductToWishlist()

    cy.get('#swal2-title').should('contain.text', 'Success')
    cy.get('.swal2-confirm').click({ force: true })
    cy.get('#offcanvas-wishlish > div.offcanvas-wishlist-wrapper > ul.offcanvas-wishlist > li')
      .should('have.length', 1)

    cy.get('ul.offcanvas-wishlist-action-button > li > a').click()

    cy.get('#Wishlist_area > div > div').should('have.length', 1)
  })
  it.only('CT-004 adding 3 product to a whishing list and then to the cart', function () {
    cy.threeProductsToWishlist()

    cy.get('#swal2-title').should('contain.text', 'Success')
    cy.get('.swal2-confirm').click({ force: true })
    cy.get('#offcanvas-wishlish > div.offcanvas-wishlist-wrapper > ul.offcanvas-wishlist > li')
      .should('have.length', 3)

    cy.get('ul.offcanvas-wishlist-action-button > li > a').click()

    cy.get('#Wishlist_area > div > div > div > div > div > table > tbody > tr').should('have.length', 3)
  })


})