// CLEAR CART
Cypress.Commands.add('clearCart', () => {
  cy.visit('/shop')
  cy.get('#root > div.mobile-header.sticky-header.sticky-color--golden.mobile-header-bg-color--golden.section-fluid.d-lg-block.d-xl-none > div > div > div > div.mobile-right-side > ul > li:nth-child(3) > a')
    .click()
  cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart', { timeout: 10000 })
    .should('exist')

  cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart > li:nth-child(1) > div.offcanvas-wishlist-item-delete.text-right > a').click({ force: true })
  cy.wait(500)
  cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart > li:nth-child(1) > div.offcanvas-wishlist-item-delete.text-right > a').click({ force: true })
  cy.wait(500)
  cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart > li:nth-child(1) > div.offcanvas-wishlist-item-delete.text-right > a').click({ force: true })
  cy.wait(500)

  cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart > li')
    .should('have.length', 0)
});
// CLEAR WISHIST
Cypress.Commands.add('clearWishlist', () => {
  cy.visit('/shop')
  cy.get('div.mobile-right-side > ul > li:nth-child(2) > a')
    .click()
  cy.get('ul.offcanvas-wishlist > li:nth-child(1) > div.offcanvas-wishlist-item-delete.text-right > a')
    .click()
  cy.get('ul.offcanvas-wishlist > li:nth-child(1) > div.offcanvas-wishlist-item-delete.text-right > a')
    .click()
  cy.get('ul.offcanvas-wishlist > li:nth-child(1) > div.offcanvas-wishlist-item-delete.text-right > a')
    .click()
  cy.get('ul.offcanvas-wishlist > li:nth-child(1) > div.offcanvas-wishlist-item-delete.text-right > a')
    .click()

  cy.get('#offcanvas-wishlish > div.offcanvas-wishlist-wrapper > ul.offcanvas-wishlist > li')
    .should('have.length', 0)

})
// ADDING PRODUCTS TO CART
Cypress.Commands.add('addProductToCart', () => {
  cy.visit('/shop')
  cy.clearCart()
  cy.get('div:nth-child(2) > div:nth-child(1) > div > div.thumb > button').click({ force: true })
  cy.wait(1000)

})
// ADDING PRODUCTS TO WISHING LIST 
Cypress.Commands.add('addProductToWishlist', () => {
  cy.clearWishlist()
  cy.get('#shop_main_area > div > div:nth-child(2) > div:nth-child(1) > div > div.thumb > div > a.action.wishlist').click({ force: true })
  cy.wait(1000)

})
Cypress.Commands.add('addingThreeProducts', () => {
  cy.clearCart()
  cy.get('div:nth-child(2) > div:nth-child(1) > div > div.thumb > button').click({ force: true })
  cy.wait(1000)
  cy.get('.swal2-popup').should('contain.text', 'Success!')

  cy.get('#shop_main_area > div > div:nth-child(2) > div:nth-child(2) > div > div.thumb > button').click({ force: true });
  cy.wait(1000)
  cy.get('.swal2-popup').should('contain.text', 'Success!')

  cy.get('div:nth-child(2) > div:nth-child(19) > div > div.thumb > button').click({ force: true });
  cy.wait(1000)

})
Cypress.Commands.add('threeProductsToWishlist', () => {
  cy.clearWishlist()
  cy.get('#shop_main_area > div > div:nth-child(2) > div:nth-child(1) > div > div.thumb > div > a.action.wishlist').click({ force: true })
  cy.wait(1000)
  cy.get('#swal2-html-container').should('contain.text', 'Added to Wishlist')
  cy.get('#shop_main_area > div > div:nth-child(2) > div:nth-child(2) > div > div.thumb > div > a.action.wishlist').click({ force: true })
  cy.wait(1000)
  cy.get('#swal2-html-container').should('contain.text', 'Added to Wishlist')
  cy.get('#shop_main_area > div > div:nth-child(2) > div:nth-child(3) > div > div.thumb > div > a.action.wishlist').click({ force: true })
  cy.wait(1000)
  cy.get('#swal2-html-container').should('contain.text', 'Added to Wishlist')
  cy.get('.swal2-confirm').click()

})

