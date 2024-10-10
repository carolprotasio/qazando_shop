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
 

   // Verifica se o carrinho está vazio
   cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart > li')
     .should('have.length', 0); // Assegura que não há itens no carrinho
});


// ADDING PRODUCTS TO CART
Cypress.Commands.add('addProductToCart', () => {
   
   cy.visit('/shop')
   cy.clearCart()
   cy.get('div:nth-child(2) > div:nth-child(1) > div > div.thumb > button').click({ force: true })
   cy.wait(1000)

})
Cypress.Commands.add('addingThreeProducts', () => {
   cy.visit('/shop')
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

/* 
Cypress.Commands.add('clearCart', () => {
   cy.visit('/shop');
   cy.get('#root > div.mobile-header.sticky-header.sticky-color--golden.mobile-header-bg-color--golden.section-fluid.d-lg-block.d-xl-none > div > div > div > div.mobile-right-side > ul > li:nth-child(3) > a')
     .click();

   // Verifica se o pop-up do carrinho está visível
   cy.get('#offcanvas-add-cart', { timeout: 10000 }).should('be.visible');

   // Aguarda a lista de produtos carregar
   cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart', { timeout: 10000 })
     .should('exist');

   // Itera sobre cada item do carrinho e tenta removê-lo
   cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart > li> div.offcanvas-wishlist-item-delete.text-right > a').each(($el) => {
     cy.wrap($el)
       
       //.scrollIntoView()
       .should('be.visible') 
       .click({ force: true }) 
       /* .then(() => {
         // Após clicar, aguarde a atualização da lista
         cy.wait(500); // Espera após cada clique
         cy.get('#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > ul.offcanvas-cart > li').should('have.length.lessThan', 3); // Verifica se a quantidade de itens diminuiu
       }); */
    