/// <reference types="cypress" />
describe('/checkout-one - Billing Functionnality', () => {

  beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.fixture('user').then(function (user) {
      this.user = user
    })

  })
  it('CT-001 Billing successfully', function () {
    const user = this.user.billing_info
    cy.visit('/checkout-one')
    cy.fillBillingInfo(user);

    cy.get('.checkout-area-bg > .theme-btn-one').click()
    cy.get(':nth-child(2) > h3').should('have.text', 'Billings Information registred with success!')


  })
  it('CT-002 empty field - First Name ', function () {
    cy.visit('/checkout-one')
    cy.fillBillingInfo({ ...this.user.billing_info, fname: '' })
    cy.get('.checkout-area-bg > .theme-btn-one').click()

    cy.get('#errorMessageFirstName').should('have.text', 'O campo First Name deve ser prenchido')
  })
  it('CT-003 empty field - Last Name ', function () {
    cy.visit('/checkout-one')
    cy.fillBillingInfo({ ...this.user.billing_info, lname: '' })
    cy.get('.checkout-area-bg > .theme-btn-one').click()

    cy.get('#errorMessageFirstName').should('have.text', 'O campo Last Name deve ser prenchido')

  })
  it('CT-004 empty field - Company Name ', function () {
    cy.visit('/checkout-one')
    cy.fillBillingInfo({ ...this.user.billing_info, cname: '' })
    cy.get('.checkout-area-bg > .theme-btn-one').click()

    cy.get('#errorMessageFirstName').should('have.text', 'O campo Company deve ser prenchido')

  })
  it('CT-005 empty field - Email Address ', function () {
    cy.visit('/checkout-one')
    cy.fillBillingInfo({ ...this.user.billing_info, email: '' })
    cy.get('.checkout-area-bg > .theme-btn-one').click()

    cy.get('#errorMessageFirstName').should('have.text', 'O campo E-mail deve ser prenchido ou é inválido')

  })
  it('CT-006 empty field - Country', function () {
    cy.visit('/checkout-one')
    cy.fillBillingInfo({ ...this.user.billing_info, country: '' })
    cy.get('.checkout-area-bg > .theme-btn-one').click()

    cy.get('#errorMessageFirstName').should('have.text', 'O campo Country deve ser prenchido')

  })
  it('CT-007 empty field - State/City', function () {
    cy.visit('/checkout-one')
    cy.fillBillingInfo({ ...this.user.billing_info, city: '' })
    cy.get('.checkout-area-bg > .theme-btn-one').click()

    cy.get('#errorMessageFirstName').should('have.text', 'O campo City deve ser prenchido')

  })
  it('CT-008 empty field - Zip Code', function () {
    cy.visit('/checkout-one')
    cy.fillBillingInfo({ ...this.user.billing_info, zip: '' })
    cy.get('.checkout-area-bg > .theme-btn-one').click()

    cy.get('#errorMessageFirstName').should('have.text', 'O campo Zip Code deve ser prenchido')

  })
  it('CT-009 empty field - Full Address', function () {
    cy.visit('/checkout-one')
    cy.fillBillingInfo({ ...this.user.billing_info, faddress: '' })
    cy.get('.checkout-area-bg > .theme-btn-one').click()

    cy.get('#errorMessageFirstName').should('have.text', 'O campo Address deve ser prenchido')

  })
  it('CT-010 empty field - Additional Notes', function () {
    cy.visit('/checkout-one')
    cy.fillBillingInfo({ ...this.user.billing_info, messages: '' })
    cy.get('.checkout-area-bg > .theme-btn-one').click()

    cy.get('#errorMessageFirstName').should('have.text', 'O campo Additional Notes deve ser prenchido')

  })
  it('CT-010 ALL empty field', function () {
    cy.visit('/checkout-one')
    cy.get('.checkout-area-bg > .theme-btn-one').click()
    
    cy.wait(1000)
    const errorMessages = [   
      { selector: ':nth-child(1) > .form-group > #errorMessageFirstName', text: 'O campo First Name deve ser prenchido' },
      { selector: ':nth-child(2) > .form-group > #errorMessageFirstName', text: 'O campo Last Name deve ser prenchido' },
      { selector: ':nth-child(3) > .form-group > #errorMessageFirstName', text: 'O campo Company deve ser prenchido' },
      { selector: ':nth-child(4) > .form-group > #errorMessageFirstName', text: 'O campo E-mail deve ser prenchido ou é inválido' },
      { selector: ':nth-child(5) > .form-group > #errorMessageFirstName', text: 'O campo Country deve ser prenchido' },
      { selector: ':nth-child(6) > .form-group > #errorMessageFirstName', text: 'O campo City deve ser prenchido' },
      { selector: ':nth-child(7) > .form-group > #errorMessageFirstName', text: 'O campo Zip Code deve ser prenchido' },
      { selector: ':nth-child(8) > .form-group > #errorMessageFirstName', text: 'O campo Address deve ser prenchido' },
      { selector: ':nth-child(9) > .form-group > #errorMessageFirstName', text: 'O campo Additional Notes deve ser prenchido' }   
    ]
    errorMessages.forEach(({ selector, text }) => {      
      cy.get(selector).should('be.visible').and('have.text', text)
    })

  })



})