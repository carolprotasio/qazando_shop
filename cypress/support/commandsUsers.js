// REGISTER
Cypress.Commands.add('registerNewUser', (name, email, password) => { 
    cy.visit('/register')
    cy.get('#user').type(name)
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#btnRegister').click()

    cy.get('.swal2-confirm').click()
 })
Cypress.Commands.add('registerEmptyName', (email, password) => { 
    cy.visit('/register')
    
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#btnRegister').click()    
 })
Cypress.Commands.add('registerEmptyEmail', (name, password) => { 
    cy.visit('/register')
    cy.get('#user').type(name)    
    cy.get('#password').type(password)
    cy.get('#btnRegister').click()    
 })
Cypress.Commands.add('registerEmptyPass', (name, email) => { 
    cy.visit('/register')
    cy.get('#user').type(name)    
    cy.get('#email').type(email)
    cy.get('#btnRegister').click()    
 })
Cypress.Commands.add('registerAllEmptyField', () => { 
    cy.visit('/register')    
    cy.get('#btnRegister').click()    
 })
 //LOGIN
 Cypress.Commands.add('userLogin', (email, password) => { 
    cy.visit('/login')    
    cy.get('#user').type(email)
    cy.get('#password').type(password)
    cy.get('#btnLogin').click()  
    cy.get('.swal2-confirm').click()  
 })
 Cypress.Commands.add('loginEmptyEmail', (password) => { 
    cy.visit('/login')        
    cy.get('#password').type(password)
    cy.get('#btnLogin').click()      
 })
 Cypress.Commands.add('loginEmptyPass', (email, password) => { 
    cy.visit('/login')    
    cy.get('#user').type(email)    
    cy.get('#btnLogin').click()  
     
 })
 Cypress.Commands.add('loginEmptyField', () => { 
    cy.visit('/login')            
    cy.get('#btnLogin').click()  
     
 })
 //BILLING INFORMATION

Cypress.Commands.add('fillBillingInfo', (user) => {  
   if (user.fname) cy.get('#fname').type(user.fname);
   if (user.lname) cy.get('#lname').type(user.lname);
   if (user.cname) cy.get('#cname').type(user.cname);
   if (user.email) cy.get('#email').type(user.email);
   if (user.country) cy.get('#country').select(user.country);
   if (user.city) cy.get('#city').select(user.city);
   if (user.zip) cy.get('#zip').type(user.zip);
   if (user.faddress) cy.get('#faddress').type(user.faddress);
   if (user.messages) cy.get('#messages').type(user.messages);
 });
 