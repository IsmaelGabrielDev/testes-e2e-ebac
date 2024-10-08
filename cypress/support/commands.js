Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('detalhesCheckout', (nome, sobrenome, endereço, numero, cidade, cep, telefone, email) => {
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear()
    cy.get('#billing_address_1').clear().type(endereço)
    cy.get('#billing_address_2').clear().type(numero)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(telefone)
    cy.get('#billing_email').clear().type(email)
});

