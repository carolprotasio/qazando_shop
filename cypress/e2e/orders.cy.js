/// <reference types="cypress" />
describe('/checkout-one - Billing & Orders Functionnality', () => {

  beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.fixture('user').then(function (user) {
      this.user = user
    })

  })
  it('CT-001 Billing sucesfully & order by Direct Bank trasfer', function () {
    const user = this.user.billing_info
    cy.visit('/checkout-one')
    cy.fillBillingInfo(user);

    cy.get('.checkout-area-bg > .theme-btn-one').click()
    cy.get(':nth-child(2) > h3').should('have.text', 'Billings Information registred with success!')

    cy.get('#headingOne').click()
    cy.get('div:nth-child(2) > div:nth-child(2) > button').click()

    cy.get('h2').should('have.text', 'Order success!')
    cy.get('.offer_modal_left > h3').should('have.text', 'Congrats! Your order was created with sucess!')

  })
  
  it('CT-002 Billing sucesfully & Order by Mobile Banking', function () {
    const user = this.user.billing_info
    cy.visit('/checkout-one')
    cy.fillBillingInfo(user);

    cy.get('.checkout-area-bg > .theme-btn-one').click()
    cy.get(':nth-child(2) > h3').should('have.text', 'Billings Information registred with success!')

    cy.get('#headingTwo').click()
    cy.get('div:nth-child(2) > div:nth-child(2) > button').click()

    cy.get('h2').should('have.text', 'Order success!')
    cy.get('.offer_modal_left > h3').should('have.text', 'Congrats! Your order was created with sucess!')

  })
  it('CT-003 Billing sucesfully & Order by Paypal', function () {
    const user = this.user.billing_info
    cy.visit('/checkout-one')
    cy.fillBillingInfo(user);

    cy.get('.checkout-area-bg > .theme-btn-one').click()
    cy.get(':nth-child(2) > h3').should('have.text', 'Billings Information registred with success!')

    cy.get('#headingThree').click()
    cy.get('div:nth-child(2) > div:nth-child(2) > button').click()

    cy.get('h2').should('have.text', 'Order success!')
    cy.get('.offer_modal_left > h3').should('have.text', 'Congrats! Your order was created with sucess!')

  })





})